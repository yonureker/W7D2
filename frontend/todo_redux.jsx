import React from 'react';
import ReactDOM from 'react-dom';
import Root from './components/root';
import configureStore from './store/store.js';
import allTodos from './reducers/selectors'

window.allTodos = allTodos;

//import App from './frontend/components/app';

const store = configureStore();
window.store = store;
document.addEventListener("DOMContentLoaded", () => {
 
  const root = document.getElementById("root");
  ReactDOM.render(<Root store ={store} />, root);
})
