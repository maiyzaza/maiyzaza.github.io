import React, { useState } from 'react';
import axios from 'axios';
import SearchSelectBuilding from "./searchSelectBuilding";
import SearchSelectFloor from "./searchSelectFloor";
import MinDurationSelect from './minDurationSelect';
import MaxDurationSelect from './maxDurationSelect';
import StartTimeSelect from './startTimeSelect';
import EndTimeSelect from './endTimeSelect';



function CreateRoom({closeModal}) {
    const [building, setbuilding] = useState('');
    const [floor, setfloor] = useState('');
    const [data, setData] = useState();
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

    // if (data) {
    //     listFloor = data.map((Floor) => 
    //         <FloorList data={Object.values(Floor)} />
    //     );
    // }


    // const postdata = async () => {
    //     try {
    //      const res = await axios({
    //         url: "https://arr-dev.azurewebsites.net/api/v1/webs/api/v1/webs/rooms-create",
    //         headers: {
    //             'Authorization': 'Bearer ' + access_token
    //             },
    //         method: "POST",
    //         data: {
    //             Campus: null,
    //             Building: "VMS",
    //             Floor: 2,
    //             RoomTitle: "VMS0201",
    //             RoomCapacity: 20,
    //             RoomPictureUrl: "https://cdn.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_1024/https://truelab.info/wp-content/uploads/2020/03/DSC_1945-HDR-1024x683.jpg",
    //             MinAttendee: 3,
    //             MinDuration: 30,
    //             MaxDuration: 180,
    //             CloseTime: "17:00:00",
    //             OpenTime: "09:00:00"
    //         }
    //     })
    //     .then((res) => {
    //         console.log(res);
    
    //      });
    //     } catch (err) {
    //         console.log(err);
    //     }
    //  };

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
                            {/* <textarea className="size" required></textarea>
                            <textarea className="size secondP" required></textarea> */}
                            
                            <label className="col-6 firstForm">Room Title</label>
                            <label className="col-6 secondForm">Room Capacity</label>
                            <textarea className="size" required></textarea>
                            <textarea className="size  secondP" required></textarea>


                            <div className='rowWWWW'>
                            <label className="col-6 firstForm">Require Member</label>
                            <label className="col-6 secondForm">Room Image</label>
                            <textarea className="size" required></textarea>
                            
                            <input className="col-6 size form-control thirdP" type="file"  id="customFile"></input>
                            </div>
                            
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
                        <button className="btn btn-danger btn-sm" type="button">Create</button>
                        <button className="btn btn-primary btn-sm" type="button" onClick={() => closeModal(false)} id="cancelLogOut">Cancel</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default CreateRoom;