import React from 'react'

export default function Product(props) {
    if(props.name==="Samsung"){
        throw new Error('Cannot Show This Product')
    }
  return (
    <div>
      {props.name}
    </div>
  )
}
