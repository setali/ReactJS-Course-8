import { useState } from 'react'

function getInitialData () {
  return 999999n ** 999999n
}

export default function UseState () {
  // const myState = useState(10)
  const [state, setState] = useState(10)
  const [count, setCount] = useState(getInitialData)

  console.log(state)
  return (
    <div>
      {/* Count: {count.toString()} */}
      <button onClick={() => setCount(count + 1n)}>+</button>
      <hr />
      Value: {state}
      <button onClick={() => setState(state + 1)}>+</button>
    </div>
  )
  //   return (
  //     <div>
  //       Value: {myState[0]}
  //       <button onClick={() => myState[1](myState[0] + 1)}>+</button>
  //     </div>
  //   )
}
