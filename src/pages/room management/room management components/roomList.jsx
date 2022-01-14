import React from "react";
import writeicon from '../../../assets/write-icon.jpg';
import clock from '../../../assets/clock.jpg';

function Card(props) {

  let data = props.data;

  return (
    
    <div className="col-3">
    <div className="card_room_management_room">
      <a href="#" class="">
        <i class='card_room_management_room_writeimg bx bx-edit'></i>
      </a>
        <i class='card_room_management_room_clockimg bx bx-time-five'></i>
      <div className="card_room_management_room_roomname">{data.roomName}</div>
      <div className="card_room_management_room_time">{data.openTime} - {data.closeTime} hrs.</div>
      <a href="#" class="card_room_management_room_link">See more {">"}</a>
    </div>
    </div>
  )
}

export default Card;
