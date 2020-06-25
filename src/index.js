import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

//STORE -> GLOBALIZED STATE (LIKE A DB) THAT ALL COMPONENTS CAN GRAB DATA FROM. It's read only I believe.

//ACTION INCREMENT - This just describes what you want to do. It's a simple function that returns an object.
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement = () {
  return {
    type: 'DECREMENT'
  }
}

//REDUCER

//DISPATCH

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
