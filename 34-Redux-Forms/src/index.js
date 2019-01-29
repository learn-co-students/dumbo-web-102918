import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

// Function
import {createStore} from 'redux'
import reducer from './redux/reducer'
// Component
import {Provider} from 'react-redux'

const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , document.getElementById('root'));
