import '../../App.css';

import React, { useState, useEffect  } from 'react';
import logoImg from '../../assets/logo.png';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

<Link to="/about">About</Link>
 
function Login() {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);

  const history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();
    let  payload = {
        Username : username,
        Password : password,
    }
    axios.post("https://arr-dev.azurewebsites.net/api/v1/login/login", payload)
    .then((res) => {
<<<<<<< HEAD
      // console.log("res",res.data.data.token);
      console.log(res.data.data);
      window.sessionStorage.setItem("token", res.data.data.token)
      history.push("/roomManagement")
      // window.location.reload()
=======
      console.log("res",res.data.data.token);
      window.sessionStorage.setItem("token", res.data.data.token)
      history.push("/roomManagement")
>>>>>>> 09905bd (finish login page)
      setAlert(false)
    })
    .catch((res) => {
      setAlert(true)
    });
  }

  return (
<<<<<<< HEAD
    <div className="login_container">
=======
    <div>
>>>>>>> 927a603 (pull origin develop)
      <form class="login_form" onSubmit={handleSubmit}>
          <img class="login_logo" src={logoImg}></img>
          <input
            onChange={event => setUsername(event.target.value)}
            value={username}
<<<<<<< HEAD
            required
=======
            // required
>>>>>>> 927a603 (pull origin develop)
            id="username"
            name="Username"
            placeholder="Username"
          />
          <input
<<<<<<< HEAD
            required
            onChange={event => setPassword(event.target.value)}
            value={password}
            type="password"
=======
            // required
            onChange={event => setPassword(event.target.value)}
            value={password}
>>>>>>> 927a603 (pull origin develop)
            id="password"
            name="Password"
            placeholder="Password"
          />
          <button>Sign In</button>
<<<<<<< HEAD
          <div class="login_wrong">
          {alert && <p> Wrong Username or Password</p>}
          </div>
=======
          {alert && <p> Worng Username or Password</p>}
>>>>>>> 927a603 (pull origin develop)
      </form>
    </div>
  );
}
 
export default Login;