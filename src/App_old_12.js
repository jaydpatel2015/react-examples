import './App.css';
import './style.css';
import React, { useMemo, useState } from 'react';

function App(){
    const[count,setCount]=useState(10)
    const[item,setItem]=useState(2)

    var multicountdemo=useMemo(function multicount(){
        console.log('useMemo called on count');
    },[count])

    return(
        <div className='App'>
            <h1>useMemo Hook in React</h1>
            <h2>Count:{count}</h2>
            <h2>Item:{item}</h2>
            <h2>{multicountdemo}</h2>
            <button className='btn btn-primary' onClick={()=>setCount(count+1)}>Update Count</button>
            <button className='btn btn-dark' onClick={()=>setItem(item*2)}>Update Item</button>
        </div>
    );
}

export default App;
