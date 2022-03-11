import React, { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function Home () {
  const theme = useContext(ThemeContext)

  return (
    <div
      style={{ border: '1px solid', padding: '1rem', margin: '1rem', ...theme }}
    >
      <h2>Homepage</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatum,
        corrupti? Dolorem mollitia eligendi accusantium accusamus illum
        reiciendis blanditiis ipsa sit laudantium earum corrupti ipsam, est
        iusto! Repudiandae consectetur molestiae quis!
      </p>
    </div>
  )
}
