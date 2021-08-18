import React from 'react';
import { Route } from 'react-router-dom';
import Nav from './Nav';
import Home from './Home';
import About from './About';

function App(){
    return(
        <div className="container">
            <div className='App'>
                <h1>Demo of React Router</h1>
                <Nav />
                    <Route path='/about'><About/></Route>
                    <Route path='/' exact={true}><Home/></Route>
            </div>
        </div>
    )
}

export default App;