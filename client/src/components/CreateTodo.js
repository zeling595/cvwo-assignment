import React from 'react';
import {reqAddTodo, reqAddCategory} from '../api'
import { Button, Input} from 'antd'

export default class CreateTodo extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            todo:'',
            category:''
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    createTodo = async() => {
        const todo = await reqAddTodo()
        const category = await reqAddCategory()
        this.setState({
            todo:'',
            category:'',
        })
    }

    render(){
        const {title, category} = this.state
        return (
            <div>
                <div className="inputContainer">
                    <h1>Create Todo</h1>
                </div>
                <div>
                    <label>Title: </label>
                    <Input 
                        type="text"
                        placeholder="Add a task"
                        maxLength="50"
                        value={title}
                        name="title"
                        onChange={this.handleChange}
                    />
                </div>
                <div>
                <label>Category: </label>
                <Input 
                    type="text"
                    placeholder="Add a category"
                    maxLength="50"
                    value={category}
                    name="category"
                    onChange={this.handleChange}
                />
                </div>
                <Button type="primary" onClick={this.createTodo}>Add</Button>
            </div>
        )
    }
}