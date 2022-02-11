import { Component } from 'react'

export default class ListKey extends Component {
  state = { users: [] }

  componentDidMount () {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(users => this.setState({ users }))
  }

  render () {
    return (
      <div>
        <h2>Users list</h2>
        <ol>
          {this.state.users.map((user, index) => (
            <li key={user.id}>
              {user.id} - {user.name}
            </li>
          ))}
        </ol>
      </div>
    )
  }
}
