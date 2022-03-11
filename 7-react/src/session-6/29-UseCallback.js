import React, { useState, useEffect, useCallback } from 'react'

export default function UseCallback () {
  const [count, setCount] = useState(0)
  const [height, setHeight] = useState()

  useEffect(() => {
    setInterval(() => setCount(c => c + 1), 1000)
  }, [])

  const myInput = useCallback(node => {
    node?.focus()
  }, [])

  const myHeader = useCallback(node => {
    node && setHeight(node.getBoundingClientRect().height.toFixed(2))
  }, [])

  return (
    <div>
      <h2 ref={myHeader} style={{ backgroundColor: 'aqua' }}>
        Hello
      </h2>
      Height: {height}
      <hr />
      Count: {count}
      <input type='text' ref={myInput} />
    </div>
  )
}
