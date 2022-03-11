import React from 'react'
import ThemeContext from './ThemeContext'

export default class Footer extends React.Component {
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
        <h2>Footer</h2>
      </div>
    )
  }
}

Footer.contextType = ThemeContext
