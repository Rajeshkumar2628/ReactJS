//normal method it will lead to dataleakage
// import React, { useEffect, useState } from 'react'

// export default function DependencyList() {
//     const[count,setCount]=useState(0)
//     const[count1,setCount1]=useState(0)
//     const[name,setName]=useState('')
//     useEffect(()=>{
//         console.log('Component is clicked')
//     })
//   return (
//     <div>
//       <button onClick={()=>{
//         setCount(count+1)
//       }}>Clicked {count} times</button>
    
//     <button onClick={()=>{
//         setCount1(count1+1)
//       }}>Clicked {count1} times</button>
      
//     <input type='text' value={name} onChange={(e)=>{
//         setName(e.target.value)
//     }}/>
//     </div>
//   )
// }

//method to stop leakage
import React, { useEffect, useState } from 'react'

export default function DependencyList() {
    const[count,setCount]=useState(0)
    const[count1,setCount1]=useState(0)
    const[name,setName]=useState('')
    useEffect(()=>{
        console.log('Component is clicked')
    },[])
  return (
    <div>
      <button onClick={()=>{
        setCount(count+1)
      }}>Clicked {count} times</button>
    
    <button onClick={()=>{
        setCount1(count1+1)
      }}>Clicked {count1} times</button>
      
    <input type='text' value={name} onChange={(e)=>{
        setName(e.target.value)
    }}/>
    </div>
  )
}

