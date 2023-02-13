import React from 'react';
import { signInwithGoogle } from '../firebase';
import "./login.css";

const Login = () => {
  return (
    <div className="logindiv">
      <img className='logo' src={require('./Logo.png')} alt='My Logo' />


      <button className='signin' onClick={signInwithGoogle} >Login with Google</button>
     
    </div>
  );
};

export default Login;
