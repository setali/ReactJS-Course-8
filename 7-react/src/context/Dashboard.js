import { useContext } from 'react'
import ThemeContext from './ThemeContext'

export default function Dashboard () {
  const theme = useContext(ThemeContext)

  return (
    <div className='box' style={theme}>
      <h2>Dashboard</h2>
    </div>
  )
}
