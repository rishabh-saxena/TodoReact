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
      this.setState((oldState) => { oldState.todos.push(newTodo) })
    })
  }
  // destroyToDo (id) {
  //   apiInterface.deleteTasks(id).then(() => { console.log('deleted') })
  // }
  render () {
    return (
      <div>
        <div className='todoapp'>
          <header className="header">
            <h1>todos</h1>
            <TodoItem writeTodo={ this.writeToDo.bind(this) } />
          </header>
          <TodoList todos={this.state.todos}/>
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
