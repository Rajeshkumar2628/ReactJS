import React from 'react'
import MethodProps from './MethodProps'

export default function Event() {
    function Abc(a){
        console.log(a)
    }
  return (
    <div>
      <MethodProps fn={Abc}/>
    </div>
  )
}
