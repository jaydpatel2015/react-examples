import React from 'react';
import { Link } from 'react-router-dom';

function Nav(){
    return(
        <div className='container'>
            <Link to='/home'>Home</Link>
                <br/>
            <Link to='/about'>About</Link>
        </div>        
    )
}

export default Nav;