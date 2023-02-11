import React, { useState } from 'react';
import { signInwithGoogle } from '../firebase';

const Login = () => {
  return (
    <div className="container">
      <button onClick={signInwithGoogle} >Login with Google</button>
     
    </div>
  );
};

export default Login;
