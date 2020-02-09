import React, { Component } from 'react'
import CreateTodo from './CreateTodo';
import './Header.less'

export default class Header extends Component {
    render() {
        return (
            <div className="header">
                <CreateTodo />
            </div>
        )
    }
}