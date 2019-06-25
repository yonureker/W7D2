export const RECEIVE_TODOS = 'RECEIVE TODOS';
export const RECEIVE_TODO = 'RECEIVE TODO' ;


export const receiveTodos = (todos)=>({
  type: RECEIVE_TODOS,
  todos: todos
});

export const receiveTodo = (todo)=>({
  type: RECEIVE_TODO,
  todo: todo
});
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;