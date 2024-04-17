import React from 'react'
import './style.css'
    //SINGLE EXTERNAL STYLING
export default function JSX(props) {
    let styles=props.admin?'primary':'secondary'
  return (
    <div>
      <h1 className={styles}>Welcome</h1>
    </div>
  )
}
