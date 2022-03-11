import React, { useEffect, useState } from 'react'
import Footer from './Footer'
import Header from './Header'
import Home from './Home'
import request from './request'
import Sidebar from './Sidebar'
import ThemeContext, { themes } from './ThemeContext'
import UserContext from './UserContext'
import { getToken, removeToken, setToken } from './utils'

export default function App () {
  const [theme, setTheme] = useState(themes.light)
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  useEffect(() => {
    const token = getToken()
    if (token) {
      getUser()
    }
  }, [])

  function login () {
    request('/users/1').then(response => {
      setUser(response.data)
      setIsLoggedIn(true)
      setToken(response.data.email)
    })
  }

  function getUser () {
    request('/users/1').then(response => {
      setUser(response.data)
      setIsLoggedIn(true)
    })
  }

  function logout () {
    setUser({})
    setIsLoggedIn(false)
    removeToken()
  }

  return (
    <div>
      <UserContext.Provider value={{ user, isLoggedIn, login, logout }}>
        <ThemeContext.Provider value={theme}>
          {theme === themes.light ? (
            <button onClick={() => setTheme(themes.dark)}>Dark</button>
          ) : (
            <button onClick={() => setTheme(themes.light)}>Light</button>
          )}

          <Header />
          <section style={{ display: 'flex' }}>
            <Sidebar />
            <Home />
          </section>

          <Footer />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </div>
  )
}
