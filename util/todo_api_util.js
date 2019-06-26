export const fetchTodos = ()=>(
  $.ajax({method:'get', url:'/api/todos'})
)

export const postTodos = ()=>(
  $.ajax({method:'post',url:'api/todos'})
)
// export default fetchTodos;
// window.fetchTodos


// b= Todo.new({title:"other",body:"more",done:"false"})
//b= {title:"other",body:"more",}