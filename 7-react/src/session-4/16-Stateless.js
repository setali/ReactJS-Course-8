import React, { Component } from 'react'

export default class Stateless extends Component {
  state = {
    users: [
      { id: 1, name: 'Fateme Babaie' },
      { id: 2, name: 'Sanaz Zareie' },
      { id: 3, name: 'Maryam Khoshroo' }
    ]
  }

  render () {
    return (
      <div>
        Stateless
        {this.state.users.map(user => (
          <User key={user.id} user={user} />
        ))}
      </div>
    )
  }
}

function User ({ user }) {
  return (
    <div>
      <span>{user.id}</span> - <span>{user.name}</span>
    </div>
  )
}
