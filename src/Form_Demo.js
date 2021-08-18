import React,{useState} from 'react';

function Form_Demo(){
    const [name, setName]= useState('')
    const [email, setEmail] = useState('')
    const [gender, setGender]= useState('')
    const [tnc, setTnc]= useState('')
    
    function getFormData(e){
        console.log(name,email,gender,tnc);
        e.preventDefault();
    }

    return (
        <div className='container'>
            <h1>Basic Form in React</h1>
            <form onSubmit={getFormData}>
                <input className='form-control' type='text' onChange={(e)=>setName(e.target.value)} placeholder='Enter your Name'/><br/>
                <input className='form-control' type='email' onChange={(e)=>setEmail(e.target.value)} placeholder='Enter your Email'/><br/>
                <select className='form-control' onChange={(e)=>setGender(e.target.value)}>
                    <option>Select Your Gender</option>
                    <option>Male</option>
                    <option>Female</option>
                </select>
                <br/>
                <div className='form-control'>
                    <input type='checkbox' onChange={(e)=>setTnc(e.target.checked)}/>&nbsp;<span>I Agree with Terms and Conditions</span><br/>
                </div>
                <br/>
                <button type='submit' className='btn btn-primary'>Submit</button>
            </form>
        </div>
    );
}

export default Form_Demo;