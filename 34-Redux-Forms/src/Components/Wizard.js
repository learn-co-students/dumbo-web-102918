import React, { Component } from 'react';
import {connect} from 'react-redux'
import {removeWizard} from '../redux/index'

class Wizard extends Component {

  handleClick = () => {
    // const {removeWizard, wizard} = this.props
    // removeWizard(wizard.name)
    this.props.removeWizard(this.props.wizard.name)
  }

  render() {
    const {wizard} = this.props
    return (
      <div onClick={this.handleClick}>
      <h6>{wizard.name}</h6>
        <p>
          {wizard.house} | {wizard.redux}
        </p>
      </div>
    );
  }
}

// const mapDispatchToProps = (dispatch) => {
//   return {
//     removeWizard: (wizardName) => dispatch({type:"REMOVE_WIZARD", payload: wizardName})
//   }
// }

export default connect(null, {removeWizard})(Wizard);
