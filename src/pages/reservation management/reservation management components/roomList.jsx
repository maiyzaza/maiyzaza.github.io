import React, { useEffect, useState } from "react";
// import ModifyRoom from '../../../components/modifyRoom';
<<<<<<< HEAD
import ModifyRoom from '../../../components/createRoom';
=======
>>>>>>> develop

function Card(props) {

  const [openModal1, setOpenModal1] = useState(false);


  let data = props.data;
  let roomId = data.roomId;
<<<<<<< HEAD

  const style = {
    position: 'fixed',
    background: 'yellow',
    zIndex: '20000'
  }
=======
  console.log("asa", roomId)
>>>>>>> develop

  return (
    
    <div className="col-3">
<<<<<<< HEAD
    <div className="card_room_management_room">
        <i class='card_room_management_room_writeimg bx bx-edit' onClick={() => {setOpenModal1(true);}}></i>
        {openModal1 && <ModifyRoom closeModal={setOpenModal1} roomId = {roomId} />} 
        <i class='card_room_management_room_clockimg bx bx-time-five'></i>
      <div className="card_room_management_room_roomname">{data.roomName}</div>
      <div className="card_room_management_room_time">{data.openTime.slice(0,5)} - {data.closeTime.slice(0,5)} hrs.</div>
      <a href="#" class="card_room_management_room_link">See more {">"}</a>
    </div>
=======
      <div className="card_reservation_management_room">
        <i className="card_reservation_management_room_icon bx bx-calendar-plus"></i>
        <i class='card_reservation_management_room_icon1 bx bx-trash'></i>
        <div className="card_reservation_management_room_roomname">{data.roomName}
        {/* <i className="card_reservation_management_room_icon bx bx-calendar-plus"></i> */}
        
        </div>
        {/* <i className="card_reservation_management_room_icon bx bx-calendar-plus"></i> */}
      </div>
>>>>>>> develop
    </div>
  )
}

export default Card;
