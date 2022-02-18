import React, { Component } from 'react'

export default class Title extends Component {
  //   static defaultProps = {
  //     name: 'Qoli',
  //     color: 'blue'
  //   }

  render () {
    return (
      <div>
        <h1 style={{ color: this.props.color }}>{this.props.name}</h1>
      </div>
    )
  }
}

Title.defaultProps = {
  name: 'Qoli',
  color: 'blue'
}
