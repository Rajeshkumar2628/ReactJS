import React, { useEffect, useState } from 'react'

export default function SpecificTimeExe() {
    const[time,setTime]=useState(new Date)
    const[val,setVal]=useState('')
    useEffect(()=>{
        const interval=setInterval(()=>{
            setTime(new Date())
        },1000)
        return ()=>{
            clearInterval(interval)
        }
    },[])
    useEffect(()=>{
        const timeString=time.toLocaleTimeString()
        if(timeString === "11:58:45 AM"){
            setVal('Happy Coding')
        }
    })
  return (
    <div>
      <h1>Current time {time.toLocaleTimeString()}</h1>
      <h3>{val}</h3>
    </div>
  )
}
