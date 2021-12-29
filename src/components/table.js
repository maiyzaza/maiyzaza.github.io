import React, { useEffect, useState } from "react";
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import MoreInfo from "../pages/history/moreInfo";
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
// import { useHistory } from 'react-router'



const TablePage = (props) =>  {
  // let history = useHistory();


  const [dataRow,setDataRow] = useState([])
  const [itemRow,setItemRow] = useState([])
  
  // const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiI2MjEzNjM5IiwiZXhwIjoxNjQwODYwODY3LCJpc3MiOiJUb2tlbkF1dGhEZW1vIiwiYXVkIjoiVG9rZW5BdXRoRGVtbyJ9.NPjUTgmVrz3NGiwPmx3vvvGMrN2boOVOARpQqQbJiVE"
  const access_token = sessionStorage.getItem("token")
  // console.log("access_token",access_token)
  // if(!access_token){
  //   history.push("/")
  //   window.location.reload("/");
  // }


  const postdata = async () => {
      try {
       const res = await axios({
          url: "https://arr-dev.azurewebsites.net/api/v1/webs/histories/",
          headers: {
              'Authorization': 'Bearer ' + access_token
              },
          method: "POST",
          data: {
              RoomName : null,
              Status : null,
              Date : null,
              Page : 1
          }
      })
      .then((res) => {
          console.log(res.data.data.items);
          const itemData = res.data.data.items
          setDataRow(itemData)
       });
      } catch (err) {
          console.log(err);
      }
   };

  useEffect(() => {
    postdata();
  },[]);

  useEffect(() => {
    let dataArray = JSON.parse(JSON.stringify(dataRow))
    var reservationData = []
    dataArray.map((item,index)=>{
      item.date = (
         <div>
          {new Date(item.startTime).toLocaleDateString("en-GB")}
        </div>
      );

      item.startTime = (
        <div>
          {new Date(item.startTime).toLocaleTimeString(undefined, {
              hour:   '2-digit',
              minute: '2-digit',
          })}
        </div>
      );

      item.endTime = (
        <div>
          {new Date(item.endTime).toLocaleTimeString(undefined, {
              hour:   '2-digit',
              minute: '2-digit',
          })}
        </div>
      );

      item.status = (
        <div>
          { 
           item.status.split(" ")[0]
          }
        </div>
       )

       const booking_id = item.bookingId;
       const room_id = item.roomId;

      // item.reservedBy = (
      //   <div style={{texttransform: "capitalize"}}>
      //     console.log({item.reservedBy})
      //   </div>
      // )

      item.info = (
        // bookingId={item.bookingId}
        // <Link to={`/moreinfo/${item.bookingId}`}   >
        <Link to={{pathname:`/moreinfo/${booking_id}`,  state:{ booking_id,room_id } } } > 
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div
            className="bx bx-info-circle"
            style={{
              cursor: "pointer",
              color: "black",
              fontSize: "1.1rem",
            }}
              // onClick={() => deletePost(posts[index].id)}
              // onClick={() => Post(posts[index].id)}
          > 
          {/* {item.bookingId} */}
          {/* <Link to={/singlepost/${_id}} className="link" /> */}
              {/* Delete */}
          </div>
        </div>
       </Link>
      );
        
     reservationData.push(item)
    })

      setItemRow(reservationData)
      
    },[dataRow]);

  const data = {
    columns: [
      {
        label: 'ID',
        field: 'bookingId',
        sort: 'asc',
        
      },
      {
        label: 'DATE',
        field: 'date',
        sort: 'asc'
      },
      {
        label: 'START TIME',
        field: 'startTime',
        sort: 'acs'
      },
      {
        label: 'END TIME',
        field: 'endTime',
        sort: 'asc'
      },
      {
        label: 'ROOM',
        field: 'room',
        sort: 'asc'
      },
      {
        label: 'STATUS',
        field: 'status',
        sort: 'asc'
      },
      {
        label: 'RESERVED BY',
        field: 'reservedBy',
        sort: 'asc'
      },
      {
        label: 'INFO',
        field: 'info',
        sort: 'asc'
      },
  ],
  rows: itemRow
  } 
      if (!sessionStorage.getItem("token")) {

        return <Redirect to="/" />
      } 

  return (
    <div className="myTable">
      <MDBDataTable
        striped
        bordered
        small
        
        searching={false}
        // sortable={false}
        order={["bookingId", "decs"]}
        displayEntries={false}
        data={data}
      />
    </div>

  );
}


export default TablePage;