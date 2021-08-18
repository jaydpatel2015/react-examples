import React,{useRef, useState} from 'react';
import './style.css';
import './App.css';


function App(){
    let inputRef1=useRef("")
    let inputRef2=useRef("")
    // let inputRef3=useRef("")
    
    function submitForm(e){
        e.preventDefault();
        console.log('Value-1', inputRef1.current.value)
        console.log('Value-2', inputRef2.current.value)
        let input3=document.getElementById('input3').value
        console.log('Value-3', input3)
    }

    return(
        <div className='App'>
            <h1>Uncontrolled Demo in React</h1>
            <form onSubmit={submitForm} method="post">
                <input ref={inputRef1} type='text' /><br/>
                <br/>
                <input ref={inputRef2} type='text' /><br/>
                <br/>
                <input id='input3' type='text' /><br/>
                <br/>
                <button>Submit</button>
            </form>            
        </div>
    )
}
export default App; 