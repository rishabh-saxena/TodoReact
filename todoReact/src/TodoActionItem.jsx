import React, { Component } from 'react'
export default class TodoActionItem extends Component {
  constructor (props) {
    super(props)
    this.state = {
      showLabel: true
    }
  }
  showLabel () {
    this.setState((oldState) => {
      oldState.showLabel = !oldState.showLabel
    })
  }
  render () {
    return (
      <li id={this.props.todo.id} className='active'>
        <div className='view'>
          <input className='toggle' type='checkbox' id='todo-checkbox-{id}' checked={this.props.todo.status} onChange={() => {
            const todoUpdateObject = {id: this.props.todo.id, description: this.props.todo.description, status: !(this.props.todo.status)}
            this.props.updateTodo(todoUpdateObject)
          }} />
          {
            this.state.showLabel ?
            <div>
              <label onDoubleClick={this.showLabel.bind(this)} classId='todo-label-{id}'>{this.props.todo.description}</label >
            </div> :
             <input classId='todo-edit-textbox-{id}' type='text' name='editableText' onDoubleClick={(event) => {
               const todoUpdateObject = {id: this.props.todo.id, description: this.props.todo.event.target.value, status: !(this.props.todo.status)}
               this.props.updateTodo(todoUpdateObject)
             }}/>
          }

          <button classId='todo-button-{id}' className="destroy" onClick={() => this.props.destroyTodo(this.props.todo)}></button>
        </div>
      </li>
    )
  }
}
