import logo from './logo.svg';
import Users from './Users';
import New_user from './New_user';
import './App.css';
import React, { Component } from 'react';

function App() {
  let name="Jay Patel"
    function SayMyName(){
      name="Larger Than Life";
  }

  function Fruits(){
      
      alert('Fruits function called');
  }
  return (
    <div className="App">

      <h1>
        Hello World From {name}
        <br/>
        <button class='btn btn-primary' onClick={SayMyName}>What's My Name</button>
        <Users />
        {/* <Fruits/> */}
        <button class='btn btn-primary' onClick={Fruits}>Click me</button>
        <br/>
        <button class='btn btn-primary' onClick={() => alert (`Arrow Function Demo it's ES6 feature`)}>Arrow Function</button>
        
      </h1>
      
      <h1>
        <New_user />
      </h1>
      <h1>
        <New_class_user />
      </h1>
    </div>
  );
}

class New_class_user extends Component{

  
  render(){
      return(
          <h1>New Class Component from App.js</h1>
      )
  }
}

export default App;
