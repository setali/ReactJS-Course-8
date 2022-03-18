import { useContext } from 'react'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'
import { Navigate, useLocation, useNavigate } from 'react-router-dom'

export default function Login () {
  const theme = useContext(ThemeContext)
  const { login, isLoggedIn } = useContext(UserContext)

  const location = useLocation()
  // const navigate = useNavigate()

  if (isLoggedIn) {
    return <Navigate to={location.state?.from || '/'} />
  }

  // function loginCallback () {
  //   login()
  //   navigate('/')
  // }

  return (
    <div className='box' style={theme}>
      <h2>Login Page</h2>
      <p>
        <input placeholder='username' />
        <input placeholder='password' />
        <button onClick={login}>Login</button>
        {/* <button onClick={loginCallback}>Login</button> */}
      </p>
    </div>
  )
}
