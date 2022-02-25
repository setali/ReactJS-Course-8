import React, { useEffect, useState } from 'react'

export default function Parent () {
  const [mount, setMount] = useState(true)

  return (
    <div>
      <button onClick={() => setMount(!mount)}>
        {mount ? 'UnMount' : 'Mount'}
      </button>
      {mount && <MyComponent />}
    </div>
  )
}

function MyComponent () {
  const [counter, setCounter] = useState(0)
  const [users, setUsers] = useState([])

  useEffect(() => {
    console.log('Component Did Mount')
    // ...
  }, [])

  // cDM, cDU, cWU
  useEffect(() => {
    console.log('Salam', counter)
    const timeoutId = setTimeout(() => setCounter(counter + 1), 2000)

    return () => {
      console.log('Cleanup', counter)
      clearTimeout(timeoutId)
    }
  }, [counter])

  

  useEffect(() => {
    return () => {
      console.log('Component Will Unmount')
    }
  }, [])

  useEffect(() => {
    const controller = new AbortController()

    const { signal } = controller

    fetch('http://jsonplaceholder.typicode.com/users', { signal })
      .then(response => response.json())
      .then(data => setUsers(data))

    return () => {
      controller.abort()
    }
  }, [])

  return (
    <div>
      <ol>
        {users.map(user => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ol>
      <hr />
      Counter: {counter}
    </div>
  )
}
