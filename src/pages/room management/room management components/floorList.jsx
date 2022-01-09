import React from "react";
import CardRoomList from './roomList';

function RoomManagementCard(props) {
    return (
        <div class="card_room_management_floor">
            <div class="card-body">
                <p class="card_room_management_floor_head card-text">1st Floor</p>
                <hr class="hr-floor"/>
                    <div class="row">
                        <CardRoomList />
                        <CardRoomList />
                        <CardRoomList />
                        <CardRoomList />
                        <CardRoomList />
                        <CardRoomList />
                        <CardRoomList />
                        <CardRoomList />
                    </div>
            </div>
        </div>
       
    )
}

export default RoomManagementCard;
