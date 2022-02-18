import React, { Component } from 'react'

export default class LifeCycle extends Component {
  constructor (props) {
    super(props)
    this.state = {
      counter: 0,
      users: [],
      loading: false
    }
    console.log('constructor')
  }

  getData () {
    this.setState({ loading: true })
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => this.setState({ users: data }))
      .finally(() => this.setState({ loading: false }))
  }

  componentDidMount () {
    console.log('componentDidMount')
    this.getData()
  }

  componentDidUpdate () {
    console.log('componentDidUpdate')
  }

  static getDerivedStateFromProps (props, state) {
    console.log('getDerivedStateFromProps', state.counter)

    if (state.counter % 2) {
      return {
        counter: state.counter + 1
      }
    }

    return null
  }

  shouldComponentUpdate (nextProps, nextState) {
    console.log('shouldComponentUpdate', this.state.counter, nextState.counter)
    if (nextState.counter % 4 === 1) {
      return false
    }

    return true
  }

  render () {
    console.log('render')
    return (
      <div className='counter'>
        Counter: {this.state.counter}
        <button
          onClick={() => this.setState({ counter: this.state.counter + 1 })}
        >
          +
        </button>
        <button
          onClick={() => this.setState({ counter: this.state.counter - 1 })}
        >
          -
        </button>
        <hr />
        {this.state.loading ? (
          'Loading ....'
        ) : (
          <ol>
            {this.state.users.map(user => {
              return <li key={user.id}>{user.name}</li>
            })}
          </ol>
        )}
      </div>
    )
  }
}
