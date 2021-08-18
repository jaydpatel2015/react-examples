import React, { useEffect, useState } from 'react';

function Users(props){
    useEffect(()=>{
        console.log('useEffect on Data')
    },[props.data])
    useEffect(()=>{
        console.log("useEffect on Count")
    },[props.count])
    return(
        <div className='container'>
            <h2>Count : {props.count}</h2>
            <h2>Data : {props.data}</h2>
        </div>
    )
}
export default Users;