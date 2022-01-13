import '../../App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useHistory } from 'react-router'
import React, { useEffect, useState } from "react";
import CreateRoom from '../../components/createRoom';
import ModifyRoom from '../../components/modifyRoom';

 
function RoomManagement() {

  let history = useHistory();

  const access_token = sessionStorage.getItem("token")

  const [openModal, setOpenModal] = useState(false);
  const [openModal1, setOpenModal1] = useState(false);

  if(!access_token){
    history.push("/")
    window.location.reload("/");
  }

  return (
    <body>
      <h1 class="content">Hello Room</h1>
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
      {openModal1 && <ModifyRoom closeModal={setOpenModal1} />}
        
    </body>
  );
}
 
export default RoomManagement;