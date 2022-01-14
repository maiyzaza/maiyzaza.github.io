import '../../App.css';
import React, { useState, useEffect } from 'react';
import cardImg from '../../assets/cardImg.png';
import SearchRoomManagement from "./room management components/searchRoomManagement"
import axios from 'axios';

// import Sidebar from '../../components/sidebar'

  
function RoomManagement() {

  return (
    <div> 
      <body>
        <div class="card">
          <img class="card-img-top" src={cardImg}></img>
            <div class="card-img-overlay">
              <h4 class="headContent card-title">RoomManagement</h4>
              <p class="content card-text">Suvarnabhumi Campus</p>
            </div>
        </div>
        <SearchRoomManagement />
      </body>
    </div>
  );
}
 
export default RoomManagement;