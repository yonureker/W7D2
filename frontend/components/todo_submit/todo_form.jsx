import React from 'react'
class TodoForm extends React.Component{
  constructor(prop){
    super(prop)
    this.state={
      title: '',
      body: ''
    }
  }
  render(){
    return(<form>
      <label> Title:
      <input type="text" value={this.state.title}/>
      </label>

      <label> Body:
      <input type="text" value={this.state.body} />
      </label>

      <input type="submit" value="Add Todo"/>
    </form>)
  }
}
export default TodoForm