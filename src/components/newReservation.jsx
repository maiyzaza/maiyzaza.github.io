import React, { useEffect, useState } from "react";
import axios from 'axios';
import SearchSelectBuilding from "./searchSelectBuilding";
import SearchSelectFloor from "./searchSelectFloor";
import MinDurationSelect from './minDurationSelect';
import MaxDurationSelect from './maxDurationSelect';
import StartTimeSelect from './startTimeSelect';
import EndTimeSelect from './endTimeSelect';
import { useHistory } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";






function NewReservation({closeModal,roomId}) {
    let history = useHistory();
  
    // const [roomTitle, setRoomTitle] = useState('');
    // const [roomCapacity, setCapacity] = useState('');
    // const [requireMember, setRequireMember] = useState('');

    

    const [dataRoom,setDataRoom] = useState({})
    const [address,setAddress] = useState("")
    // const [baseImage, setBaseImage] = useState("");
    const access_token = sessionStorage.getItem("token")

    // const [openModal, setOpenModal] = useState(false);
    // const [openModal1, setOpenModal1] = useState(false);

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
            console.log("data",res.data.data.floor); 
            setDataRoom(res.data.data)
         });
        } catch (err) {
            console.log(err);
        }
     };

     useEffect(() => {
        postdata();
   },[]);
    

    // const onClick = (event) => {

    //     let building = window.sessionStorage.getItem("building")
    //     let floor = window.sessionStorage.getItem("floor")
    //     let minDuration = window.sessionStorage.getItem("minDuration")
    //     let maxDuration = window.sessionStorage.getItem("maxDuration")
    //     let startTime = window.sessionStorage.getItem("startTime")
    //     let endTime = window.sessionStorage.getItem("endTime")

    //     console.log(building)
    //     console.log(floor)
    //     console.log(roomTitle)
    //     console.log(roomCapacity)
    //     console.log(requireMember)
    //     console.log(minDuration)
    //     console.log(maxDuration)
    //     console.log(startTime)
    //     console.log(endTime)

    //     setOpenModal(true)

    //     event.preventDefault();

    //     axios({
    //         url: "https://arr-dev.azurewebsites.net/api/v1/webs/rooms-create",
    //         headers: {
    //             'Authorization': "Bearer " + access_token
    //             },
    //         method: "POST",
    //         data: {
    //             Campus: null,
    //             Building : building,
    //             Floor : floor,
    //             RoomTitle: roomTitle,
    //             RoomCapacity: roomCapacity,
    //             RoomPictureUrl: "https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024/https://truelab.info/wp-content/uploads/2020/03/DSC_1945-HDR-1024x683.jpg",
    //             MinAttendee: requireMember,
    //             MinDuration: minDuration,
    //             MaxDuration: maxDuration,
    //             CloseTime: endTime,
    //             OpenTime: startTime
    //     }
    //     })
    //     .then((res) => {
    //         console.log("okay", res.data)
    //             alert("Your room has been created")
    //             let path = `/roomManagement`
    //             history.push(path)
    //             window.location.reload()
    //     })
    //     .catch((err) => {
    //         console.log(err.response)
    //         alert("Failed to create room")
    //     });
    // }

    return(
        <div>
            <div className="createRoom-modal ">
                <div className="createRoom-modalContainer">
                    <div className="title AllBig">{dataRoom.roomName}</div>
                    <div className="body">
                        <i class='iconAddress bx bxs-school'></i>
                        <div class="address">{dataRoom.building} {dataRoom.floor} floor</div>
                        <i class='iconCalendar bx bx-calendar'></i>
                        <div class="calendar">floor</div>
                        <form className="new-col-12">
{/*                             
                            <label className="col-6 firstForm">Building</label>
                            <label className="col-6 secondForm">Floor</label>
                            <SearchSelectBuilding className="size zero" required />
                            <SearchSelectFloor className="size secondP" required />
                            {/* <textarea className="size" required></textarea>
                            <textarea className="size secondP" required></textarea> */}
                            
                            {/* <label className="col-6 firstForm">Room Title</label>
                            <label className="col-6 secondForm">Room Capacity</label>
                            <textarea className="size" onChange={event => setRoomTitle(event.target.value)} required></textarea>
                            <textarea className="size  secondP" onChange={event => setCapacity(event.target.value)} required></textarea>


                            <div className='rowWWWW'>
                            <label className="col-6 firstForm">Require Member</label>
                            <label className="col-6 secondForm">Room Image</label>
                            <textarea className="size" onChange={event => setRequireMember(event.target.value)} required></textarea>
                            
                            <input type="file" className="col-6 size form-control thirdP" id="customFile" onChange={(e) => {uploadImage(e);}}></input>
                            </div>
                            
                            <label className="col-6 firstForm">Min Duration</label>
                            <label className="col-6 secondForm">Max Duration</label>
                            <MinDurationSelect className="size zero" required />
                            <MaxDurationSelect className="size secondP" required />

                            <label className="col-6 firstForm">Start Time</label>
                            <label className="col-6 secondForm">End Time</label>
                            <StartTimeSelect className="size zero" required />
                            <EndTimeSelect className="size secondP" required />  */}
                        </form>
                    </div>

                    <div className="footer">
                        {/* <button className="btn btn-danger btn-sm" onClick={() => {setOpenModal(true);}} type="button">Create</button> */}
                        <button className="btn btn-danger btn-sm" 
                        // onClick={onClick}
                         type="button">New</button>
                    </div>
                </div>
                
            </div>
        </div>
    )

}

export default NewReservation;