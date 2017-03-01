import React, { Component } from 'react'
import TodoItem from './TodoItem.jsx'
import Footer from './Footer.jsx'
import Filters from './Filters'
import TodoList from './TodoList'
import apiInterface from './ApiInterface'
import '../views/index1.css'

class App extends Component {
  constructor (props)
{
    super(props)
    this.state = {todos: []}
  }
  writeToDo (message) {
    apiInterface.writeTasks(message).then((result) => { return result.json() })
    .then((result) => {
      const newTodo = {description: message, status: false, id: result}
      this.setState((oldState) => {
        oldState.todos.push(newTodo)
      })
    })
  }
  destroyToDo (todo) {
    apiInterface.deleteTasks(todo.id).then(() => {
      const updatedTodos = this.state.todos.filter(todoElement => !(todoElement.id === todo.id))
      this.setState({ todos: updatedTodos })
    })
  }
  updateToDo (todo) {
    apiInterface.updateTask(todo.id, todo.description, todo.status).then(() => {
      const updatedTodos = this.state.todos.map(item => {
        if (item.id === todo.id) {
          item = todo
        }
        return item
      })
      this.setState({ todos: updatedTodos })
    })
  }
  render () {
    const category = this.props.params.filter
    console.log(category)
    let newItems
    switch (category) {
      case 'all':
        newItems = this.state.todos
        break
      case 'active':
        newItems = this.state.todos.filter((item) => item.status === false)
        break
      case 'completed':
        newItems = this.state.todos.filter((item) => item.status === true)
        break
      default:
        newItems = this.state.todos
        break
    }

    return (

      <div>
        <div className='todoapp'>
          <header className="header">
            <h1>todos</h1>
            <TodoItem writeTodo={ this.writeToDo.bind(this) } />
          </header>
          <TodoList todos={newItems} destroyTodo={this.destroyToDo.bind(this)} updateTodo={this.updateToDo.bind(this)}/>
          <Filters />
        </div>
        <Footer />
      </div>
    )
  }
  componentDidMount () {
    apiInterface.readTasks().then((result) => {
      return result.json()
    })
      .then((result) => {
        this.setState({todos: result})
      })
      .catch((err) => {
        console.log(err)
      })
  }
}

export default App
