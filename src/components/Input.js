import React from 'react'
import useInput from '../Hooks/useInput'

export default function Input() {
    const[input,bind,reset]=useInput()
    const[input1,bind1,reset1]=useInput()
  return (
    <div>
      <input type='text' {...bind}/>
      <button onClick={()=>alert(input)}>Submit</button>
      <button onClick={reset}>Reset</button><br/>
      {input1}
      <input type='text' {...bind1}/>
      <button onClick={reset1}>Reset</button><br/>
    </div>
  ) 
}
