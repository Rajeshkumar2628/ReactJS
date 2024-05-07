import React, { useCallback, useState } from 'react'
import Title from './Title'
import Display from './Display'
import Button from './Button'

function Parent() {
    const[age,setAge]=useState(25)
    const[salary,setSalary]=useState(25000)
    const handleAge=useCallback(()=>{
        setAge(age+1)
    },[age])
    const handleIncrement=useCallback(()=>{
        setSalary(salary+1000)
    },[salary])
  return (
    <div>
      <Title/>
      <Display name="Age" display={age} >
        <button>rajesh</button>
      </Display>
      <Button name="Age" handleClick={handleAge} />
      <Display name="Salary" display={salary} />
      <Button name="Salary" handleClick={handleIncrement} />
    </div>
  )
}

export default Parent
