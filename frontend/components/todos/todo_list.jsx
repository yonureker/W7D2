import React from 'react';
import TodoListItem from '../todo_list/todo_list_item';

// module.exports = () => <h3>Todo List goes here!</h3>
// export default const here =
const TodoList=(props)=>{
  return (<div>
    <h3>Todos lul</h3>
    {props.todos.map(el=><TodoListItem todo={el} key={el.id}/>)}
  </div>)};

export default TodoList;