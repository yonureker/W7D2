import React from 'react';
import { receiveTodos } from '../actions/todo_actions';
import { receiveTodo } from '../actions/todo_actions';
import configureStore from '../store/store.js';
import App from './app';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';



const Root =({store})=>(


     <Provider store = { store }>
    <App />
    </Provider>
  )

export default Root
