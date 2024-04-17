import React from 'react'

export default function MethodProps(props) {
  return (
    <div>
      <button onClick={()=>props.fn('Adam')}>Click From Child</button>
    </div>
  )
}
