import React from "react";
import CardRoomList from './roomList';

<<<<<<< HEAD
function RoomManagementCard(props) {
=======
function ReservationManagementCard(props) {
>>>>>>> develop
    const data = props.data;

    let listFloor = null

    if (data) {
        listFloor = data[1].map((Floor) =>
            <CardRoomList data={Floor}/>
        );
    }

    return (
        <div class="card_room_management_floor">
            <div class="card-body">
                <p class="card_room_management_floor_head card-text">{data[0]} Floor</p>
                <hr class="hr-floor"/>
                <div class="row">
                    {listFloor}
                </div>
            </div>
        </div>
    )
}

<<<<<<< HEAD
export default RoomManagementCard;
=======
export default ReservationManagementCard;
>>>>>>> develop
