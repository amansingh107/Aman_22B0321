import React,{useState} from "react"
import './App.css';
export const Login =(props) =>{
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');

    const handleSubmit = (e)=>{
        e.preventDefault();
        console.log(email);
    }
    return(
        <div className="newform">
         <form className="loginform">
         <label htmlFor="email">Email </label>
            <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Email" id="email"  name="email" required />
            <label htmlFor="password">Password </label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="Password" id="password" name="password" required/>
            <button type="submit">Login</button>
         </form>

         <button className="btn" onClick={() => props.onFormSwitch('register')}>Don't have a account? Register</button>
           
        </div>
    )
}