import React, { useEffect, useState } from 'react'
import axios from 'axios'
export default function CRUD() {
    //Read
    const [list, setList] = useState([])
    //Create
    const [id, setId] = useState('')
    const [name, setName] = useState('')
    const [marks, setMarks] = useState('')
    const [image, setImage] = useState('')

    const [isPopup, setIsPopup] = useState(false)
    //Update
    const [id1, setId1] = useState('')
    const [name1, setName1] = useState('')
    const [marks1, setMarks1] = useState('')
    const [image1, setImage1] = useState('')

    useEffect(() => {
        axios.get('http://localhost:3001/Students')
            .then(res => { setList(res.data) })
            .catch(err => { console.log(err) })
    })

    //create operation
    const handleSubmit = () => {
        axios.post('http://localhost:3001/Students', {
            id: id, name: name, marks: marks, image: image
        })
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
    }

    //Delete Operation
    const handleDelete = (id1) => {
        axios.delete(`http://localhost:3001/Students/${id1}`)
            .then(res => {
                console.log(res)
                alert('Deleted Successfully')
            })
            .catch(err => { console.log(err) })
    }

    //Update Operation
    const handleUpdate = () => {
        axios.put(`http://localhost:3001/Students/${id1}`, {
            id: id1, name: name1, marks: marks1, image: image1
        })
            .then(res => { console.log(res) })
            .catch(err => { console.log(err) })
    }

    //popup-screen
    const openPopup = (data) => {
        setIsPopup(true)
        setId1(data.id)
        setName1(data.name)
        setMarks1(data.marks)
        setImage1(data.image)
    }
    return (
        <div>
            <div className='form-1'>
                <h1>Staff Page</h1>
                <form onSubmit={handleSubmit}>
                    <label>ID:</label><br/>
                    <input type='text' value={id} onChange={(e) => { setId(e.target.value) }} /><br />
                    <label>Name:</label><br/>
                    <input type='text' value={name} onChange={(e) => { setName(e.target.value) }} /><br />
                    <label>Marks:</label><br/>
                    <input type='text' value={marks} onChange={(e) => { setMarks(e.target.value) }} /><br />
                    <label>Image link:</label><br/> 
                    <input type='text' value={image} onChange={(e) => { setImage(e.target.value) }} /><br />
                    <button type='submit'>Add data</button>
                </form>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Marks</th>
                        <th>Image</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {list.map(x => (
                        <tr key={x.id}>
                            <td>{x.id}</td>
                            <td>{x.name}</td>
                            <td>{x.marks}</td>
                            <td><img src={x.image} width={100} height={100} alt='img' /></td>
                            <td>
                                <button onClick={() => openPopup(x)}>Update</button>
                                <button onClick={() => handleDelete(x.id)}>Delete</button>
                            </td>
                        </tr>))}
                </tbody>
            </table>
            {isPopup &&
                <div className='update-popup'>
                    <button onClick={() => { setIsPopup(false) }}>X</button>
                    <div className='form-1'>
                    <h1>Update Details</h1>
                        <form onSubmit={handleUpdate}>
                            <label>ID:</label>
                            <input type='text' value={id1} onChange={(e) => { setId1(e.target.value) }} /><br />
                            <label>Name:</label>
                            <input type='text' value={name1} onChange={(e) => { setName1(e.target.value) }} /><br />
                            <label>Marks:</label>
                            <input type='text' value={marks1} onChange={(e) => { setMarks1(e.target.value) }} /><br />
                            <label>Image link:</label>
                            <input type='text' value={image1} onChange={(e) => { setImage1(e.target.value) }} /><br />
                            <button type='submit'>Update data</button>
                        </form>
                    </div>
                </div>}

            <div>
                <h1>Student Page</h1>
                <div className='container'>
                    {list.map(x => (
                        <div className='flex-items'>
                            <img src={x.image} height={150} width={150} />
                            <h3>{x.name}</h3>
                            <h5>{x.marks}</h5>
                            <button>See Details</button>
                        </div>))}
                </div>
            </div>
        </div>
    )
}
