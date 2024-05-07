import React, { useEffect, useState } from 'react'

export default function Timer() {
    const[isRunning,setisRunning]=useState(false)
    const[count,setCount]=useState(2)
    const[count1,setCount1]=useState(0)
    const[val,setVal]=useState('')
    const valChange=(e)=>{
        setCount(e.target.value)
    }
    const startBtn=()=>{
        setisRunning(true)
        setCount1(count)
        setVal('Happy Birthday!')
    }

    useEffect(()=>{
        let interval
        if(isRunning){
            interval=setInterval(()=>{
                setCount1(prev=>prev-1)
            },1000)
        }
            return()=> {
                clearInterval(interval)
            }
        },[isRunning])
    useEffect(()=>{
        if(count1===0){
            setisRunning(false)
        }
    },[count1])
  return (
    <div>
      <label>Enter the Counter Duration:</label>
      <input type='number' value={count} onChange={valChange}/>
      <button onClick={startBtn}>Start</button>
      <button onClick={()=>{setCount(0)}}>Reset</button>
      <h1>{isRunning?(`Time left: ${count1}`):(val)}</h1>
    </div>
  )
}
