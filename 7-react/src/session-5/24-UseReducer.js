import { useReducer, useState } from 'react'

const defaultState = 0

function reducer (state, { type, payload }) {
  console.log('Old', state, payload)

  switch (type) {
    case 'ADD':
      return state + payload

    case 'SUB':
      return state - payload

    case 'RESET':
      return defaultState

    default:
      return state
  }
}

export default function App () {
  const [count, setCount] = useState(0)

  const [state, dispatch] = useReducer(reducer, defaultState)

  console.log('Next', state)
  return (
    <div>
      State: {state}
      <button onClick={() => dispatch({ type: 'ADD', payload: 1 })}>+1</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 2 })}>+2</button>
      <button onClick={() => dispatch({ type: 'ADD', payload: 3 })}>+3</button>
      <button onClick={() => dispatch({ type: 'SUB', payload: 1 })}>-1</button>
      <button onClick={() => dispatch({ type: 'RESET' })}>Reset</button>
      <hr />
      Count: {count}
      <button onClick={() => setCount(c => c + 1)}>+</button>
    </div>
  )
}
