import '../../App.css';

import React, { useState } from 'react';
import logoImg from '../../assets/logo.png';
import { Link } from 'react-router-dom';

<Link to="/about">About</Link>
 
function Login() {
  return (
    <div>
        <form class="login_form">
            <img class="login_logo" src={logoImg}></img>
            <input
                name="Username"
                placeholder="Username"
            />
            <input
                name="Password"
                placeholder="Password"
            />
            <button>Sign In</button>
        </form>
    </div>
  );
}
 
export default Login;