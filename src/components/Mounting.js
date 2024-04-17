import React, { useEffect } from 'react'

export default function Mounting() {
    useEffect(()=>{
        console.log('Component is mounted')
    })
  return (
    <div>
      Hello
    </div>
  )
}
