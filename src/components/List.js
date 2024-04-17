import React from 'react'

export default function List() {
    let a=['adam','john','joe','aaa']
  return (
    <div>
      {a.map(x=><h1>{x}</h1>)}
    </div>
  )
}
