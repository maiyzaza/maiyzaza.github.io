
import axios from 'axios';
import React, { useEffect, useState } from "react";
import MinDurationSelect from './minDurationSelect';
import MaxDurationSelect from './maxDurationSelect';
import StartTimeSelect from './startTimeSelect';
import EndTimeSelect from './endTimeSelect';


function ModifyRoom({closeModal}) {

    const [dataRoom,setDataRoom] = useState({})
    const [dataStartTime,setDataStartTime] = useState('')
    const [dataEndTime,setDataEndTime] = useState('')
    const access_token = sessionStorage.getItem("token")
    

    const postdata = async () => {
        try {
         const roomInfo = await axios({
            url: `https://arr-dev.azurewebsites.net/api/v1/webs/room-infos/3`,
            headers: {
                'Authorization': 'Bearer ' + access_token
                },
            method: "GET",
            data: {
            }
        })
        .then((res) => {
            console.log(res.data.data);
            setDataRoom(res.data.data)
            setDataStartTime(res.data.data.startTime.slice(0,5))
            setDataEndTime(res.data.data.endTime.slice(0,5))
            
         });
        } catch (err) {
            console.log(err);
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
                            
                            <label className="col-6 firstForm" >Room Capacity</label>
                            <label className="col-6 secondForm">Require Member</label>
                            <textarea className="size" required value={dataRoom.capacity} onChange={setDataRoom}></textarea>
                            <textarea className="size secondP" required value={dataRoom.minAttendees} onChange={setDataRoom}></textarea>
                            

                            <label className="col-12 firstForm">Room Image</label>
                        
                            <input className="size form-control forthP" type="file"  id="customFile"></input>
                            
                            <label className="col-6 firstForm">Min Duration</label>
                            <label className="col-6 secondForm">Max Duration</label>
                            <MinDurationSelect className="size zero" required />
                            <MaxDurationSelect className="size secondP" required />
                            {/* <textarea className="size"></textarea>
                            <textarea className="size  secondP"></textarea> */}

                            <label className="col-6 firstForm">Start Time</label>
                            <label className="col-6 secondForm">End Time</label>
                            <StartTimeSelect className="size zero" required />
                            <EndTimeSelect className="size secondP" required />
                            {/* <textarea className="size"></textarea>
                            <textarea className="size  secondP"></textarea> */}

                            {/* <label className="col-6 firstForm">Min Duration</label>
                            <label className="col-6 secondForm">Max Duration</label>
                            <select className="size" value={dataRoom.minDuaration} onChange={setDataRoom}></select>
                            <select className="size  secondP" value={dataRoom.maxDuration} onChange={setDataRoom}></select>

                            <label className="col-6 firstForm">Start Time</label>
                            <label className="col-6 secondForm">End Time</label>
                            <select className="size" value={dataStartTime} onChange={setDataStartTime}></select>
                            <select className="size  secondP" value={dataEndTime} onChange={setDataEndTime}></select> */}


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

                    <div className="footer">
                        <button className="btn btn-danger btn-sm" type="button">Modify</button>
                        <button className="btn btn-primary btn-sm" type="button" onClick={() => closeModal(false)} id="cancelLogOut">Cancel</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default ModifyRoom;