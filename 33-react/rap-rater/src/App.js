import React, { Component } from "react";
import { Route, Switch, withRouter } from "react-router-dom";
import "./App.css";
import RapperContainer from "./Containers/RapperContainer";
import RapperCard from "./Components/RapperCard";
import NewRapperForm from "./Components/NewRapperForm";
import SearchForm from "./Components/SearchForm";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";

class App extends Component {
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
    this.setState(
      {
        rapperList: newArr,
        filteredArr: newArr
      },
      () => this.props.history.push("/rappers")
    );
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
    console.log("app props", this.props);
    return (
      <div>
        <Navbar />
        <Switch>
          <Route
            path="/rappers"
            render={() => {
              if (this.state.rapperList.length > 0) {
                return (
                  <div>
                    <NewRapperForm submitHandler={this.submitHandler} />
                    <br />
                    <SearchForm
                      value={this.state.searchTerm}
                      changeHandler={this.changeHandler}
                    />
                    <br />
                    <RapperContainer
                      rapperList={this.state.filteredArr}
                      clickHandler={this.clickHandler}
                      deleteHandler={this.deleteHandler}
                    />
                  </div>
                );
              } else {
                console.log("empty");
                return <h1>Loading</h1>;
              }
            }}
          />
          <Route path="/" component={Home} />
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
