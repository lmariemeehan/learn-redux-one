import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

//STORE -> GLOBALIZED STATE THAT ALL COMPONENTS CAN GRAB DATA FROM. It's read only I believe. In the past, you would create a state that would belong to a specific component. But with redux, the state is 'globalized' and is called the 'store' 

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

//REDUCER - Basically just another function that will return an object. This is essential with working with the 'store' of redux. This function takes two arguments. The first is the original state of your function and the second being the action.
const counter = (state = 0; action) => {
  switch(action.type){
    case "INCREMENT":
      return state + 1
      case "DECREMENT":
        return state - 1
  }
}

//Now this is the actual store. Nothing fancy.
let store = createStore(counter);

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
