import React, { Component } from "react";
import logo from "./logo.svg";
import Title from "./title";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div>
        <Title name="Test" />
        <Title name="Kiss My..." />
        <Title name="Kiss " />
        <Title name="Kiss My Hash" />
        <Title name="Kiss My Hash" />
        <Title name="Kiss My Hash" />
        <Title name="Kiss My Hash" />
        <Title name="Kiss My Hash" />
        <Title name="Kiss My Hash" />
      </div>
    );
  }
}

export default App;
