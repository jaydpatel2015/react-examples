import logo from './logo.svg';
import './App.css';
import Student from './Student';
import React, {useState} from 'react';
import { div } from 'prelude-ls';

function App(){
    let [data,setData]=useState(null);
    let [print,setPrint]=useState(false);
    function getData(val){
        console.log(val.target.value);
        setData(val.target.value);
        setPrint(false);
    }

        return(
        <div className='container'>
            <h1>Enter Your Name</h1>
            <input type='text' onChange={getData} />
            <h1>Name : {data}</h1>
            <button className='btn btn-primary' onClick={()=> setPrint(true)}>Print My Name</button>
            <div>{
                print?<h1>Name:{data}</h1>:null
            }
            </div>

        </div>
    )
}


// class App extends React.Component{

//     constructor(){
//         super();
//         this.state={
//             name:'Jay',
//             email:'jay@gmail.com'
//         }
//     }

//     render(){
//         return (
//             <div className='App'>
//                 <h1>Example of Props using Class Component</h1>
//                 <Student name={this.state.name} email={this.state.email} />
//                 <br/>
//                 <button onClick={
//                     ()=> this.setState({
//                             name:'Jack',
//                             email:'jack@gmail.com'
//                 })}className='btn btn-primary'>What's My Name</button>
//             </div>
//         );
//     }
// }

// function App(){

//     return (
//         <div className='App'>
//             <h1>Example of Props using Class Component</h1>
//             <Student name='Jay' email='jay@gmail.com' />
//             <br/>
//             <button className='btn btn-primary'>What's My Name</button>
//         </div>
//     );
// }

// function App(){
//     let [name,setName]=useState('Jay');

//     function UpdateName(){
//         setName('Jack')
//     }

//     return(
//         <div className="App">
//             <h1 id="propHeading">Example of Student Prop</h1> 
//             <Student fname={name}/>
//             {/* <button onClick={()=>setName('Jack')} className='btn btn-primary'>Change my Name</button> */}
//             <button onClick={UpdateName} className='btn btn-primary'>Change my Name</button>
//         </div>
//     );
// }
export default App;
