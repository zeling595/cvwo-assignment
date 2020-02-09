import ajax from './ajax'

const BASE = ''

export const reqTodos = () => ajax(BASE + '/api/v1/todos')

export const reqAddTodo = (title, done) => ajax(BASE + '/api/v1/todos',{title, done}, 'POST')

export const reqCategory = () => ajax(BASE + '/api/v1/categories')

export const reqAddCategory = (title, done) => ajax(BASE + '/api/v1/categories',{title, done}, 'POST')