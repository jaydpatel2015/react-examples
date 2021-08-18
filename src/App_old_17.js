import React,{useRef, useState,HOC} from 'react';
import './style.css';
import './App.css';

function Counter(){
    const [count, setCount]=useState(0);
    return(
       <div>
            <h3>{count}</h3>
            <button onClick={()=>setCount(count+1)}>Update</button>
        </div>
    )
}

function HOCBlue(props){
    return <div>
        <h3 style={{backgroundColor:'lightblue',width:'100px'}}><props.cmp /></h3>
    </div>
}

function HOCRed(props){
    return <div>
        <h3 style={{backgroundColor:'red',width:'100px'}}><props.cmp /></h3>
    </div>
}

function App(){
    return(
        <div className='App'>
            <h1>HOC Demo in React</h1>
            <HOCRed cmp={Counter} />
            <HOCBlue cmp={Counter} />
        </div>
    )
}
export default App; 
