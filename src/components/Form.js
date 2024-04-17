import React, { useState } from 'react'

export default function Form() {
    const[name,setName]=useState('')
    const changeName=(event)=>{
        setName(event.target.value)
    }
    const handleClick=(e)=>{
        console.log(name)
    }
  return (
    <div>
      <h1>{name}</h1>
      <label>Name:</label>
      <input type='text' value={name} onChange={changeName}/>
      <button onClick={handleClick}>Submit</button>
    </div>
  )
}
