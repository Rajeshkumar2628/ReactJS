import React, { useEffect, useState } from 'react'

export default function Test2() {
    const[inp1,setInp]=useState(2)
    const[inp2,setInp2]=useState(0)
    const[val,setVal]=useState('')
    const[isRunning,setisRunning]=useState(false)
    useEffect(()=>{
        let interval
        if(isRunning && inp1>0){
            interval=setInterval(()=>{
                setInp2(prev=>prev-1)
            },1000)
        }

        return()=>{
            clearInterval(interval)
        }
    },[isRunning])

    useEffect(()=>{
        if(inp2 === 0){
            setisRunning(false)
            setVal('Happy Birthday')
        } else{
            setVal(`Timer Left : ${inp2}s`)
        }
    },[inp2])
    const startBtn=()=>{
        setisRunning(true)
        setInp2(inp1)
    }
  return (
    <div>
        <label>Timer:</label>
        <input type="number" value={inp1} onChange={(e)=>setInp(e.target.value)}/>
      <button onClick={startBtn}>Start Timer</button>
      {isRunning?(<h1>{val}</h1>):(<h1> {val}</h1>)}
    </div>
  )
}
