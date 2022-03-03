import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
// import DateDropDown from '../../reservation management/reservation management components/dateDropDown';
import DefaultDateDropDown from '../../../components/defaultDateDropDown';
import DisableRoomCell from "./disableRoomCell";

function DisableRoom({closeModal,roomId}) {
    let history = useHistory();

    const [dataRoom,setDataRoom] = useState({})

    const access_token = sessionStorage.getItem("token")

    const postdata = async () => {
        try {
          console.log("room id",roomId)
         const roomInfo = await axios({
            url: `https://arr-dev.azurewebsites.net/api/v1/webs/room-infos/${roomId}`,
            headers: {
                'Authorization': 'Bearer ' + access_token
                },
            method: "GET",
            data: {
            }
        })
        .then((res) => {
            console.log("data",res.data.data); 
            setDataRoom(res.data.data)
         });
        } catch (err) {
            console.log(err);
        }
    };

    useEffect(() => {
        postdata()
    },[]);

    let data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

    let listCell = null

    if (data) {
        listCell = data.map((cell) => 
            <DisableRoomCell data={cell} />
        );
    }

    return(
        <div>
            <div className="disable-model">
                <div className="disable-modelContainer">
                    <button className="" type="button" onClick={() => closeModal(false)} >X</button>
                    <div className="title AllBig">{dataRoom.roomName}</div> 
                    <i class='iconAddress bx bxs-school'></i>
                    <div class="address ">{dataRoom.roomName} @ {dataRoom.building} {dataRoom.floor} floor</div>
                    <h1 class="disable_search_container_date"> Date </h1>
                    <div class="date-drop-down disable">
                        <DefaultDateDropDown />
                    </div>
                    <div className="body disable-border-cell disable-row canScroll">
                        <div class="col" >
                        {listCell}
                        </div>
                    </div>
                    <div className="footer">
                        
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default DisableRoom;