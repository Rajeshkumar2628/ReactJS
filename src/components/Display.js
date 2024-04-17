import React from 'react'

function Display(props) {
    console.log(`Age Hello from ${props.name}`)
  return (
    <div>
      {props.name} ----- {props.display}
    </div>
  )
}

export default React.memo(Display)
