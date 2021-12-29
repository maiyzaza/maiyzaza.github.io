import '../../App.css';
import cardImg from '../../assets/cardImg.png';
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router'

 
function ChangePassword() {

  let history = useHistory();

  const access_token = sessionStorage.getItem("token")

  const [password, setPassword] = useState('');
  const [alert, setAlert] = useState(false);

  if(!access_token){
    history.push("/")
    window.location.reload("/");
  }

  return (
    <div className="changePassword_container">
      <form class="changePassword_form">
      <p class="changePassword">CHANGE PASSWORD</p>
        <input
          // onChange={event => setUsername(event.target.value)}
          // value={username}
          required
          type="password"
          id="currentPassword"
          name="CurrentPassword"
          placeholder="Current password"
        />
        <input
          required
          // onChange={event => setPassword(event.target.value)}
          // value={password}
          type="password"
          id="newPassword"
          name="NewPassword"
          placeholder="New password"
        />
        <input
          required
          // onChange={event => setPassword(event.target.value)}
          // value={password}
          type="password"
          id="confirmNewPassword"
          name="ConfirmNewPassword"
          placeholder="Confirm New password"
        />
        <br/>
        <br/>
        <button>Confirm</button>
        <div class="password_wrong">
          {alert && <p> Wrong Current password</p>}
        </div>
        {/* <p class="backPage" ><u><a href="/reservationManagement">Back to previous page</a></u></p> */}
    </form>
  </div>
  );
}
 
export default ChangePassword;