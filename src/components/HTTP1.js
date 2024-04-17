import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function HTTP1() {
    const[data,setData]=useState({})
    const[id,setId]=useState(1)
    useEffect(()=>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res=>{setData(res.data)})
        .catch(err=>{console.log(err)})
    },[id])
  return (
    <div>
        {data.title}<br/>
        <input type='number' value={id} onChange={(e)=>setId(e.target.value)}/>
      {/* {list.map((x)=><p>{x.title}</p>)} */}
    </div>
  )
}
