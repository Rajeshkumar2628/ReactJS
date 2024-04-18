import React from 'react'
import useCounter from '../Hooks/useCounter'

export default function Counter2() {
    const[Count,Inc,Dec,Res]=useCounter(0,5)
  return (
    <div>
      {Count}
      <button onClick={Inc}>Increment</button>
      <button onClick={Dec}>Decrement</button>
      <button onClick={Res}>Reset</button>
    </div>
  )
}
