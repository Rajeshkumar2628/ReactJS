import React, { useState } from 'react'

export default function Conversion() {
  const[inr,setInr]=useState(82.35)
  const[usd,setUsd]=useState(1)
  const changeInr=(e)=>{
    setInr(e.target.value)
    setUsd(e.target.value/83.5)
  }
  const changeUsd=(e)=>{
    setUsd(e.target.value)
    setInr(e.target.value*83.5)
  }
    return (
    <div>
      <label>Inr:</label>
      <input type='number' value={inr} onChange={changeInr}/><br/>
      <label>Usd:</label>
      <input type='number' value={usd} onChange={changeUsd}/>
    </div>
  )
}
