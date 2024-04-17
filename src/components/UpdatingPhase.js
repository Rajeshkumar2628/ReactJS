import React, { useEffect, useState } from 'react'

export default function UpdatingPhase() {
    const[count,setCount]=useState(0)
    useEffect(()=>{
        console.log('Component is mounted')
    })
  return (
    <div>
      <button onClick={()=>{setCount(count+1)}}>Clicked {count} times</button>
    </div>
  )
}
