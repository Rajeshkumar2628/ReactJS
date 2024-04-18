import { useState } from "react";

export default function useInput() {
  const[value,setValue]=useState('')
  const bind={
    value:value,
    onChange:(e)=>{
        setValue(e.target.value)
    }
  }
  const reset=()=>{
    setValue('')
  }
  return[value,bind,reset]
}
