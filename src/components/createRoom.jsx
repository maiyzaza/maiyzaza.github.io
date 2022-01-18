import React, { useState } from 'react';
import axios from 'axios';
import SearchSelectBuilding from "./searchSelectBuilding";
import SearchSelectFloor from "./searchSelectFloor";
import MinDurationSelect from './minDurationSelect';
import MaxDurationSelect from './maxDurationSelect';
import StartTimeSelect from './startTimeSelect';
import EndTimeSelect from './endTimeSelect';
import { useHistory } from 'react-router'




function CreateRoom({closeModal}) {

    const [roomTitle, setRoomTitle] = useState('');
    const [roomCapacity, setCapacity] = useState('');
    const [requireMember, setRequireMember] = useState('');
    const [data, setData] = useState(false);
    const [baseImage, setBaseImage] = useState("");
    const access_token = sessionStorage.getItem("token")
    

    let history = useHistory();

    const onClick = (event) => {

        let building = window.sessionStorage.getItem("building")
        let floor = window.sessionStorage.getItem("floor")
        let minDuration = window.sessionStorage.getItem("minDuration")
        let maxDuration = window.sessionStorage.getItem("maxDuration")
        let startTime = window.sessionStorage.getItem("startTime")
        let endTime = window.sessionStorage.getItem("endTime")

        event.preventDefault();

        axios({
            url: "https://arr-dev.azurewebsites.net/api/v1/webs/rooms-create",
            headers: {
                'Authorization': "Bearer " + access_token
                },
            method: "POST",
            data: {
                Campus: null,
                Building : building,
                Floor : floor,
                RoomTitle: roomTitle,
                RoomCapacity: roomCapacity,
                RoomPictureUrl: baseImage,
                MinAttendee: requireMember,
                MinDuration: minDuration,
                MaxDuration: maxDuration,
                CloseTime: endTime,
                OpenTime: startTime
        }
        })
        .then((res) => {
            setData(false)
            console.log(res.data)
            window.sessionStorage.setItem("building", null)
            window.sessionStorage.setItem("floor", null)
            window.sessionStorage.setItem("minDuration", null)
            window.sessionStorage.setItem("maxDuration", null)
            window.sessionStorage.setItem("startTime", null)
            window.sessionStorage.setItem("endTime", null)

            history.push("/roomManagement")
            window.location.reload("/roomManagement");
        })
        .catch((res) => {
            setData(true)
        });

    }

  const uploadImage = async (e) => {
    const file = e.target.files[0];
    const base64 = await convertBase64(file);
    setBaseImage(base64);
    
  };



  const convertBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);

      fileReader.onload = () => {
        resolve(fileReader.result);
      };

      fileReader.onerror = (error) => {
        reject(error);
      };
    });
  };

    return(
        <div>
            <div className="createRoom-modal ">
                <div className="createRoom-modalContainer">
                    <div className="title">CREATE ROOM</div>
                    <div className="body">
                        <form className="new-col-12">
                            
                            <label className="col-6 firstForm">Building</label>
                            <label className="col-6 secondForm">Floor</label>
                            <SearchSelectBuilding className="size zero" required />
                            <SearchSelectFloor className="size secondP" required />
                            
                            <label className="col-6 firstForm">Room Title</label>
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
                            <EndTimeSelect className="size secondP" required />
                        </form>
                    </div>

                    <div className="footer">
                        <button className="btn btn-danger btn-sm" onClick={onClick} type="button">Create</button>
                        <button className="btn btn-primary btn-sm" type="button" onClick={() => closeModal(false)} id="cancelLogOut">Cancel</button>
                    </div>
                    {data && <p className='text_alert_create'> Please fill evry things.</p>}
                    
                </div>
                
            </div>
        </div>
    )
}

export default CreateRoom;