import React,{forwardRef} from 'react';

function User(props,inputRef){
    return(
        <div className='App'>
            <input type='text' ref={inputRef} />
        </div>
    )
}
export default forwardRef(User)


