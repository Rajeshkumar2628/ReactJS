import React, { useReducer } from 'react'

export default function Reducer1() {
    const initialState=0
    const reducer=(state,action)=>{
        switch(action.type){
            case 'inc1': return state+action.value
            case 'dec1': return state-action.value
            case 'inc5': return state+action.value
            case 'dec5': return state-action.value
        }
    }
    const[count,dispatch]=useReducer(reducer,initialState)
  return (
    <div>
      {count}
      <button onClick={()=>dispatch({type:'inc1', value:1})}>Increment1</button>
      <button onClick={()=>dispatch({type:'dec1', value:1})}>Decrement1</button>
      <button onClick={()=>dispatch({type:'inc5', value:5})}>Increment5</button>
      <button onClick={()=>dispatch({type:'dec5', value:5})}>Decrement5</button>
    </div>
  )
}
