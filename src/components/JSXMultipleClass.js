import React from 'react'
import './style.css'
    //MULTIPLE EXTERNAL STYLING
export default function JSXMultipleClass(props) {
    let styles=props.admin?'primary':'secondary'
  return (
    <div>
      <h1 className={`${styles} font-xl`}>Welcome</h1>
    </div>
  )
}
