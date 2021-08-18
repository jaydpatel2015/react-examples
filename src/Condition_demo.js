import React,{useState} from 'react';

function Condition_demo(){
    const [loggedIn,setLogging] =useState(3)
    return(
        <div className='container'>
            <h1>Conditional Formating Demo</h1>
            {loggedIn == 1 ? <h1>Welcome, User 1</h1>:loggedIn == 2 ? <h1>Welcome, User 2</h1> : <h1>Welcome, User 3</h1> }
        </div>
    )
}

export default Condition_demo;