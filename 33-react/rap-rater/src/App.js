import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import RapperContainer from "./RapperContainer";
import RapperCard from "./RapperCard";
import NewRapperForm from "./NewRapperForm";
import SearchForm from "./SearchForm";

//import rapperList
//create a new component for each rapper <= eventual cool
class App extends Component {
  //State is the inherent property of this Component whereas props are injected in
  state = {
    searchTerm: "",
    rapperList: [],
    filteredArr: []
  };

  componentDidMount() {
    fetch("http://localhost:3000/rapperList")
      .then(resp => resp.json())
      .then(data =>
        this.setState({
          rapperList: data,
          filteredArr: data
        })
      );
  }

  clickHandler = obj => {
    const newArr = [...this.state.rapperList];
    newArr.forEach(rapper => {
      return rapper.name === obj.name ? rapper.rating++ : null;
    });
    this.setState({
      rapperList: newArr,
      filteredArr: newArr
    });
  };

  deleteHandler = obj => {
    console.log("deleting");
    const newArr = [...this.state.rapperList];
    const newNewArr = newArr.filter(rapper => rapper.name !== obj.name);
    this.setState({
      filteredArr: newNewArr
    });
  };

  submitHandler = rapper => {
    let newArr = [rapper, ...this.state.rapperList];
    this.setState({
      rapperList: newArr,
      filteredArr: newArr
    });
  };

  changeHandler = e => {
    let search = e.target.value;
    let newArr = [...this.state.rapperList].filter(rapper =>
      rapper.name.includes(search)
    );

    this.setState({
      searchTerm: e.target.value,
      filteredArr: newArr
    });
  };

  render() {
    return (
      <div>
        {this.state.rapperList.length > 0 ? (
          <div>
            <SearchForm
              value={this.state.searchTerm}
              changeHandler={this.changeHandler}
            />
            <RapperContainer
              rapperList={this.state.filteredArr}
              clickHandler={this.clickHandler}
              deleteHandler={this.deleteHandler}
            />
            <NewRapperForm submitHandler={this.submitHandler} />
          </div>
        ) : (
          <h1>Loading</h1>
        )}
      </div>
    );
  }
}

export default App;
