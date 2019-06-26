import * as APIUtil from '../../util/todo_api_util'

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

export const fetchTodos = () => (
  function(dispatch) {
    APIUtil.fetchTodos().then(
      (response) => dispatch(receiveTodos(response))
    );
  }
);
export const createTodo = (todo)=>(
  function(){
    APIUtil.postTodos(todo)
  }
)

window.fetchTodos = fetchTodos;
window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;