import '../../App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useHistory } from 'react-router'
import React, { useEffect, useState } from "react";
// import CreateRoom from '../../components/createRoom';
// import ModifyRoom from '../../components/modifyRoom';
import SearchRoomManagement from "./room management components/searchRoomManagement"
import cardImg from '../../assets/cardImg.png';

 
function RoomManagement() {

  let history = useHistory();

  const access_token = sessionStorage.getItem("token")

  // const [openModal, setOpenModal] = useState(false);
  // const [openModal1, setOpenModal1] = useState(false);

  if(!access_token){
    history.push("/")
    window.location.reload("/");
  }

  return (
    <body>
       <div class="card">
          <img class="card-img-top" src={cardImg}></img>
            <div class="card-img-overlay">
              <h4 class="headContent card-title">RoomManagement</h4>
              <p class="content card-text">Suvarnabhumi Campus</p>
            </div>
        </div>
        <SearchRoomManagement />

      {/* <h1 class="content">Hello Room</h1>
      <button
      className='openLogOutModal test' 
      onClick={() => {
        setOpenModal(true);
      }}
      >
      <span class="links_name">Create Room</span>
      </button>
      {openModal && <CreateRoom closeModal={setOpenModal} />}

      <button
      className='openLogOutModal test' 
      onClick={() => {
        setOpenModal1(true);
      }}
      >
      <span class="links_name">Modify Room</span>
      </button>
      {openModal1 && <ModifyRoom closeModal={setOpenModal1} />} */}
      
    </body>
  );
}
 
export default RoomManagement;