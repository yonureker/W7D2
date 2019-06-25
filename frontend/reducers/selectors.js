function allTodos(state) {
  // console.log(state.todo);
  // let keys = Object.keys()
  return Object.keys(state.todo).map((el) => (
      state.todo[el]
    )
  )
}

export default allTodos;