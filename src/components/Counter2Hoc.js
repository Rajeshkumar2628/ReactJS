import React from 'react'
import UpdatedComponent from './Hoc'

function Counter2Hoc(props) {
  return (
    <div>
      {props.name}
      <h1 onMouseOver={props.handleInc}>{props.count}</h1>
    </div>
  )
}
export default UpdatedComponent(Counter2Hoc)
