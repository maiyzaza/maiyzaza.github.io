import React, { useState } from 'react';
import axios from 'axios';
import SearchSelectBuilding from "./searchSelectBuilding";
import SearchSelectFloor from "./searchSelectFloor";
import MinDurationSelect from './minDurationSelect';
import MaxDurationSelect from './maxDurationSelect';
import StartTimeSelect from './startTimeSelect';
import EndTimeSelect from './endTimeSelect';




function CreateRoom({closeModal}) {
    const [dataRoom,setDataRoom] = useState({
                Campus: null,
                Building: "",
                Floor: "",
                RoomTitle: "",
                RoomCapacity: "",
                RoomPictureUrl: "",
                MinAttendee: "",
                MinDuration: "",
                MaxDuration: "",
                CloseTime: "",
                OpenTime: ""
    })
    const [dataStartTime,setDataStartTime] = useState('')
    const [dataEndTime,setDataEndTime] = useState('')
    const [building, setbuilding] = useState('');
    const [floor, setfloor] = useState('');
    const [data, setData] = useState();
    const [baseImage, setBaseImage] = useState("");

    const access_token = sessionStorage.getItem("token")

    const onClick = (event) => {

        setbuilding(window.sessionStorage.getItem("building"))
        setfloor(window.sessionStorage.getItem("floor"))
        if ((building == "Not Specified") || (floor == "Not Specified")) {
            setbuilding(null)
            setfloor(null)
        }
        console.log(building)
        console.log(floor)

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
            setData(res.data.data)
        })
        .catch((res) => {
            // Todo Do Something
        });
    }

    let listFloor = null



//   const uploadImage = async (e) => {
//     const file = e.target.files[0];
//     const base64 = await convertBase64(file);
//     setBaseImage(base64.slice(22));
    
//   };
// //   console.log("url", baseImage)



//   const convertBase64 = (file) => {
//     return new Promise((resolve, reject) => {
//       const fileReader = new FileReader();
//       fileReader.readAsDataURL(file);

//       fileReader.onload = () => {
//         resolve(fileReader.result);
//       };

//       fileReader.onerror = (error) => {
//         reject(error);
//       };
//     });
//   };

    

    // if (data) {
    //     listFloor = data.map((Floor) => 
    //         <FloorList data={Object.values(Floor)} />
    //     );
    // }

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
   
        

    const postdata = async (event) => {
        console.log("aaa")
        event.preventDefault();

  
          
        try {
         const res = await axios({
            url: "https://arr-dev.azurewebsites.net/api/v1/webs/api/v1/webs/rooms-create",
            headers: {
                'Authorization': 'Bearer ' + access_token
                },
            method: "POST",
            data: {
                Campus: null,
                Building: building,
                Floor: floor,
                RoomTitle: dataRoom.roomName,
                RoomCapacity: dataRoom.capacity,
                RoomPictureUrl: baseImage,
                MinAttendee: dataRoom.minDuaration,
                MinDuration: dataRoom.maxDuration,
                MaxDuration: dataRoom.maxDuration,
                CloseTime: dataEndTime,
                OpenTime: dataStartTime
            }
        })
        .then((res) => {
            console.log(res);
    
         });
        } catch (err) {
            console.log(err);
        }
     };

    //  useEffect(() => {
    //     postdata();
    //  },[]);

    return(
        <div>
            <div className="createRoom-modal ">
                <div className="createRoom-modalContainer">
                    <div className="title">CREATE ROOM</div>
                    <div className="body">
                        <form className="new-col-12" onSubmit={postdata}>
                            
                            <label className="col-6 firstForm">Building</label>
                            <label className="col-6 secondForm">Floor</label>
                            <SearchSelectBuilding className="size zero" required value={building} onChange={event => setbuilding(event.target.value)}/>
                            <SearchSelectFloor className="size secondP" required value={floor} onChange={event => setfloor(event.target.value)}/>
                            {/* <textarea className="size" required></textarea>
                            <textarea className="size secondP" required></textarea> */}
                            
                            <label className="col-6 firstForm">Room Title</label>
                            <label className="col-6 secondForm">Room Capacity</label>
                            <textarea className="size" required value={dataRoom.roomName} onChange={event => setDataRoom(event.target.value)}></textarea>
                            <textarea className="size  secondP" required value={dataRoom.RoomCapacity} onChange={event => setDataRoom(event.target.value)}></textarea>


                            <div className='rowWWWW'>
                            <label className="col-6 firstForm">Require Member</label>
                            <label className="col-6 secondForm">Room Image</label>
                            <textarea className="size" required value={dataRoom.MinAttendee} onChange={event => setDataRoom(event.target.value)}></textarea>
                            <input type="file" className="col-6 size form-control thirdP" id="customFile" onChange={(e) => {uploadImage(e);}}></input>
                            </div>
                            
                            <label className="col-6 firstForm">Min Duration</label>
                            <label className="col-6 secondForm">Max Duration</label>
                            <MinDurationSelect className="size zero" required value={dataRoom.minDuaration} onChange={event => setDataRoom(event.target.value)}/>
                            <MaxDurationSelect className="size secondP" required value={dataRoom.maxDuration} onChange={event => setDataRoom(event.target.value)} />
                            {/* <textarea className="size"></textarea>
                            <textarea className="size  secondP"></textarea> */}

                            <label className="col-6 firstForm">Start Time</label>
                            <label className="col-6 secondForm">End Time</label>
                            <StartTimeSelect className="size zero" required value={dataStartTime.slice(0,5)} onChange={event => setDataRoom(event.target.value)}/>
                            <EndTimeSelect className="size secondP" required value={dataEndTime.slice(0,5)} onChange={event => setDataRoom(event.target.value)} />
                            {/* <textarea className="size"></textarea>
                            <textarea className="size  secondP"></textarea> */}

                            <div className="footer">
                                <button className="btn btn-danger btn-sm" type="button" >Create</button>
                                <button className="btn btn-primary btn-sm" type="button" onClick={() => closeModal(false)} id="cancelLogOut">Cancel</button>
                            </div>
                        </form>

                    
                    
                        
                        {/* <p class="regularB col-6">Building</p>
                        <p class="regularB col-6">Floor</p>
                        <div className=" ">
                            <div class="size ">
                                <text></text>
                            </div>
                            <div class="size ">
                                <text></text>
                            </div>
                        </div> */}

                        
                        

                        {/* <p class="thirdP regularB">Room Title</p>
                        
                        <p class="forthP regularB">Room Capacity</p>

                
                            <div class="size createRoomPositionForm2 ">
                                <textarea></textarea>
                            </div>
                            <div class="size createRoomPositionForm3 ">
                                <textarea></textarea>
                            </div>
                      */}
                    

                        

                        
                        
                    </div>

                    
                </div>
                
            </div>
        </div>
    )
}

export default CreateRoom;