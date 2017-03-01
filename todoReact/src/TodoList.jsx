import React, {Component} from 'react'
import TodoActionItem from './TodoActionItem'
export default class TodoList extends Component
{
  render ()
  {
    const todo = this.props.todos.map((todo) => {
      return (<TodoActionItem todo={todo}/>)
    })
    return (
     <ul className="todo-list"> {todo}</ul>
    )
  }
}
