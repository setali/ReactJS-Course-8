import { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom'
import UserContext from './UserContext'
import Loading from './Loading'

export default function RequireAuth ({ children, element }) {
  const { isLoggedIn, isLoading } = useContext(UserContext)

  const { pathname } = useLocation()

  if (isLoading) {
    return <Loading />
  }

  if (isLoggedIn) {
    return element || children
  }

  return <Navigate to='/login' state={{ from: pathname }} />
}
