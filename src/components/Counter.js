import React, { useState } from 'react'

export default function Counter() {
    const[count,setCount]=useState(0)
    const changeCount=()=>{
        for(let i=0;i<5;i++){
            setCount(prev=>prev+1)
        }
    }
  return (
    <div>
        Count-{count}
      <button onClick={changeCount}>Inc by 5</button>
    </div>
  )
}
