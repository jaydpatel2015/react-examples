import './style.css'
import React from 'react';
import {Button} from 'react-bootstrap'

function App(){
    return(
        <div className='container'>
            <h1>Bootstrap in React</h1>
            <Button onClick={()=>alert('Hello Bootstarp')}>Click Me</Button>
        </div>
    )
}
export default App;