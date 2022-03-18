import { useContext } from 'react'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

export default function Profile () {
  const theme = useContext(ThemeContext)
  const { user, isLoggedIn } = useContext(UserContext)

  return (
    <div className='box' style={theme}>
      <h2>My Profile</h2>
      <p>Name: {user.name}</p>
    </div>
  )
}
