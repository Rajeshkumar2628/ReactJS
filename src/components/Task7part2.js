import React, { useEffect, useState } from 'react'
import './Styles.css'
export default function Task7part2() {
    const[duration,setDuration]=useState(0)
    const[seconds,setSeconds]=useState(0)
    const[isRunning,setIsRunning]=useState(false)
    const[isTimerCompleted,setIsTimerCompleted]=useState(false)
    const handleChange=(e)=>{
        setDuration(e.target.value)
        setSeconds(e.target.value)
    }
    useEffect(()=>{
        let interval 
        if(isRunning && seconds>0){
            interval=setInterval(()=>{
                setSeconds(prev=>prev-1)
            },1000)
        } else if(seconds === 0 && isRunning) {
            setIsTimerCompleted(true)
            setIsRunning(false)
        }
        return()=>{
            clearInterval(interval)
    }},[isRunning,seconds])
    const progressWidth=(seconds/duration)*100
  return (
    <div>
              <h1>CountDown Time: {seconds} seconds</h1>
      {isTimerCompleted?(<h1>Happy Birthday</h1>):
      (<div className='container'>
        <div className='progressbar' style={{width:progressWidth+'%'}}></div>
      </div>)}<br/>
      <input type='number' value={duration} onChange={handleChange} disabled={isRunning}/>
      {isRunning?(<button onClick={()=>{setIsRunning(false)}}>Stop</button>):
      (<button onClick={()=>{setIsRunning(true)}}>Start</button>)}
      <button onClick={()=>{
        setSeconds(duration)
        setIsTimerCompleted(false)
    }}>Reset</button>
    </div>
  )
}
