import './App.css';
import React from 'react'

class App extends React.Component{
    constructor(){
        super();
        this.state=
        {name:'Jay'}
    }
    componentDidMount(){
        console.log('component Did Mount');
    }
    componentDidUpdate(){
        console.log('component Did Update');
    }

    render() {
        console.log('render');
        return(
            <div className='App'>
                <h1>Component Did Mount</h1>
                <h1>{this.state.name}</h1>
                <button onClick={()=> this.setState({name:'Patel'})}>Update Me</button>
            </div>
        )
    }
}

export default App;
