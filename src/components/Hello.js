import React from 'react'

// function Hello(){
//     return(
//         <h1>Hello.js is a new component</h1>
//     )
// }

function Hello(props){
    return(
        <>
        <h1>Welcome {props.name} </h1>
        {props.children}
        </>
    )
}

export default Hello