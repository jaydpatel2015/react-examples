import React from 'react'
import {BrowserRouter as Router, Link, Route,Switch} from 'react-router-dom';

function App(){
    return(
        <div className='container'>
            <Router>
                <Link to='/'>Home</Link>
                <br/>
                <Link to='/about'>About</Link>
                <br/>
                <br/>
                <Switch>
                    <Route path='/' exact={true}><Home /></Route>
                    <Route path='/about'><About /></Route>
                    <Route path='*'><PageNotFound /></Route>
                </Switch>
            </Router>
        </div>
    )
}

function Home(){
    return(
        <div>
            <h1>Home Page</h1>
            <p>This is Home Page</p>
        </div>
    )
}

function About(){
    return(
        <div>
            <h1>About Page</h1>
            <p>This is About Page</p>
        </div>
    )
}

function PageNotFound(){
    return(
        <div>
            <h1>404 Error</h1>
            <p>Page you are trying to access doesn't exist</p>
        </div>
    )
}
export default App;