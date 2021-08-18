import React,{Fragment} from "react";

// function Cols(){
//     return(
//         <React.Fragment>
//             <td>Hello</td>
//             <td>World</td>
//         </React.Fragment>
//     )
// }  

function Cols(props){
    const data='jay patel'
    return(
        <div>
            <h1>User Name:</h1>
            <button onClick={()=> props.alert(data)}>User Name:</button>

        </div>
    ) 
}

export default Cols