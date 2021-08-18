import React, { useEffect, useState } from 'react'
import {Table, Button} from 'react-bootstrap'


function App(){
    const [data,setData]=useState([])
    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [mobile,setMob]=useState('')
    
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/data").then((result)=>{
            result.json().then((res)=>{
                setData(res)
            })
        })
    })

    function saveUser(){
       
    }
    return(
        <div className='container'>
            <h1>Get API Call</h1>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>E-mail</th>
                        <th>Name</th>
                        <th>Mobile</th>
                    </tr>
                </thead>
                <tbody>
                {
                data.map((item,i)=>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.email}</td>
                        <td>{item.name}</td>
                        <td>{item.mobile}</td>
                        <td><Button>Delete</Button></td>

                    </tr>
                )}
                </tbody>
            </Table>


            <h1>POST API</h1>
            <input type='text' name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter Name"/>
            <br/>
            <br/>
            <input type='text' name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="Enter Email" />
            <br/>
            <br/>
            <input type='text' name='mobile' value={mobile} onChange={(e)=>setMob(e.target.value)} placeholder="Enter Mobile" />
            <br/>
            <br/>
            <button type='button' onClick={saveUser}>Save New User</button>
        </div>
    )
}

export default App