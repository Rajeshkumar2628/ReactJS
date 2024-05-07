import React from 'react'

export default function CounterOne(props) {
  return (
    <div>
      <button onClick={props.handleInc}>Click {props.count}</button>
    </div>
  )
}
