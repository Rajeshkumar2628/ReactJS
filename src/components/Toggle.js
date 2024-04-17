import React, { useState } from 'react'
import MouseMove from './MouseMove'

export default function Toggle() {
    const[toggle,settoggle]=useState(true)
  return (
    <div>
      <button onClick={()=>{
        settoggle(!toggle)
      }}>toggle</button>
      {toggle && <MouseMove/>}
    </div>
  )
}
