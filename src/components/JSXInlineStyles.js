import React from 'react'

export default function JSXInlineStyles() {
    let abc={
        color:'red',
        fontSize:'100px',
        backgroundColor:'orange'
    }
  return (
    <div>
      <h1 style={abc}>Welcome</h1>
    </div>
  )
}
