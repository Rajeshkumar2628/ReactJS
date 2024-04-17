import React, { useState } from 'react'

export default function Calculator() {
  const[input,setInput]=useState('')
  return (
    <div>
      <input type='text' value={input}/><br/>
      <button onClick={()=>{setInput(input+'1')}}>1</button>
      <button onClick={()=>{setInput(input+'2')}}>2</button>
      <button onClick={()=>{setInput(input+'3')}}>3</button><br/>
      <button onClick={()=>{setInput(input+'4')}}>4</button>
      <button onClick={()=>{setInput(input+'5')}}>5</button>
      <button onClick={()=>{setInput(input+'6')}}>6</button><br/>
      <button onClick={()=>{setInput(input+'7')}}>7</button>
      <button onClick={()=>{setInput(input+'8')}}>8</button>
      <button onClick={()=>{setInput(input+'9')}}>9</button><br/>
      <button onClick={()=>{setInput(input+'0')}}>0</button><br/>
      <button onClick={()=>{setInput(input+'+')}}>+</button>
      <button onClick={()=>{setInput(input+'-')}}>-</button>
      <button onClick={()=>{setInput(input+'*')}}>*</button>
      <button onClick={()=>{setInput(input+'/')}}>/</button>
      <button onClick={()=>{setInput(eval(input)+'')}}>=</button><br/>
      <button onClick={()=>{setInput(input.slice(0,-1))}}>Del</button>
      <button onClick={()=>{setInput('')}}>CA</button>
    </div>
  )
}
