import React, { useState } from 'react'

export default function EmployeeForm1() {
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [job, setJob] = useState('')
    const [data, addData] = useState([])
    const [current, setCurrent] = useState('')
    const addId = (e) => {
        setId(e.target.value)
    }
    const addName = (e) => {
        setName(e.target.value)
    }
    const addJob = (e) => {
        setJob(e.target.value)
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        addData([...data, { id: `${id}`, name: `${name}`, job: `${job}` }])
        alert("Employee Added Successfully")
    }
    return (
        <div>
            <h1>Add Employee</h1>
            <div>
                <button onClick={() => setCurrent('Create')}>Create</button>
                <button onClick={() => setCurrent('Read')}>Read</button>
            </div>

            {current == "Create" && (
                <form onSubmit={handleSubmit}>
                    <h1>Add Emploee</h1>
                    <br /><br />
                    <label>Emploee Id:</label>
                    <input type='text' value={id} onChange={addId} />
                    <br />

                    <label>Name:</label>
                    <input type='text' value={name} onChange={addName} /><br />
                    <label>Job:</label>
                    <select onChange={addJob}>
                        <option value='select Job'>Select Job</option>
                        <option value='developer'>Developer</option>
                        <option value='tester'>Tester</option>
                    </select><br />
                    <button type='submit'>Add Employee</button>
                </form>)}


      
      {current == "Read" && (
      
      <table>
        <thead>
            <tr>
                <th>Employee Id</th>
                <th>Name</th>
                <th>Job</th>
            </tr>
        </thead>
        <tbody>
            {data.map(e=>{
                return(
                    <tr>
                        <td>{e.id}</td>
                        <td>{e.name}</td>
                        <td>{e.job}</td>
                    </tr>
                )
            })}
        </tbody>
      </table>)}
        </div>
    )
}
