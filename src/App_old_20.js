import React from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import User from './User';

function App(){
    let users=[
        {id:1,name:'Jay',email:'jay@gmail.com'},
        {id:2,name:'Roman',email:'roman@gmail.com'},
        {id:3,name:'Brock',email:'brock@gmail.com'},
        {id:4,name:'Edge',email:'edge@gmail.com'}
    ];
    return(
        <div className='container'>
            <h1>Dynamic Routing</h1>
            <Router>
            {users.map((item)=>
                <div>
                    <Link to={'/User/'+ item.id +'/' +item.name} ><h3>{item.name}</h3></Link>
                    <h3>{item.email}</h3>
                    <hr/>
                </div>
            )}
            <Route path='/User/:id/:name'><User/></Route>
            </Router>
        </div>
    )
}

export default App;