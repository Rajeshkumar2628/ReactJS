import React, { useEffect, useState } from 'react'

export default function MouseMove() {
    const[x,setX]=useState(0)
    const[y,setY]=useState(0)
    const logPosition=(e=>{
        console.log('Mouse is Moving')
        setX(e.clientX)
        setY(e.clientY)
    })
    useEffect(()=>{
        window.addEventListener('mousemove',logPosition)
    
    return ()=>{
        window.removeEventListener('mousemove',logPosition)
    }},[]
    )
    
  return (
    <div>
      Mouse Move
      X-axis: {x} Y-axis: {y}
    </div>
  )
}
