import React from 'react';
import { signInwithGoogle } from '../firebase';
import "./login.css";

const Login = () => {
  return (
    <div className="container">
      <img src={require('./Logo.png')} alt='My Logo' />


      <button onClick={signInwithGoogle} >Login with Google</button>
     
    </div>
  );
};

export default Login;
