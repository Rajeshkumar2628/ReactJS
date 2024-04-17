import React, { useState } from 'react'

export default function State() {
    const[name,setName]=useState("Adam")
    function changeName(){
        setName('John')
    }
  return (
    <div>
     <h1>Welcome {name}</h1>
     <button onClick={changeName}>change Name</button> 
    </div>
  )
}
0