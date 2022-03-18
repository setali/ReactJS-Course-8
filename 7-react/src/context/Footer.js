import React from 'react'
import ThemeContext from './ThemeContext'

export default class Footer extends React.Component {
  render () {
    return (
      <div className='box' style={this.context}>
        <h2>Footer</h2>
      </div>
    )
  }
}

Footer.contextType = ThemeContext
