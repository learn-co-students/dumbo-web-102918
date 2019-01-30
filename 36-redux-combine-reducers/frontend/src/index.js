import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import { Provider } from 'react-redux'
import hobbitReducer from './reducers/hobbitReducer'
import hogReducer from './reducers/hogReducer'

const rootReducer = combineReducers({ hobbitInfo: hobbitReducer, hogs: hogReducer })

// const store = createStore(hobbitReducer)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(rootReducer,  composeEnhancers(applyMiddleware(thunk)))
// const store = createStore(rootReducer, applyMiddleware(thunk))

ReactDOM.render(<Provider store={store}>
  <App />
</Provider> , document.getElementById('root'));
