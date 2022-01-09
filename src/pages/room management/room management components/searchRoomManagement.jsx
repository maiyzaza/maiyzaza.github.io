import React, { useEffect, useState } from 'react';
import SearchSelectBuilding from "./searchSelectBuilding";
import SearchSelectFloor from "./searchSelectFloor";
import SearchSelectRoom from "./searchSelectRoom"
import FloorList from './floorList';
import axios from 'axios';

function SearchRoomManagement(props) {

    const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiI2MjEzNjM5IiwiZXhwIjoxNjQ0MzQxOTIwLCJpc3MiOiJUb2tlbkF1dGhEZW1vIiwiYXVkIjoiVG9rZW5BdXRoRGVtbyJ9.pkA3vaCkD9PWpJ00kCqTjsn0h09qqhT0q_xCY61b5l0"

    const [building, setbuilding] = useState('');
    const [floor, setfloor] = useState('');
    const [data, setData] = useState();

    const onClick = (event) => {
        event.preventDefault();
        axios({
        url: "https://arr-dev.azurewebsites.net/api/v1/webs/explore-rooms",
        headers: {
            'Authorization': "Bearer " + access_token
            },
        method: "POST",
        data: {
            Building : building,
            Floor : floor,
        }
        })
        .then((res) => {
        console.log(res.data.data);
        setData(res.data.data)
        })
        .catch((res) => {
        // Todo Do Something
        });
  }

    return (
        <div class="room_management">
            <h1 class="search_container_building">Building</h1>
            <h1 class="search_container_floor">Floor</h1>
            <SearchSelectBuilding />
            <SearchSelectFloor />
            <FloorList />
            <FloorList />
            <button class="search_button" onClick={onClick}> Search </button>
            <button class="create_room_button"> Create Room </button>
            <SearchSelectRoom />
        </div>
    );
}


export default SearchRoomManagement;