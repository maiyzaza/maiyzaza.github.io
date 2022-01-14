import React, { useEffect, useState } from "react";
import ModifyRoom from '../../../components/modifyRoom';

function Card(props) {

  const [openModal1, setOpenModal1] = useState(false);


  let data = props.data;

  return (
    
    <div className="col-3">
    <div className="card_room_management_room">
    
      {/* <a href="#" class=""> */}

        <i class='card_room_management_room_writeimg bx bx-edit' onClick={() => {setOpenModal1(true);}}></i>
        {openModal1 && <ModifyRoom closeModal={setOpenModal1} />} 

      {/* </a> */}

      {/* <button
      className='openLogOutModal test' 
      onClick={() => {
        setOpenModal1(true);
      }}
      >
      <span class="links_name">Modify Room</span>
      </button>
      {openModal1 && <ModifyRoom closeModal={setOpenModal1} />}  */}

        <i class='card_room_management_room_clockimg bx bx-time-five'></i>
      <div className="card_room_management_room_roomname">{data.roomName}</div>
      <div className="card_room_management_room_time">{data.openTime} - {data.closeTime} hrs.</div>
      <a href="#" class="card_room_management_room_link">See more {">"}</a>
    </div>
    </div>
  )
}

export default Card;
