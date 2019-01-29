import React, { Component } from 'react';
import {connect} from 'react-redux'
import {addWizard} from '../redux'

console.log(addWizard);
class WizardForm extends Component {

  state = {
    name: "",
    house: "",
    redux: ""
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name] : e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    // console.log(this.state);
    const wizardObj = this.state
    this.props.addWizard(wizardObj)

  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name
        </label>
          <input type="text" name="name" value={this.state.name} onChange={this.handleChange}/>
        <label>
          House
        </label>
          <input type="text" name="house" value={this.state.house} onChange={this.handleChange}/>
        <label>
          Redux
        </label>
          <input type="text" name="redux" value={this.state.redux} onChange={this.handleChange}/>
        <input type="submit"/>
      </form>
    );
  }

}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     addWizard: (wizardObj) => {dispatch({type: "ADD_WIZARD", payload: wizardObj})}
//   }
// }

export default connect(null, {addWizard})(WizardForm);
