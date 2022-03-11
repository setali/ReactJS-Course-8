import React from 'react'
import ThemeContext from './ThemeContext'

export default class Sidebar extends React.Component {
  static contextType = ThemeContext

  render () {
    return (
      <div
        style={{
          border: '1px solid',
          padding: '1rem',
          margin: '1rem',
          ...this.context
        }}
      >
        <h4>Sidebar</h4>
        <ul>
          <li>Home</li>
        </ul>
      </div>
    )
  }
}
