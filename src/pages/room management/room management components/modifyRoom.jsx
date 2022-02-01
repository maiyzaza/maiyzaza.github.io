import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchSelectBuilding from "../../../components/searchSelectBuilding";
import SearchSelectFloor from "../../../components/searchSelectFloor";
import MinDurationSelect from '../../../components/minDurationSelect';
import MaxDurationSelect from '../../../components/maxDurationSelect';
import StartTimeSelect from '../../../components/startTimeSelect';
import EndTimeSelect from '../../../components/endTimeSelect';
import { useHistory } from 'react-router-dom';

function ModifyRoom( { closeModal,roomId } ) {
    const [data, setData] = useState(false);
    const [baseImage, setBaseImage] = useState("");
    const access_token = sessionStorage.getItem("token")

    const [roomTitle, setRoomTitle] = useState("");
    const [cap, setCap] = useState("");
    const [minAt, setMinAt] = useState("");
    const [minD, setMinD] = useState("");
    const [maxD, setMaxD] = useState("");
    const [oldImg,setOldImg] = useState([]);
    const [dataStartTime,setDataStartTime] = useState("")
    const [dataEndTime,setDataEndTime] = useState("")
    const [building,setBuilding] = useState("")
    const [floor,setFloor] = useState("")
 
    let history = useHistory();

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
          setBuilding(res.data.data.building) 
          setFloor(res.data.data.floor) 
          setRoomTitle(res.data.data.roomName)
          setDataStartTime(res.data.data.startTime.slice(0,5)) 
          setDataEndTime(res.data.data.endTime.slice(0,5)) 
          setCap(res.data.data.capacity)
          setMinAt(res.data.data.minAttendees)
          setMinD(res.data.data.minDuaration) 
          setMaxD(res.data.data.maxDuration) 
          setOldImg(res.data.data.roomPictureUrl)
       });
      } catch (err) {
          console.log(err);
      }
   };

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

  const onClick = async (event) => {
    event.preventDefault();

    if (baseImage.length == 0 ) {
        setBaseImage(oldImg)
    }

    let building1 = (sessionStorage.getItem("building"))
    if (building1 === null)
      building1 = building
    
    let floor1 = (sessionStorage.getItem("floor"))
    if (floor1 === null)
      floor1 = floor
    
    let minD1 = (sessionStorage.getItem("minDuration"))
    if (minD1 === null)
      minD1 = minD
    
    let maxD1 = (sessionStorage.getItem("maxDuration"))
    if (maxD1 === null)
      maxD1 = maxD
    
    let startTime1 = (sessionStorage.getItem("startTime"))
    if (startTime1 === null)
      startTime1 = dataStartTime
    
    let endTime1 = (sessionStorage.getItem("endTime"))
    if (endTime1 === null)
      endTime1 = dataEndTime

    try {

     await axios({
        url: "https://arr-dev.azurewebsites.net/api/v1/webs/rooms-modify",
        headers: {
            'Authorization': 'Bearer ' + access_token
            },
        method: "POST",
        data: {
            RoomId: roomId,
            RoomName: roomTitle,
            Building: building1,
            Floor: floor1,
            RoomCapacity: cap,
            RoomPictureUrl: baseImage,
            MinAttendee: minAt,
            MinDuration: minD1,
            MaxDuration: maxD1,
            CloseTime: endTime1,
            OpenTime: startTime1
        }
    })
    .then((res) => {
      alert("Your room has been modified")
      history.push("/roomManagement")
     });
    } catch (err) {
      setData(true)
    }
 };

  useEffect(() => {
    postdata();
  },[]);

    return(
        <div>
            <div className="createRoom-modal ">
                <div className="createRoom-modalContainer">
                    <div className="title">MODIFY ROOM</div>
                    <div className="body">
                        <form className="new-col-12">
                            <label className="col-6 firstForm">Building</label>
                            <label className="col-6 secondForm">Floor</label>
                            <SearchSelectBuilding className="size zero" oldValue={building}/>
                            <SearchSelectFloor className="size secondP" oldValue={floor}/>
                            
                            <label className="col-6 firstForm">Room Title</label>
                            <label className="col-6 secondForm">Room Capacity</label>
                            <textarea className="size" placeholder={roomTitle} onChange={event => setRoomTitle(event.target.value)} required></textarea>
                            <textarea className="size  secondP" placeholder={cap} onChange={event => setCap(event.target.value)} required></textarea>


                            <div className='rowWWWW'>
                            <label className="col-6 firstForm">Require Member</label>
                            <label className="col-6 secondForm">Room Image</label>
                            <textarea className="size" placeholder={minAt} onChange={event => setMinAt(event.target.value)} required></textarea>
                            
                            <input type="file" className="col-6 size form-control thirdP" id="customFile" onChange={(e) => {uploadImage(e);}}></input>
                            </div>
                            
                            <label className="col-6 firstForm">Min Duration</label>
                            <label className="col-6 secondForm">Max Duration</label>
                            <MinDurationSelect className="size zero" oldValue={minD}/>
                            <MaxDurationSelect className="size secondP" oldValue={maxD}/>

                            <label className="col-6 firstForm">Start Time</label>
                            <label className="col-6 secondForm">End Time</label>
                            <StartTimeSelect className="size zero" oldValue={dataStartTime}/>
                            <EndTimeSelect className="size secondP" oldValue={dataEndTime}/>
                        </form>
                    </div>

                    <div className="footer">
                        <button className="btn btn-danger btn-sm" onClick={onClick} type="button">Modify</button>
                        <button className="btn btn-primary btn-sm" type="button" onClick={() => closeModal(false)} id="cancelLogOut">Cancel</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModifyRoom;