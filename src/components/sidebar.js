import React, { useState } from 'react';
import logo from '../assets/logo.png';
import profile from '../assets/profile.jpg';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';


const Sidebar = () => {

  const [isActive, setActive] = useState("false");
  const ToggleClass = () => {
    setActive(!isActive); 
   };

  return (

    <body>
      <div className={isActive ? "sidebar" : "sidebar active"}>
        <div class="logo_content">
          <div class="logo">
            <img src={logo} width="150px" height="90px"></img> 
          </div>

          <div className={isActive ? "menu" : "menu active"}>
            <i class='bx bx-menu' onClick={ToggleClass} id="btn"></i>
          </div>

        </div>

        <div class="profile_content">

          <div class="profile">

            <div class="profile_details row">
              <div class="col-sm-3">
                <img src={profile} width="50" height="50"/>
              </div>
              <div class="firstName_lastName col-sm-7">
                <div class="firstName font-face-bariol-bold">NUTNISA</div>
                <div class="lastName font-face-bariol-regular">THONGRUSSAMEE</div>

              </div>
            </div>
          </div>
        </div>

        <ul class="nav_list" class="font-face-bariol-regular">
          
            <li>
              <a href="/roomManagement">
                <i class='bx bx-building' ></i>
                <span class="links_name">Room Management</span>
              </a>
            </li>

            <li>
              <a href="/reservationManagement">
                <i class='bx bx-calendar' ></i>
                <span class="links_name">Reservation Management</span>
              </a>
            </li>

            <li>
              <Link to="/history">
                <i class='bx bx-history'></i>
                <span class="links_name" >History</span>
              </Link>
            </li>

            <li>
              <a href="/adminManagement">
                <i class='bx bxs-user-account'></i>
                <span class="links_name">Admin Management</span>
              </a>
            </li>

            <li>
              <a href="#">
                <i class='bx bx-log-out' id="log_out"></i>
                <span class="links_name">Sign Out</span>
              </a>
            </li>
          
        </ul>
      </div>
    </body>
  );
};
 
export default Sidebar;
