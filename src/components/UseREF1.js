import React, { useEffect, useRef, useState } from 'react'

export default function UseREF1() {
    const[timer,setTimer]=useState(0)
    const intervalRef=useRef()
    useEffect(()=>{
        intervalRef.current=setInterval(()=>{
            setTimer(prev=>prev+1)
        },1000)
        return()=>{
            clearInterval(intervalRef.current)
        }
    },[])
  return (
    <div>
        Timer-- {timer}
      <button onClick={()=>clearInterval(intervalRef.current)}>Stop</button>
    </div>
  )
}
