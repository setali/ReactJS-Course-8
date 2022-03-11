import React, { useState } from 'react'

export default function App () {
  const [counter1, setCounter1] = useState(0)
  const [counter2, setCounter2] = useState(0)

  return (
    <div>
      <div>Counter1: {counter1}</div>
      <div>Counter2: {counter2}</div>

      <button onClick={() => setCounter1(c => c + 1)}>Change counter 1</button>
      <button onClick={() => setCounter2(c => c + 1)}>Change counter 2</button>

      <MyComponent counter={counter1} />
      <MyMemoComponent counter={counter1} />
    </div>
  )
}

function MyComponent ({ counter }) {
  console.log('MyComponent')
  return <div>MyComponent: {counter}</div>
}

const MyMemoComponent = React.memo(function ({ counter }) {
  console.log('MyMemoComponent')
  return <div>MyMemoComponent: {counter}</div>
})
