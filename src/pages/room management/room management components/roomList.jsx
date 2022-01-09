import React from "react";
import writeicon from '../../../assets/write-icon.jpg';
import clock from '../../../assets/clock.jpg';

function Card(props) {
  return (
    <div className="col-sm-3">
    <div className="card_room_management_room">
        <div className="card_room_management_room_roomname">Room Name</div>
        <img className="card_room_management_room_writeimg" src={writeicon}></img>
        <img className="card_room_management_room_clockimg" src={clock}></img>
        <div className="card_room_management_room_time">-----Time------</div>
        <a href="#" class="card_room_management_room_link">See more {">"}</a>
    </div>
    </div>
  )
}

export default Card;
