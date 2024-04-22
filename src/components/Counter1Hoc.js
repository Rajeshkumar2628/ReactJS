import React from 'react'
import UpdatedComponent from './Hoc'

function Counter1Hoc(props) {
  return (
    <div>
      {props.name}
      <button onClick={props.handleInc}>{props.count}</button>
    </div>
  )
}
export default UpdatedComponent(Counter1Hoc)
