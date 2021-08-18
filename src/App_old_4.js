//import logo from './logo.svg';
import './App.css';
// import Hide_show from './Hide_show';
//import Form_Demo from './Form_Demo';
// import Condition_demo from './Condition_demo';
import Prop_demo from './Prop_demo';

function App(){
    function getData(){
        alert('hello from GetData')
    }
    return(
        <div className='App'>
           {/* <Hide_show /> */}
           {/* <Form_Demo /> */}
           {/* <Condition_demo /> */}
           <Prop_demo data={getData}/>
        </div>
    )
}
export default App;
