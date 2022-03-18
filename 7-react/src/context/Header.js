import React from 'react'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'
import { Link } from 'react-router-dom'

export default class Header extends React.Component {
  render () {
    return (
      <UserContext.Consumer>
        {({ user, isLoggedIn, logout }) => (
          <ThemeContext.Consumer>
            {theme => (
              <div
                className='box'
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  ...theme
                }}
              >
                <h2>Header</h2>
                <div>
                  {isLoggedIn && <span>{user.name}</span>}
                  {isLoggedIn ? (
                    <span className='logout' onClick={logout}>
                      Logout
                    </span>
                  ) : (
                    <Link to='/login'>Login</Link>
                  )}
                </div>
              </div>
            )}
          </ThemeContext.Consumer>
        )}
      </UserContext.Consumer>
    )
  }
}
