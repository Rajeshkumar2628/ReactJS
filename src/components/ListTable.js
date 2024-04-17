import React from 'react'
import TableData from './TableData'
import './style.css'

export default function ListTable() {
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
      <table>
        <tr>
            <th>ID</th>
            <th>NAME</th>
            <th>MARKS</th>
        </tr>
        {list.map(x=><TableData id={x.id} name={x.name} marks={x.marks}/>)}
      </table>
    </div>
  )
}
