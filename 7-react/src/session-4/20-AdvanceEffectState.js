import { useEffect, useState } from 'react'

// 12ef51
// 14fc56

export default function Counter () {
  const [count, setCount] = useState(0)

  useEffect(() => {
    console.log('UseEffect', count)
    setInterval(() => {
      console.log('setInterval', count)
      setCount(s => s + 1)
      //   setCount(count => {
      //     console.log('Set Count', count)
      //     return count + 1
      //   })
    }, 1000)

    
  }, [])

  return <div>{count}</div>
}
