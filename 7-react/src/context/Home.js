import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'
import UserContext from './UserContext'

export default function Home () {
  const theme = useContext(ThemeContext)
  const { isLoggedIn, user } = useContext(UserContext)

  return (
    <div className='box' style={theme}>
      <h2>Homepage</h2>
      {isLoggedIn && <p>Welcome {user.name}</p>}
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
        corrupti? Dolorem mollitia eligendi accusantium accusamus illum
        reiciendis blanditiis ipsa sit laudantium earum corrupti ipsam, est
        iusto! Repudiandae consectetur molestiae quis!
      </p>
    </div>
  )
}
