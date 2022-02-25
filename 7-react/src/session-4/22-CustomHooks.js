import React, { useState } from 'react'

function useField (defaultValue = '') {
  const [value, setValue] = useState(defaultValue)

  return {
    value,
    onChange: e => setValue(e.target.value)
  }
}

export default function CustomHooks () {
  const username = useField()
  const password = useField()

  function save (e) {
    e.preventDefault()
    console.log(username.value, password.value)
  }

  return (
    <div>
      <form onSubmit={save}>
        <input type='text' placeholder='Username' {...username} />
        <input type='text' placeholder='Password' {...password} />
        <button type='submit'>Save</button>
      </form>
    </div>
  )
}
//   export default function CustomHooks () {
//     const [username, setUsername] = useState('')
//     const [password, setPassword] = useState('')

//     function save (e) {
//       e.preventDefault()
//       console.log(username, password)
//     }

//     return (
//       <div>
//         <form onSubmit={save}>
//           <input
//             type='text'
//             value={username}
//             placeholder='Username'
//             onChange={e => setUsername(e.target.value)}
//           />
//           <input
//             type='text'
//             value={password}
//             placeholder='Password'
//             onChange={e => setPassword(e.target.value)}
//           />
//           <button type='submit'>Save</button>
//         </form>
//       </div>
//     )
//   }
