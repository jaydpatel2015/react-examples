import React,{useRef, useState} from 'react';
import './style.css';
import './App.css';
import User from './User'

function App(){
    const [val,setVal]=useState('')
    //const inputRef=useRef(null);
    // function updateInput(){
    //     inputRef.current.value='1000';
    //     inputRef.current.style.color='red';
    // }
    return(
        <div className='App'>
            <h1>forwardRef Demo in React</h1>
            <input type='text' value={val} onChange={(e)=>setVal(e.target.value)}/>
            {/* <User ref={inputRef} />
            <button onClick={updateInput}>Update Me</button> */}
            <h3>value:{val}</h3>
        </div>
    )
}
export default App; 