import React, { useState } from 'react';
import axios from 'axios';
import SearchSelectBuilding from "./searchSelectBuilding";
import SearchSelectFloor from "./searchSelectFloor";
import MinDurationSelect from './minDurationSelect';
import MaxDurationSelect from './maxDurationSelect';
import StartTimeSelect from './startTimeSelect';
import EndTimeSelect from './endTimeSelect';
import { useHistory } from 'react-router-dom';


function CreateRoom({closeModal}) {

    const [roomTitle, setRoomTitle] = useState('');
    const [roomCapacity, setCapacity] = useState('');
    const [requireMember, setRequireMember] = useState('');
    const [baseImage, setBaseImage] = useState("");
    const [startTime, setStartTime] = useState("");
    const [endTime, setEndTime] = useState("");
    const [minDuration, setMinDuration] = useState("");
    const [maxDuration, setMaxDuration] = useState("");
    const access_token = sessionStorage.getItem("token")
    
    let history = useHistory();

    const onClick = (event) => {

        let building = window.sessionStorage.getItem("building")
        let floor = window.sessionStorage.getItem("floor")
        let minDurationPostAPI = minDuration.value
        let maxDurationPostAPI = maxDuration.value
        let startTimePostAPI = startTime.value
        let endTimePostAPI = endTime.value

        event.preventDefault();

        // console.log(building)
        // console.log(floor)
        // console.log(roomTitle)
        // console.log(roomCapacity)
        // console.log(baseImage)
        // console.log(requireMember)
        // console.log(minDurationPostAPI)
        // console.log(maxDurationPostAPI)
        // console.log(endTimePostAPI)
        // console.log(startTimePostAPI)
        
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
                MinDuration: minDurationPostAPI,
                MaxDuration: maxDurationPostAPI,
                CloseTime: endTimePostAPI,
                OpenTime: startTimePostAPI
        }
        })
        .then((res) => {
            console.log("okay", res.data)
            if (res.data.message == "Success") {
                window.sessionStorage.setItem("building", null)
                window.sessionStorage.setItem("floor", null)
            }
            alert("Your room has been created")
            let path = `/roomManagement`
            history.push(path)
            window.location.reload()
            
        })
        .catch((err) => {
            console.log(err.response.data.message)
            alert(err.response.data.message)
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

    function onChangeInputStartTime(value){
        setStartTime(value)
    }

    function onChangeInputEndTime(value){
        setEndTime(value)
    }

    function onChangeInputMinDuration(value){
        console.log(value)
        setMinDuration(value)
    }

    function onChangeInputMaxDuration(value){
        console.log(value)
        setMaxDuration(value)
    }

    return(
        <div>
            <div className="createRoom-modal ">
                <div className="createRoom-modalContainer">
                    <div className="title">CREATE ROOM</div>
                    <div className="body">
                        <form className="new-col-12">
                            
                            <label className="col-6 firstForm">Building</label>
                            <label className="col-6 secondForm">Floor</label>
                            <SearchSelectBuilding className="size zero" required oldValue={null} />
                            <SearchSelectFloor className="size secondP" required oldValue={null} />
                            
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
                            <MinDurationSelect onChange={onChangeInputMinDuration} className="size zero" required />
                            <MaxDurationSelect minDuration={minDuration} onChange={onChangeInputMaxDuration} className="size secondP" required />

                            <label className="col-6 firstForm">Start Time</label>
                            <label className="col-6 secondForm">End Time</label>
                            <StartTimeSelect onChange={onChangeInputStartTime} className="size zero" required oldValue={null} />
                            <EndTimeSelect minDuration={minDuration} startTime={startTime} onChange={onChangeInputEndTime} className="size secondP" required oldValue={null} />
                        </form>
                    </div>

                    <div className="footer">
                        <button className="btn btn-danger btn-sm" onClick={onClick} type="button">Create</button>
                        <button className="btn btn-primary btn-sm" type="button" onClick={() => closeModal(false)} id="cancelLogOut">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CreateRoom;