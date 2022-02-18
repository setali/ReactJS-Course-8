import React, { Component } from 'react'
import Tasks from './Tasks'
import Button from './Button'

export default class App extends Component {
  render () {
    return (
      <div>
        <h2>My tasks</h2>
        <Button style={{ color: 'red' }} permission='add-task'>
          Add task
        </Button>
        <Tasks permission='view-task-list' />
      </div>
    )
  }
}
