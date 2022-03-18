import React from 'react'
import { NavLink } from 'react-router-dom'
import ThemeContext from './ThemeContext'
import './sidebar.css'

export default class Sidebar extends React.Component {
  static contextType = ThemeContext

  render () {
    return (
      <div className='box sidebar' style={this.context}>
        <h4>Sidebar</h4>
        <ul>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About</NavLink>
          </li>
          <li>
            <NavLink to='/post'>Posts</NavLink>
          </li>
          <li>
            <NavLink to='/profile'>Profile</NavLink>
          </li>
          <li>
            <NavLink to='/dashboard'>Dashboard</NavLink>
          </li>
        </ul>
      </div>
    )
  }
}
