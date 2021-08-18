import './App.css'
import React,{createRef} from 'react';

class App extends React.Component{
    constructor(){
        super();
        this.inputRef=createRef();
    }
    componentDidMount(){
        console.log('component did mount');
    }
    getVal(){
        console.log(this.inputRef.current.value);
        this.inputRef.current.style.color='Blue';
        this.inputRef.current.style.backgroundColor='grey ';

    }
    render(){
        return(
            <div className='App'>
                <h1>Ref Demo in React</h1>
                <input type='text' ref={this.inputRef} />
                <button onClick={()=>this.getVal()}>Check Ref</button>
            </div>
        );
    }
}

export default App;
