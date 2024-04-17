import React, { useState } from 'react'

export default function Form1() {
    const[name,setName]=useState('')
    const[address,setAddress]=useState('')
    const[job,setJob]=useState('')
    const changeName=(e)=>{
        setName(e.target.value)
    }
    const changeAddr=(e)=>{
        setAddress(e.target.value)
    }
    const changeJob=(e)=>{
        setJob(e.target.value)
    }
    const handleSubmit=(e)=>{
        e.preventDefault()
        console.log(name,address,job)
    }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type='text' value={name} onChange={changeName}/><br/>
        <label>Address:</label>
        <input type='text' value={address} onChange={changeAddr}/><br/>
        <label>Job:</label>
        <select onChange={changeJob}>
            <option value="full-Time">Full-Time</option>
            <option value="part-Time">Part-Time</option>
        </select>
        <button type='submit'>Submit</button>
      </form>
    </div>
  )
}
