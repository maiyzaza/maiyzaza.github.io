import React, { useEffect, useState } from "react";
import NewReservation from '../../../components/newReservation';

function Card(props) {

  const [openModal1, setOpenModal1] = useState(false);


  let data = props.data;
  let roomId = data.roomId;

  // console.log("asa", roomId)

  return (
    
    <div className="col-3">
      <div className="card_reservation_management_room">
        <i className="card_reservation_management_room_icon bx bx-calendar-plus" onClick={() => {setOpenModal1(true);}}></i>
        {openModal1 && <NewReservation closeModal={setOpenModal1} roomId = {roomId} />} 
        <i class='card_reservation_management_room_icon1 bx bx-trash'></i>
        <div className="card_reservation_management_room_roomname">{data.roomName}  
        </div>
      </div>
    </div>
  )
}

export default Card;
