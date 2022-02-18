import React, { Component } from 'react'

export default class Counter extends Component {
  constructor (props) {
    super(props)
    this.decrease2 = this.decrease2.bind(this)

    this.state = {
      counter: props.count
    }
  }

  increase = () => this.setState({ counter: this.state.counter + 1 })

  decrease () {
    this.setState({ counter: this.state.counter - 1 })
  }

  decrease2 () {
    this.setState({ counter: this.state.counter - 2 })
  }

  decrease3 () {
    this.setState({ counter: this.state.counter - 3 })
  }

  render () {
    console.log('render', this.props)
    return (
      <div>
        Counter: {this.state.counter}
        <button onClick={this.increase}>+</button>
        <button onClick={this.decrease.bind(this)}>-</button>
        <button onClick={this.decrease2}>-2</button>
        <button onClick={() => this.decrease3()}>-3</button>
      </div>
    )
  }
}
