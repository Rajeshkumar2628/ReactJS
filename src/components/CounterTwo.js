import React from 'react'

export default function CounterTwo(props) {
  return (
    <div>
      <h1 onMouseOver={props.handleInc}>Hover {props.count}</h1>
    </div>
  )
}
