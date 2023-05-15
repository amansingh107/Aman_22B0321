import logo from './logo.svg';
import './App.css';
import { Login } from './Login';
import { Register } from './Register';
import { useState } from 'react';
import Navbar from './Navbar';
import Projectnames from './Projectnames'
import Projectdetails from './Projectdetails';
import { BrowserRouter as Routes,Route } from 'react-router-dom';

function App() {
  const[currentForm, setCurrentForm]=useState('login');

  const toggleForm= (forName) =>{
    setCurrentForm(forName);
  }
  return (
    <div className="App">
      <Navbar/>
      {
    
      currentForm==="login" ? <Login onFormSwitch={toggleForm}/> : <Register onFormSwitch={toggleForm}/>
    }
     <Projectdetails/>
    <Projectnames/>
    
    </div>
  );
}

export default App;
