import React from 'react'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

export default class Header extends React.Component {
  render () {
    return (
      <UserContext.Consumer>
        {({ user, isLoggedIn, login, logout }) => (
          <ThemeContext.Consumer>
            {theme => (
              <div
                style={{
                  border: '1px solid',
                  padding: '1rem',
                  margin: '1rem',
                  display: 'flex',
                  justifyContent: 'space-between',
                  ...theme
                }}
              >
                <h2>Header</h2>
                <div>
                  {isLoggedIn && <span>{user.name}</span>}
                  {isLoggedIn ? (
                    <span
                      style={{ color: 'red', margin: '10px' }}
                      onClick={logout}
                    >
                      Logout
                    </span>
                  ) : (
                    <span onClick={login}>Login</span>
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
