import { useState } from 'react'
import ThemeContext, { themes } from './ThemeContext'
import useAuth from './useAuth'
import UserContext from './UserContext'
import { BrowserRouter as RouteProvider } from 'react-router-dom'

export default function Provider ({ children }) {
  const { user, isLoggedIn, isLoading, login, logout } = useAuth()
  const [theme, setTheme] = useState(themes.light)

  return (
    <RouteProvider>
      <UserContext.Provider
        value={{ user, isLoggedIn, login, logout, isLoading }}
      >
        <ThemeContext.Provider value={theme}>
          {theme === themes.light ? (
            <button onClick={() => setTheme(themes.dark)}>Dark</button>
          ) : (
            <button onClick={() => setTheme(themes.light)}>Light</button>
          )}
          {children}
        </ThemeContext.Provider>
      </UserContext.Provider>
    </RouteProvider>
  )
}
