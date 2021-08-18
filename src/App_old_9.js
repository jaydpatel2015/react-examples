import './style.css'
import React from 'react';
import { Table } from 'react-bootstrap';


function App(){
    const students=[
        {name:'Jay',email:'jay@gmail.com',address:[
            {city:'Surat',state:'Gujarat',country:'India'},
            {city:'Ahmedabad',state:'Gujarat',country:'India'},
            {city:'Jamnagar',state:'Gujarat',country:'India'}
        ]},
        {name:'Peter',email:'peter@gmail.com',address:[
            {city:'Rajkot',state:'Gujarat',country:'India'},
            {city:'Ahmedabad',state:'Gujarat',country:'India'},
            {city:'Surat',state:'Gujarat',country:'India'}
        ]},
        {name:'Robert',email:'Robert@gmail.com',address:[
            {city:'Jaipur',state:'Rajasthan',country:'India'},
            {city:'Ajmer',state:'Rajasthan',country:'India'},
            {city:'Surat',state:'Gujarat',country:'India'}
        ]},
        {name:'Benedict',email:'Ben@gmail.com',address:[
            {city:'Mumbai',state:'Maharashtra',country:'India'},
            {city:'New Delhi',state:'New Delhi',country:'India'},
            {city:'Surat',state:'Gujarat',country:'India'}
        ]},
    ]
    return(
        <div className='container'>
            <h1>Array in React</h1>
            <Table hover responsive>
                <thead>
                <tr>
                    <th>Sr.No</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Address</th>
                </tr>
                </thead>
                <tbody>
                {
                students.map((data,i)=>
                    <tr key={i}>
                        <td>{i+1}</td>
                        <td>{data.name}</td>
                        <td>{data.email}</td>
                        <td><Table hover responsive>
                                <thead>
                                    <tr>
                                        <th>Sr.No.</th>
                                        <th>City</th>
                                        <th>State</th>
                                        <th>Country</th>
                                    </tr>
                                </thead>
                                <tbody>{
                                    data.address.map((item,j)=>
                                        <tr key={j}>
                                            <td>{j+1}</td>
                                            <td>{item.city}</td>
                                            <td>{item.state}</td>
                                            <td>{item.country}</td>
                                        </tr>
                                    )}
                                </tbody>
                            </Table>
                        </td>
                    </tr>
                )}            
                </tbody>
            </Table>
        </div>
    )
}
export default App;