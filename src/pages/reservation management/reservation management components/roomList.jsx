import React, { useEffect, useState } from "react";
// import ModifyRoom from '../../../components/modifyRoom';

function Card(props) {

  const [openModal1, setOpenModal1] = useState(false);


  let data = props.data;
  let roomId = data.roomId;
  console.log("asa", roomId)

  return (
    
    <div className="col-3">
      <div className="card_reservation_management_room">
        <i className="card_reservation_management_room_icon bx bx-calendar-plus"></i>
        <i class='card_reservation_management_room_icon1 bx bx-trash'></i>
        <div className="card_reservation_management_room_roomname">{data.roomName}
        {/* <i className="card_reservation_management_room_icon bx bx-calendar-plus"></i> */}
        
        </div>
        {/* <i className="card_reservation_management_room_icon bx bx-calendar-plus"></i> */}
      </div>
    </div>
  )
}

export default Card;
