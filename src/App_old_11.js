import './style.css'
import './App.css';
import React from 'react';
import Cols from './Cols';

function App(){
    // return(
    //     <div className='container'>
    //         <table>
    //             <tbody>
    //                 <tr>
    //                     <Cols />
    //                 </tr>
    //             </tbody>
    //         </table>        
    //     </div>
    // )

    function Palert(data){
        alert(data);
    }
    return(
        <div className='container'>
            <h1>Lifting the state up</h1>
            <Cols alert={Palert}/>
        </div>
    )
}
export default App;