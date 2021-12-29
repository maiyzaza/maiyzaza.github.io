import React, { useEffect, useState } from "react";
import axios from 'axios';
import { MDBDataTable } from 'mdbreact';
import { Redirect } from 'react-router-dom';

const AdminTable = (props) =>  {

    const access_token = sessionStorage.getItem("token")

    const masterAdmin = async () => {
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
        masterAdmin();
    },[]);

    const admin = async () => {
        try {
        const adminInfo = await axios({
            url: `https://arr-dev.azurewebsites.net/api/v1/webs/admin`,
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
        admin();
    },[]);

  
    
    return (
        <div className="myTable">
          {/* <MDBDataTable
            striped
            bordered
            small
            
            searching={false}
            // sortable={false}
            order={["bookingId", "decs"]}
            displayEntries={false}
            data={data}
          /> */}
        </div>
    
      );
    }
    
    
export default AdminTable;