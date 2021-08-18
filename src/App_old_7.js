import './style.css'
import React from 'react';

function App(){
    return(
        <div className='container'>
            <h1 style={{backgroundColor:'black',color:'#fd8700'}}>Inline Style in React</h1>
            <h1>Internal Style in React</h1>
            <h1 className='primary'>External Style in React</h1>
        </div>
    )
}
export default App;