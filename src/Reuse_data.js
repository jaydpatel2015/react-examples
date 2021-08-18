import React from 'react';

function Reuse_data(props){
    return (
        <div className='container'>
            <span>{props.data.name}</span>
            <span>{props.data.email}</span>
            {/* <span>{props.data.country}</span> */}
            <button onClick={()=>alert(props.data.country)}>Country</button>
        </div>
    )
}
export default Reuse_data;