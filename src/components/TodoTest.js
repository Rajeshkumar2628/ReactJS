import React, { useState } from 'react'

export default function TodoTest() {
    const[val,setVal]=useState('')
    const[data,setData]=useState([])
    const addValue=(e)=>{
        setVal(e.target.value)
    }
    const addData=(e)=>{
        setData([...data,{val: `${val}`}])
    }
  return (
    <div>
      <label>ToDo List</label>
      <input type='text' value={val} onChange={addValue}/>
      <button onClick={addData}>Add List</button>
      {data.map(e=>{
        return(
            <h1 >{e.val}</h1>
        )
      })}
    </div>
  )
}
