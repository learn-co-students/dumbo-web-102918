import React, { Component } from "react";

class Title extends Component {
  render() {
    console.log("Props", this.props);
    return <h1>{this.props.name}</h1>;
  }
}

export default Title;
