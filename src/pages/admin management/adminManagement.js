import '../../App.css';
import cardImg from '../../assets/cardImg.png';
import axios from 'axios';
import React, { useEffect, useState } from "react";
 
function AdminManagement() {
  const access_token = sessionStorage.getItem("token")

  const postdata = async () => {
    try {
     const masterAdminInfo = await axios({
        url: `https://arr-dev.azurewebsites.net/api/v1/webs/master-admin`,
        headers: {
            'Authorization': 'Bearer ' + access_token
            },
        method: "GET",
        data: {
        }
    })
    .then((res) => {
        console.log(res.data.data);
     });
    } catch (err) {
        console.log(err);
    }
 };

  useEffect(() => {
       postdata();
  },[]);


  return (
    <div> 
    {/* {/* ใส่ Div เพื่อให้ใส่ component ได้ /} */}
      <body>      
        <div class="card">
          <img class="card-img-top" src={cardImg}></img>
            <div class="card-img-overlay">
              <h4 class="headContent card-title">ADMIN MANAGEMENT</h4>
              {/* <p class="content card-text">Suvarnabhumi Campus</p>
              <div className='customSearchBar'>
                <input type='text' placeholder='Search Room'></input>
              </div> */}
            </div>
        </div>
      </body>
    </div>
  );
}
 
export default AdminManagement;