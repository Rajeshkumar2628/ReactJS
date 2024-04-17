import React, { useEffect, useState } from 'react'

export default function SetInterval() {
    const[count,setCount]=useState(0)
    const[intervalid,setIntervalId]=useState()
    useEffect(()=>{
        const interval=setInterval(()=>{
            setCount(prev=>prev+1)
        },500);
        setIntervalId(interval)
        return ()=>{
            clearInterval(intervalid)
        }
    },[])
  return (
    <div>   
      Count-{count}<br/>
      <button onClick={()=>{
        clearInterval(intervalid)
      }}>Stop</button>
    </div>
  )
}