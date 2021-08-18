import React,{useRef} from 'react';
import './style.css';
import './App.css';

function App(){
    const inputRef=useRef(null);
    function getHandle(){
        inputRef.current.value='Jay';
        inputRef.current.focus();
    }
    return(
        <div className='App'>
            <h1>useRef Demo in React</h1>
            
            <button onClick={getHandle}>Handle Me</button>
        </div>
    )
}
export default App;