import React, {Component} from 'react'
import TodoActionItem from './TodoActionItem'
export default class TodoList extends Component
{
  render () {
    const todo = this.props.todos.map((todo) => {
      return (<TodoActionItem todo={todo} destroyTodo={this.props.destroyTodo} updateTodo={this.props.updateTodo}/>)
    })
    return (
     <ul className="todo-list"> {todo}</ul>
    )
  }
}
