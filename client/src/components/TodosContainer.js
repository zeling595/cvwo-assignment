
import React, { Component } from 'react'
import axios from 'axios'

class TodosContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {
      todos: []
    }
    this.getTodos = this.getTodos.bind(this)
  }

  getTodos() {
    axios.get('https://localhost:3001/api/v1/todos')
    .then(response => {
      this.setState({todos: response.data});
      console.log(this.state.todos)
    })
    .catch(error => console.log(error))
  }

  componentDidMount() {
    this.getTodos()
  }

  render() {
    return (
      <div>
        <div className="inputContainer">
          <input className="taskInput" type="text" 
            placeholder="Add a task" maxLength="50"
            onKeyPress={this.createTodo} />
        </div>  	    
	<div className="listWrapper">
	   <ul className="taskList">
		  {this.state.todos.map((todo) => {
		    return(
                <p>{todo.title}</p>
		    )       
		  })} 	    
	   </ul>
	</div>
     </div>
    )
  }
}

export default TodosContainer