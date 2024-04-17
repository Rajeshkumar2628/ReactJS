import React, { useEffect, useRef } from 'react'

export default function UseREF() {
    const inputRef=useRef()
    useEffect(()=>{
        inputRef.current.focus()
    },[])
  return (
    <div>
      <input ref={inputRef}/>
    </div>
  )
}
