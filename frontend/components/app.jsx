import React from 'react';
import TodoList from './todos/todo_list_container';
import TodoForm from './todo_submit/todo_form'

function App(){
  return(
    <div>
      <h1>Add a todo list</h1>
      <h2>Other stuff</h2>
      <TodoList />
      <TodoForm />
      </div>
      
  )
}
export default App;
