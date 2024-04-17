import React from 'react'

export default function ListObject() {
    let list=[{
        id:'1',
        name:'adam',
        marks:'100'
    },
    {
        id:'2',
        name:'john',
        marks:'200'
    },{
        id:'3',
        name:'joe',
        marks:'300'
    }
]
  return (
    <div>
      {list.map(x=><h1>{x.id} {x.name} {x.marks}</h1>)}
    </div>
  )
}
