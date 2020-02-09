import React, { Component } from 'react'
import { Menu, Icon } from 'antd'
import axios from 'axios'
import update from 'immutability-helper'
import {reqCategory} from '../api'

import './Category.less'

export default class Category extends Component {

    constructor(props){
        super(props)
        this.state = {
            categories:[],
        }
    }

    
    showTodos = () => {
        console.log('clicked')
    }

    getCategory = async() => {
        const result = await reqCategory()
        console.log(result.data)
        const categories = result.data.data
        this.setState({
            categories: categories
        })
    }

    componentDidMount() {
        this.getCategory()
    }

    handleChange(event){
        const {name, value} = event.target
        this.setState({
          [name]: value
        })
    }

    deleteCategory = (id) => {
    axios.delete(`http://localhost:3001/api/v1/categories/${id}`)
    .then(response => {
        const categoryIndex = this.state.categories.findIndex(x => x.id === id)
        const categories = update(this.state.categories, {
        $splice: [[categoryIndex, 1]]
        })
        this.setState({
        categories: categories
        })
    })
    .catch(error => console.log(error))
    }

    render() {
        return (
            <div>
                <div className="Category">
                    <div className="Category-header">
                        {/* <img src={logo} alt="logo" /> */}
                        <h1>Category</h1>
                    </div>
                </div>
                {/* static menu */}
                <div>
                    <Menu
                    mode="inline"
                    theme="dark"
                    >
                        <Menu.Item key="1" onClick={this.handleClick}>
                            <Icon type="bars" />
                            <span>All</span>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Icon type="bars" />
                            <span>Aactive</span>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Icon type="bars" />
                            <span>Completed</span>
                        </Menu.Item>
                    </Menu>
                </div>
                {/* dynamic menu of different category*/}
                <div>
                    <Menu
                    mode="inline"
                    theme="dark"
                    >
                    {this.state.categories.map((category) => {
                        return(
                            <Menu.Item category={category} key={category.id} onClick={this.showTodos}> 
                                <Icon type="bars" />        
                                <label>{category.attributes.title}</label>
                                <Icon 
                                    type="close-circle" 
                                    onClick={(e) => this.deleteCategory(category.id)} />
                            </Menu.Item>
                        )
                    })}
                    </Menu>
                </div>
            </div>
        )
    }
}