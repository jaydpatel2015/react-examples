import React from 'react';

function Prop_demo(newData){
    return(
        <div className='container'>
            <button onClick={newData.data} className='btn btn-primary'>Click me</button>
        </div>
    )
}

export default Prop_demo;