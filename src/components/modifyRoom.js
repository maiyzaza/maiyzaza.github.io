
import axios from 'axios';
import React, { useEffect, useState } from "react";


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
                        
                            <input className="size form-control-sm forthP" type="file"  id="customFile"></input>
                            
                            
                            <label className="col-6 firstForm">Min Duration</label>
                            <label className="col-6 secondForm">Max Duration</label>
                            <textarea className="size" value={dataRoom.minDuaration} onChange={setDataRoom}></textarea>
                            <textarea className="size  secondP" value={dataRoom.maxDuration} onChange={setDataRoom}></textarea>

                            <label className="col-6 firstForm">Start Time</label>
                            <label className="col-6 secondForm">End Time</label>
                            <textarea className="size" value={dataStartTime} onChange={setDataStartTime}></textarea>
                            <textarea className="size  secondP" value={dataEndTime} onChange={setDataEndTime}></textarea>


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