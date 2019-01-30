import React, { Component } from 'react'
import { connect } from 'react-redux'
import Hog from './Hog'
import HogEditForm from './HogEditForm'
import { getHogs } from '../thunk/hogThunks'

// import hogs from '../data/porkers_data'

class HogContainer extends Component {
  componentDidMount() {
    this.props.getHogs()
  }

  render() {
    const hogsWithJogs = this.props.hogs.map(hog => <Hog key={hog.name} hog={hog} />)
    return (
      <div>
        <div className="App-logo">Joggit Hoggit</div>
        {/* <HogEditForm /> */}
        <div className="hobbitsContainer">
          {/* {hogsWithJogs} */}
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => console.log(state) || ({ hogs: state.hogs })

const mapDispatchToProps = (dispatch) => ({ getHogs: () => dispatch(getHogs()) })

export default connect(mapStateToProps, mapDispatchToProps)(HogContainer)
