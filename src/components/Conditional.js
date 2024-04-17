import React, { useState } from 'react'

export default function Conditional() {
    //if-else conditional
    // const[isAdmin, setIsAdmin] = useState(false)
    // if (isAdmin) {

    //     return (
    //         <div>
    //             <h1>Welcome Admin</h1>
    //         </div>
    //     )
    // } else {
    //     return (
    //         <div>
    //             <h1>Welcome User</h1>
    //         </div>
    //     )
    // }

    //Element variable conditional
    // const[isAdmin, setIsAdmin] = useState(true)
    // let html
    // if(isAdmin){
    //     html=<h1>Welcome Admin</h1>
    // } else {
    //     html=<h1>Welcome User</h1>
    // }
    // return html

    //Ternary operator
    // const[isAdmin, setIsAdmin] = useState(false)
    // return(
    //     <div>
    //         {isAdmin?(<h1>Welcome Admin</h1>):
    //         (<h1>Welcome User</h1>)}
    //     </div>
    // )

    //Short Circuit operator
    const[isAdmin, setIsAdmin] = useState(true)
    return(
        <div>
            {isAdmin && <h1>Welcome Admin</h1>}
        </div>
    )
}
