import React, { useEffect, useState } from "react";
import axios from 'axios';
import StartTimeSelect1 from './startTimeSelect1';
import EndTimeSelect1 from './endTimeSelect1';
import { useHistory } from 'react-router-dom';
import { Modal, ModalHeader, ModalBody, ModalFooter, Button } from "reactstrap";
import Purpose from './purpose';






function NewReservation({closeModal,roomId}) {
    let history = useHistory();
  
    const [meetingTitle, setMeetingTitle] = useState('');
    const [purpose, setPurpose] = useState('');
    // const [requireMember, setRequireMember] = useState('');

    

    const [dataRoom,setDataRoom] = useState({})
    const [address,setAddress] = useState("")
    // const [baseImage, setBaseImage] = useState("");
    const access_token = sessionStorage.getItem("token")
    const date1 = sessionStorage.getItem("date")
  

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
    

    const onClick = (event) => {

        // let building = window.sessionStorage.getItem("building")
        // let floor = window.sessionStorage.getItem("floor")
        // let minDuration = window.sessionStorage.getItem("minDuration")
        // let maxDuration = window.sessionStorage.getItem("maxDuration")
        // let startTime = window.sessionStorage.getItem("startTime")
        // let endTime = window.sessionStorage.getItem("endTime")

        // console.log(building)
        // console.log(floor)
        // console.log(roomTitle)
        // console.log(roomCapacity)
        // console.log(requireMember)
        // console.log(minDuration)
        // console.log(maxDuration)
        // console.log(startTime)
        // console.log(endTime)

        // setOpenModal(true)

        // event.preventDefault();

        // axios({
        //     url: "https://arr-dev.azurewebsites.net/api/v1/mobiles/book",
        //     headers: {
        //         'Authorization': "Bearer " + access_token
        //         },
        //     method: "POST",
        //     data: {
        //         Title : "TestWebsite",
        //         RoomId : roomId,
        //         ActivityId : 1,
        //         ChannelName : "Website",
        //         StartDateTime : "2021-01-01T07:00:00",
        //         EndDateTime : "2021-01-01T08:00:00",
        //         StaffFirstName : "IAM",
        //         StaffLastName : "Batman"
        // }
        // })
        // .then((res) => {
        //     console.log("okay", res.data)
        //         alert("Your room has been created")
        //         let path = `/roomManagement`
        //         history.push(path)
        //         window.location.reload()
        // })
        // .catch((err) => {
        //     console.log(err.response)
        //     alert("Failed to create room")
        // });
    }

    return(
        <div>
            <div className="newReservation-modal ">
                <div className="newReservation-modalContainer">
                    <div className="title AllBig">new reservation</div>
                    <i class='iconAddress bx bxs-school'></i>
                        <div class="address ">{dataRoom.roomName} @ {dataRoom.building} {dataRoom.floor} floor</div>
                        <i class='iconCalendar bx bx-calendar'></i>
                        <div class="calendar">{new Date(date1).toLocaleDateString("en-GB")}</div>
                    <div className="body">
                        <form className="col-12">
                            <label className="col-6 firstFormForNewReservation">Meeting Title</label>
                            <label className="col-6 secondFormForNewReservation">Purpose</label>
                            <textarea className="size1 firstP" onChange={event => setMeetingTitle(event.target.value)} placeholder="Meeting Title" required></textarea>
                            <Purpose className="firstPP" required />
                            <label className="col-6 firstForm1">Start Time</label>
                            <label className="col-6 secondForm1">End Time</label>
                            <StartTimeSelect1 className="size zero" required />
                            <EndTimeSelect1 className="size secondP" required />
                        </form>
                    </div>
                    <div className="footer">
                        <button className="btn btn-danger btn-sm"  type="button">New</button>
                        <button className="btn btn-primary btn-sm" type="button" onClick={() => closeModal(false)} id="cancelLogOut">Cancel</button>
                    </div>
                </div>
                
            </div>
        </div>
    )

}

export default NewReservation;