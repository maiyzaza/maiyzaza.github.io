
// import axios from 'axios';
// import React, { useEffect, useState } from "react";
// import StartTime from '../components/startTime'
// import EndTime from '../components/endTime'
// import { useHistory } from 'react-router-dom';
// import MinDuration from '../components/minDuration'
// import MaxDuration from '../components/maxDuration'



// function ModifyRoom({closeModal,roomId}) {
//     let history = useHistory();

//     // const [alert, setAlert] = useState("");

//     const [dataRoom,setDataRoom] = useState({})

//     const [cap, setCap] = useState('');
//     const [minAt, setMinAt] = useState('');
//     const [minD, setMinD] = useState("");
//     const [maxD, setMaxD] = useState("");
//     const [oldImg,setOldImg] = useState([]);
//     const [dataStartTime,setDataStartTime] = useState('')
//     const [dataEndTime,setDataEndTime] = useState('')
//     const [baseImage, setBaseImage] = useState("");

//     const access_token = sessionStorage.getItem("token")

//     const [newMinD, setNewMinD] = useState("");
//     const [newMaxD, setNewMaxD] = useState("");
//     const [newDataStartTime,setNewDataStartTime] = useState('')
//     const [newDataEndTime,setNewDataEndTime] = useState('')

    
<<<<<<< HEAD
//     const options=[
//         { value: 30, label: '30 min.' },
//         { value: 60, label: '1 hrs.' },
//         { value: 90, label: '1 hrs. 30 min.' }
//       ]

//     const options1=[
//         { value: 60, label: '1 hrs.' },
//         { value: 90, label: '1 hrs. 30 min.' },
//         { value: 120, label: '2 hrs.' },
//         { value: 150, label: '2 hrs. 30 min.' },
//         { value: 180, label: '3 hrs.' }
//       ]

//       const optionsStartTime=[
//         { value: '09:00:00', label: '09:00' },
//         { value: '09:30:00', label: '09:30' },
//         { value: '10:00:00', label: '10:00' }
//       ]

//       const optionsEndTime=[
//         { value: '15:30:00', label: '15:30' },
//         { value: '16:00:00', label: '16:00' }
//       ]

//       function onChangeInput(value){
//         setNewMinD(value)
//       }

//       function onChangeInput1(value){
//         setNewMaxD(value)
//       }

//       function onChangeInputStartTime(value){
//         setNewDataStartTime(value)
//       }
=======
    const options=[
        { value: 30, label: '30 min.' },
        { value: 60, label: '1 hrs.' },
        { value: 90, label: '1 hrs. 30 min.' }
      ]

    const options1=[
        { value: 60, label: '1 hrs.' },
        { value: 90, label: '1 hrs. 30 min.' },
        { value: 120, label: '2 hrs.' },
        { value: 150, label: '2 hrs. 30 min.' },
        { value: 180, label: '3 hrs.' }
      ]

      const optionsStartTime=[
        { value: "09:00", label: "09:00" },
                { value: "09:30", label: "09:30" },
                { value: "10:00", label: "10:00" },
                { value: "10:30", label: "10:30" },
                { value: "11:00", label: "11:00" },
                { value: "11:30", label: "11:30" },
                { value: "12:00", label: "12:00" },
                { value: "12:30", label: "12:30" },
                { value: "13:00", label: "13:00" },
                { value: "13:30", label: "13:30" },
                { value: "14:00", label: "14:00" },
                { value: "14:30", label: "14:30" },
                { value: "15:00", label: "15:00" },
                { value: "15:30", label: "15:30" },
                { value: "16:00", label: "16:00" },
                { value: "16:30", label: "16:30" },
                { value: "17:00", label: "17:00" }
      ]

      const optionsEndTime=[
        { value: "09:00", label: "09:00" },
                { value: "09:30", label: "09:30" },
                { value: "10:00", label: "10:00" },
                { value: "10:30", label: "10:30" },
                { value: "11:00", label: "11:00" },
                { value: "11:30", label: "11:30" },
                { value: "12:00", label: "12:00" },
                { value: "12:30", label: "12:30" },
                { value: "13:00", label: "13:00" },
                { value: "13:30", label: "13:30" },
                { value: "14:00", label: "14:00" },
                { value: "14:30", label: "14:30" },
                { value: "15:00", label: "15:00" },
                { value: "15:30", label: "15:30" },
                { value: "16:00", label: "16:00" },
                { value: "16:30", label: "16:30" },
                { value: "17:00", label: "17:00" }
      ]

      function onChangeInput(value){
        // console.log("value select",value);
        setNewMinD(value)
      }

      function onChangeInput1(value){
        // console.log("value select start",value);
        setNewMaxD(value)
      }

      function onChangeInputStartTime(value){
        // console.log("value select end",value);
        setNewDataStartTime(value)
      }
>>>>>>> develop
      
//       function onChangeInputEndTime(value){
//         setNewDataEndTime(value)
//       }

//     const uploadImage = async (e) => {
//         const file = e.target.files[0];
//         const base64 = await convertBase64(file);
//         setBaseImage(base64);
//       };
    
    
    
//       const convertBase64 = (file) => {
//         return new Promise((resolve, reject) => {
//           const fileReader = new FileReader();
//           fileReader.readAsDataURL(file);
    
//           fileReader.onload = () => {
//             resolve(fileReader.result);
//           };
    
//           fileReader.onerror = (error) => {
//             reject(error);
//           };
//         });
//       };
    

      

//     const postdata = async () => {
//         try {
//           console.log("room id",roomId)
//          const roomInfo = await axios({
//             url: `https://arr-dev.azurewebsites.net/api/v1/webs/room-infos/${roomId}`,
//             headers: {
//                 'Authorization': 'Bearer ' + access_token
//                 },
//             method: "GET",
//             data: {
//             }
//         })
//         .then((res) => {
//             setDataRoom(res.data.data)
//             setDataStartTime(res.data.data.startTime.slice(0,5))
//             setDataEndTime(res.data.data.endTime.slice(0,5))
//             setCap(res.data.data.capacity)
//             setMinAt(res.data.data.minAttendees)
//             setMinD(res.data.data.minDuaration)
//             setMaxD(res.data.data.maxDuration)
//             setOldImg(res.data.data.roomPictureUrl)
//          });
//         } catch (err) {
//             console.log(err);
//         }
//      };

//      useEffect(() => {
//         postdata();
//    },[]);

//   //  console.log("minD old1",minD)
//   //  console.log("maxD old1",maxD)

//     let a
   
//     if (minD >= 60) {
//         var num = minD;
//         var hours = (num / 60);
//         var rhours = Math.floor(hours);
//         var minutes = (hours - rhours) * 60;
//         var rminutes = Math.round(minutes);
//         if (rminutes == 0) {
//         a = rhours + " hrs."
//         } else {
//         a = rhours + " hrs. " + rminutes + " min."
//         }
//     } else {
//         a = minD+ " min."
//     }

//     let b

//     if (maxD >= 60) {
//         var num = maxD;
//         var hours = (num / 60);
//         var rhours = Math.floor(hours);
//         var minutes = (hours - rhours) * 60;
//         var rminutes = Math.round(minutes);
//         if (rminutes == 0) {
//         b = rhours + " hrs."
//         } else {
//         b = rhours + " hrs. " + rminutes + " min."
//         }
//     } else {
//         b = maxD+ " min."
//     }

//     // console.log("b",b)


//      const postdata1 = async (event) => {
//         event.preventDefault();

//         if (baseImage.length == 0 ) {
//             setBaseImage(oldImg)
//         } 

//         try {

//          await axios({
//             url: "https://arr-dev.azurewebsites.net/api/v1/webs/rooms-modify",
//             headers: {
//                 'Authorization': 'Bearer ' + access_token
//                 },
//             method: "POST",
//             data: {
//                 RoomId: roomId,
//                 RoomCapacity: cap,
//                 RoomPictureUrl: baseImage,
//                 MinAttendee: minAt,
//                 MinDuration: newMinD.value,
//                 MaxDuration: newMaxD.value,
//                 CloseTime: newDataEndTime.value,
//                 OpenTime: newDataStartTime.value
//             }
//         })
//         .then((res) => {
//           console.log("okayy", res.data)
//           if (res.data.message == "Success"){
//             alert("Your room has been modified")
//             history.push("/roomManagement")
//             }

//          });
//         } catch (err) {
//           console.log(err.response)
//             alert("Failed to modify room")
          
//         }
//      };
    
 


//     return(
//         <div>
//             <div className="createRoom-modal ">
//                 <div className="createRoom-modalContainer">
//                     <div className="title">MODIFY ROOM
//                     </div>
                    
//                     <div className="body">
//                         <form className="new-col-12">

                        
                            
//                             <label className="col-6 firstForm" >Room Capacity</label>
//                             <label className="col-6 secondForm">Require Member</label>
//                             <textarea required className="size" value={cap} onChange={event => setCap(event.target.value)}></textarea>
//                             <textarea required className="size secondP" value={minAt} onChange={event => setMinAt(event.target.value)}></textarea>
                            

//                             <label className="col-12 firstForm">Room Image</label>
//                             <img src={oldImg} className="oldImg"></img>
//                             <input required type="file" className="size form-control forthP" id="customFile" onChange={(e) => {uploadImage(e);}}></input>

                            
//                             <label className="col-6 firstForm">Min Duration - Before {a}</label>
//                             <label className="col-6 secondForm">Max Duration - Before {b}</label>
//                             <MinDuration required defaultValue={a} value={a} onChange={onChangeInput} options={options} />
//                             <MaxDuration required defaultValue={b} value={b} onChange={onChangeInput1} options={options1}/>
               

//                             <label className="col-6 firstForm">Start Time {dataStartTime}</label>
//                             <label className="col-6 secondForm">End Time {dataEndTime}</label>
//                             <StartTime required defaultValue={optionsStartTime[0]}  onChange={onChangeInputStartTime} options={optionsStartTime} />
//                             <EndTime required defaultValue={optionsEndTime[0]}  onChange={onChangeInputEndTime} options={optionsEndTime} />
//               </form>

//                     </div>
                    
//                     <div class="password_wrong">
//                     {alert}
//                     </div>

//                     <div className="footer">
//                         <button className="btn btn-danger btn-sm" type="button" onClick={postdata1}>Modify</button>
//                         <button className="btn btn-primary btn-sm" type="button" onClick={() => closeModal(false)} id="cancelLogOut">Cancel</button>
//                     </div>
//                 </div>
                
//             </div>
//         </div>
//     )
// }

// export default ModifyRoom;

import React, { useState } from 'react';
import axios from 'axios';
import SearchSelectBuilding from "./searchSelectBuilding";
import SearchSelectFloor from "./searchSelectFloor";
import MinDurationSelect from './minDurationSelect';
import MaxDurationSelect from './maxDurationSelect';
import StartTimeSelect from './startTimeSelect';
import EndTimeSelect from './endTimeSelect';
import { useHistory } from 'react-router-dom';
// import FailedModal from './createRoomStatus/failedModal';
// import SuccessModal from './createRoomStatus/successModal';



<<<<<<< HEAD
=======

        if (baseImage.length == 0 ) {
            setBaseImage(oldImg)
            setOldImg(oldImg)
            
        } 
>>>>>>> develop



function CreateRoom({closeModal}) {

    const [roomTitle, setRoomTitle] = useState('');
    const [roomCapacity, setCapacity] = useState('');
    const [requireMember, setRequireMember] = useState('');
    const [data, setData] = useState(false);
    const [baseImage, setBaseImage] = useState("");
    const access_token = sessionStorage.getItem("token")
    

    let history = useHistory();

    const [openModal, setOpenModal] = useState(false);
    const [openModal1, setOpenModal1] = useState(false);

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
<<<<<<< HEAD
            console.log("okay", res.data)
            if (res.data.message == "Success") {
                alert("Your room has been created")
                window.sessionStorage.setItem("building", null)
                window.sessionStorage.setItem("floor", null)
                window.sessionStorage.setItem("minDuration", null)
                window.sessionStorage.setItem("maxDuration", null)
                window.sessionStorage.setItem("startTime", null)
                window.sessionStorage.setItem("endTime", null)
                history.push("/roomManagement")
            }
            
        })
        .catch((err) => {
            console.log(err.response)
            alert("Failed to create room")
        });
=======
          console.log("okayy", res.data)
          // if (res.data.message == "Success"){
            alert("Your room has been modified")
            let path = `/roomManagement`
            history.push(path)
            window.location.reload()

            // }
>>>>>>> develop

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