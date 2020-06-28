import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';

// BIG PICTURE OVERVIEW - HOW IT WORKS - The dispatcher dispatches whatever action you tell it to. The action is just a function that returns a named aka "type" object. Then based on the name the reducer decides what it needs to do and returns a piece of state which then gets pushed to updating the store.

//STORE -> GLOBALIZED STATE THAT ALL COMPONENTS CAN GRAB DATA FROM. It's read only I believe. In the past, you would create a state that would belong to a specific component. But with redux, the state is 'globalized' and is called the 'store' 

//ACTION INCREMENT - This just describes what you want to do. It's a simple function that returns an object.
const increment = () => {
  return {
    type: 'INCREMENT'
  }
}
const decrement = () => {
  return {
    type: 'DECREMENT'
  }
}

//REDUCER - This instructs the store how to transition from one state to the next and is essential with working with the 'store' of redux. Basically just another function that will return an object. This function takes two arguments. The first is the original state of your function and the second being the action.

const counter = (state = 0, action) => {
  switch(action.type){
    case "INCREMENT":
      return state + 1;
    case "DECREMENT":
      return state - 1
  }
}

//Now this is the actual store. Nothing fancy. The store has a "createStore" function that gets a reducer passed in to it. See below.
let store = createStore(counter);

//Display it in the console. This is not mandatory at all, just used for checking and debugging.
store.subscribe(() => console.log(store.getState()))

//DISPATCH - This is the executioner. It sends the action to the reducer, then the reducer checks what it needs to do, then the store gets updated.
store.dispatch(increment())
store.dispatch(decrement())

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
