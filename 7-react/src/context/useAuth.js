import { useState, useEffect } from 'react'
import request from './request'
import { getToken, removeToken, setToken } from './utils'

export default function useAuth () {
  const [user, setUser] = useState({})
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const token = getToken()
    if (token) {
      getUser()
    } else {
      setIsLoading(false)
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
    request('/users/1')
      .then(response => {
        setUser(response.data)
        setIsLoggedIn(true)
      })
      .finally(() => setIsLoading(false))
  }

  function logout () {
    setUser({})
    setIsLoggedIn(false)
    removeToken()
  }

  return {
    user,
    isLoggedIn,
    isLoading,
    login,
    logout
  }
}
