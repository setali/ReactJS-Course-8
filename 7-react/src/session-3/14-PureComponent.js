import React, { Component, PureComponent } from 'react'

export default class App extends Component {
  state = {
    counter1: 0,
    counter2: 0
  }

  render () {
    console.log('Parent')
    return (
      <div>
        <div>Counter 1: {this.state.counter1}</div>
        <div>Counter 2: {this.state.counter2}</div>
        <button
          onClick={() => this.setState(s => ({ counter1: s.counter1 + 1 }))}
        >
          Change Counter 1
        </button>
        <button onClick={() => this.setState(s => ({ counter2: s.counter2 }))}>
          Change Counter 2
        </button>
        <MyComponent counter={this.state.counter1} />
        <MyPureComponent counter={this.state.counter1} />
      </div>
    )
  }
}

class MyComponent extends Component {
  shouldComponentUpdate (nextProps, nextState) {
    return nextProps.counter !== this.props.counter
    // if (nextProps.counter !== this.props.counter) {
    //   return true
    // } else {
    //   return false
    // }
  }

  render () {
    console.log('MyComponent', this.props.counter)
    return <div>MyComponent: {this.props.counter}</div>
  }
}

class MyPureComponent extends PureComponent {
  render () {
    console.log('MyPureComponent', this.props.counter)
    return <div>MyPureComponent: {this.props.counter}</div>
  }
}
