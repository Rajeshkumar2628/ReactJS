import React from 'react'
import  ReactDOM  from 'react-dom'
export default function Portal() {
  return ReactDOM.createPortal(
    <div>Hello World</div>,document.getElementById('portal')
  )
}
