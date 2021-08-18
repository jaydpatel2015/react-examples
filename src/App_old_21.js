import React, { useEffect, useState } from 'react';
import { Table } from 'react-bootstrap';

function App(){
    const [data,setData]=useState([])
    useEffect(()=>
    {
        fetch('https://reqres.in/api/users?page=2').then((result)=>{
            result.json().then((res)=>{
                // console.log(res);
                setData(res.data)
            })
        })
    },[])
    return(
        <div className='container'>
            <h1>Get API Call</h1>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>E-mail</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                data.map((item,i)=>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{item.email}</td>
                        <td>{item.first_name}</td>
                        <td>{item.last_name}</td>
                        <td><button type='button'>Delete</button></td>

                    </tr>
                )}
                </tbody>
            </Table>
        </div>
    )
}

export default App