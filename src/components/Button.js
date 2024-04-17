import React from 'react'

function Button(props) {
    console.log(`Button Hello from ${props.name}`)
  return (
    <div>
      <button onClick={props.handleClick}>Click Here</button>
    </div>
  )
}

export default React.memo(Button)
