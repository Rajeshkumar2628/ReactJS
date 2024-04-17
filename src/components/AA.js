import React, { useContext } from 'react'
import { CounterContext } from '../App'
export default function AA() {
    const counter=useContext(CounterContext)
  return (
    <div>
      <button onClick={()=>counter.dispatch('increment')}>Increment</button>
      <button onClick={()=>counter.dispatch('decrement')}>Decrement</button>
      <button onClick={()=>counter.dispatch('reset')}>Reset</button>
    </div>
  )
}
