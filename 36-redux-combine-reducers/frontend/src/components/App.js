import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'


import HobbitContainer from './HobbitContainer'
import HogContainer from './HogContainer'

class App extends Component {

  render() {
    return (
      <Router>
        <div className='App'>
          <Route path='/hobbits' component={HobbitContainer} />
          <Route path='/hogs' component={HogContainer} />
        </div>
      </Router>
    );
  }
}



export default App;
