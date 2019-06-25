import React from 'react';

function TodoListItem (prop){
  return(
    <ul>
      <li>{prop.todo.title}</li>
      <li>{prop.todo.body}</li>
    </ul>
  )
}
export default TodoListItem