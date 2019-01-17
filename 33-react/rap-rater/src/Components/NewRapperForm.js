import React, { Component } from "react";

class NewRapperForm extends Component {
  state = {
    name: "",
    rating: 0,
    sadImage: "",
    happyImage: ""
  };

  changeHandler = event => {
    console.log(event.target.name);
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      name: "",
      happyImage: "",
      sadImage: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          name="name"
          placeholder="Enter Rapper Name"
          value={this.state.name}
          onChange={this.changeHandler}
        />

        <input
          type="text"
          name="happyImage"
          placeholder="Enter Happy Image"
          value={this.state.happyImage}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          name="sadImage"
          placeholder="Enter Sad Image"
          value={this.state.sadImage}
          onChange={this.changeHandler}
        />
        <button>Create Rapper</button>
      </form>
    );
  }
}

export default NewRapperForm;
