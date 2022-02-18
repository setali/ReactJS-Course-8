import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const portal = document.getElementById('portal')

export default class Portal extends Component {
  state = { counter: 0 }
  componentDidMount () {
    setInterval(() => this.setState({ counter: this.state.counter + 1 }), 1000)
  }

  render () {
    return ReactDOM.createPortal(
      <Counter counter={this.state.counter} />,
      portal
    )
  }
}

class Counter extends Component {
  render () {
    return <div>Counter: {this.props.counter}</div>
  }
}
