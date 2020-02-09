
import React, { Component } from 'react'
import axios from 'axios'
import update from 'immutability-helper'
import {reqTodos, reqAddTodo} from '../api'
import { Button } from 'antd'

class TodosItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
	    todos: [],
	}
	this.handleChange = this.handleChange.bind(this)
  }

  getTodos = async() => {
    const result = await reqTodos()
    console.log(result.data)
    const todos = result.data.data
    this.setState({
      todos: todos
    })
  }
  
  componentDidMount() {
    this.getTodos()
  }

  handleChange(event){
    const {name, value} = event.target
    this.setState({
      [name]: value
    })
  }

  updateTodo = (e, id) => {
	
    axios.put(`http://localhost:3001/api/v1/todos/${id}`, {todo: {done: e.target.checked}})
    .then(response => {
      const todoIndex = this.state.todos.findIndex(x => x.id === response.data.id)
      const todos = update(this.state.todos, {
        [todoIndex]: {$set: response.data}
      })
      this.setState({
        todos: todos
      })
    })
    .catch(error => console.log(error))      
  }

  deleteTodo = (id) => {
    axios.delete(`http://localhost:3001/api/v1/todos/${id}`)
    .then(response => {
      const todoIndex = this.state.todos.findIndex(x => x.id === id)
      const todos = update(this.state.todos, {
        $splice: [[todoIndex, 1]]
      })
      this.setState({
        todos: todos
      })
    })
    .catch(error => console.log(error))
  }

  onClick = () => {
    console.log("Clicked")
  }

  render(){
    return (
      <div>
        <div className="listWrapper">
          <ul className="taskList">
            {this.state.todos.map((todo) => {
              return(
              <li className="task" todo={todo} key={todo.id}>
                <input 
                  className="taskCheckbox" 
                  type="checkbox" 
                  checked={todo.done}
                  name="done"
                  onChange={(e) => this.updateTodo(e, todo.id)} 
                />             
                <label className="taskLabel">Todo: {todo.attributes.title}</label>
                <span className="deleteTaskBtn" 
                  onClick={(e) => this.deleteTodo(todo.id)}>
                  <Button>Delete</Button>
                </span>
              </li>
              )       
            })} 	    
          </ul>
        </div>
     </div>
    )
  }
}

export default TodosItem