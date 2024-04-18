import { useState } from "react";

export default function useCounter(initialValue=0,incValue) {
  const[count,setCount]=useState(initialValue)
  const handleInc=()=>{
    setCount(count+incValue)
  }
  const handleDec=()=>{
    setCount(count-1)
  }
  const handleReset=()=>{
    setCount(initialValue)
  }
  return[count,handleInc,handleDec,handleReset]
}
