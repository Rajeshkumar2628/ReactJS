import React, { useReducer } from 'react'

export default function Reducer() {
    const initialState=0
    const reducer=(state,action)=>{
        switch(action){
            case 'increment': return state+1
            case 'decrement': return state+-1
            case 'reset': return initialState
            default : return state
        }
    }
    const[count,dispatch]=useReducer(reducer,initialState)
    const[count2,dispatch2]=useReducer(reducer,initialState)
  return (
    <div>
        {count}
      <button onClick={()=>dispatch('increment')}>Increment</button>
      <button onClick={()=>dispatch('decrement')}>Decrement</button>
      <button onClick={()=>dispatch('reset')}>Reset</button>
      {count2}
      <button onMouseOver={()=>dispatch2('increment')}>Increment</button>
      <button onMouseOver={()=>dispatch2('decrement')}>Decrement</button>
      <button onMouseOver={()=>dispatch2('reset')}>Reset</button>
    </div>
  )
}
