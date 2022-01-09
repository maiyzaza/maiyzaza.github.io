import '../../App.css';
import React, { useState, useEffect } from 'react';
import cardImg from '../../assets/cardImg.png';
import SearchRoomManagement from "./room management components/searchRoomManagement"
import axios from 'axios';

// import Sidebar from '../../components/sidebar'

  
function RoomManagement() {

  // const access_token = "Bearer" + sessionStorage.getItem("token")
  const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiI2MjEzNjM5IiwiZXhwIjoxNjQ0MzQxOTIwLCJpc3MiOiJUb2tlbkF1dGhEZW1vIiwiYXVkIjoiVG9rZW5BdXRoRGVtbyJ9.pkA3vaCkD9PWpJ00kCqTjsn0h09qqhT0q_xCY61b5l0"

  // const [building, setbuilding] = useState('');
  // const [floor, setfloor] = useState('');
  // const [data, setData] = useState();

  // useEffect(() => {

  //   setbuilding(null)
  //   setfloor(null)

  //   axios({
  //     url: "https://arr-dev.azurewebsites.net/api/v1/webs/explore-rooms",
  //     headers: {
  //       'Authorization': "Bearer " + access_token
  //       },
  //     method: "POST",
  //     data: {
  //       Building : building,
  //       Floor : floor,
  //     }
  //   })
  //   .then((res) => {
  //     console.log(res.data.data);
  //     setData(res.data.data)
  //   });
    

  // });

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
        {/* <Sidebar /> */}
      </body>
    </div>
  );
}
 
export default RoomManagement;