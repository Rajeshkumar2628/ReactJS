import React, { useReducer } from 'react'

export default function ReducerUsingObject() {
    const initialState={firstCounter:0,secondCounter:0}
    const reducer=(state,action)=>{
        switch(action){
            case 'inc': return {...state,firstCounter:state.firstCounter+1}
            case 'dec': return {...state,firstCounter:state.firstCounter-1}
            case 'inc5': return {...state,secondCounter:state.secondCounter+5}
            case 'dec5': return {...state,secondCounter:state.secondCounter-5}
            case 'reset': return initialState
            default : return state
    }
}
    const[count,dispatch]=useReducer(reducer,initialState)
    return (
      <div>
        {count.firstCounter}
        <button onClick={()=>dispatch('inc')}>Increment1</button>
        <button onClick={()=>dispatch('dec')}>Decrement1</button>
        {count.secondCounter}
        <button onClick={()=>dispatch('inc5')}>Increment5</button>
        <button onClick={()=>dispatch('dec5')}>Decrement5</button>
        <button onMouseOver={()=>dispatch('reset')}>Reset</button>
      </div>
    )
}
