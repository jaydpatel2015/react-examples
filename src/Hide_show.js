import React from 'react';
//  

function Hide_show(){
    let [jay,setStatus]=React.useState(true)
    return(
        <div className='container'>{
            jay ? <h1>Hello World</h1> :null
        }
            <br/>
            {/* <button onClick={() => setStatus(false)} className='btn btn-primary'>Hide</button>
            <button onClick={() => setStatus(true)} className='btn btn-success'>Show</button> */}
            <button onClick={() => setStatus(!jay)} className='btn btn-success'>Show/Hide</button>
        </div>
    )
}

export default Hide_show;