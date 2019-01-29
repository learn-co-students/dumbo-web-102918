import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addWizard} from '../redux'

class Header extends Component {

  handleClick = () => {
    this.props.addWizard({
      name: "102918",
      house: "Flatiron",
      redux: "Wizards!"
    })
  }

  render() {
    return (
      <header className="App-header">
        <img src={"https://image.flaticon.com/icons/svg/135/135869.svg"} className="App-logo" alt="logo" />
        <p>Harry Potter of Redux</p>
        <button onClick={this.handleClick}>Click to add a Wizard!</button>
      </header>
    );
  }

}

export default connect(null, {addWizard})(Header);
