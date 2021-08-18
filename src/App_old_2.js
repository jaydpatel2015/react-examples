import logo from './logo.svg';
import './App.css';
//import {useState} from 'react';
import React from 'react';

class App extends React.Component {
  
  constructor(){
    super();
    this.state={
      data:'Patel'
    }
  }

  UpdateData(){
      this.setState({data:"Jay"});
  }
  
  render(){
    return(
      <div className="App">
          <h1>{this.state.data}</h1>
          <button onClick={() => this.UpdateData()} class='btn btn-primary'> What's my Name</button>
      </div>
    );
  }
    
}


// function App() {
//     let [data,setData]=useState('Patel');
    
//     function UpdataData(){
//         setData('Jay');
//     }
//   return(
//     <div className="App">
//         <h1>{data}</h1>
//         <button onClick={UpdataData} class='btn btn-primary'> What's my Name</button>
//     </div>
//   );
// }

export default App;
