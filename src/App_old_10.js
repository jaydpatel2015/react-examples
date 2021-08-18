import './style.css'
import './App.css';
import React from 'react';
import Reuse_data from './Reuse_data';

function App(){
    const students=[
        {name:'Jay',email:'jay@gmail.com',country:'India'},
        {name:'Peter',email:'peter@gmail.com',country:'Canada'},
        {name:'Robert',email:'Robert@gmail.com',country:'UAE'},        
        {name:'Benedict',email:'Ben@gmail.com',country:'Australia'}
    ]
    return(
        <div className='container'>
            <h1>Reusable Component in React</h1>
            {
                students.map((item,i)=>
                    <Reuse_data key={i} data={item} />
                )
            }
        </div>
    )
}
export default App;