import React,{useState} from "react"
import './App.css';
export const Register =(props) =>{
    const [name,setName]=useState('');
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="newform">
       <form className="registerform">
        <label htmlFor="name">Enter The Full Name</label>
        <input value={name} name="name" id="name" placeholder="Full Name" type="text" />
         <label htmlFor="email">Email </label>
            <input value={email} type="email" placeholder="Email" id="email"  name="email" required />
            <label htmlFor="password">Password </label>
            <input value={password} type="password" placeholder="Password" id="password" name="password" required/>
            <button type="submit">Register</button>
         </form>
         
         <button className="btn" onClick={() => props.onFormSwitch('login')}>Already have a account? Login</button>
          </div>
    )
}