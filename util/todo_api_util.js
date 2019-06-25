const fetchTodos = ()=>(
  $.ajax({method:'get', url:'/api/todos'})
)

export default fetchTodos
// window.fetchTodos


// b= Todo.new({title:"other",body:"more",done:"false"})