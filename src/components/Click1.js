import React, { useState } from 'react'
import useDocumentTitle from '../Hooks/useDocumentTitle'

export default function Click1() {
    const[count,setCount]=useState(0)
    useDocumentTitle(count)
  return (
    <div>
      <button onClick={()=>setCount(count+1)}>Click here</button>
    </div>
  )
}
