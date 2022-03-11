import { useRef, useEffect } from 'react'

export default function UseRef () {
  const myInputRef = useRef()

  useEffect(() => {
    myInputRef.current.focus()
  }, [])

  return (
    <div>
      <input type='text' ref={myInputRef} />
    </div>
  )
}
