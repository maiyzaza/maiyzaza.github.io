import React, { useEffect, useState } from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
import axios from 'axios';
import BootstrapTable from 'react-bootstrap-table-next';
import paginationFactory from "react-bootstrap-table2-paginator";
import Button from 'react-bootstrap/Button';
import * as ReactBootstrap from "react-bootstrap";

const TablePage = (props) =>  {

  const [data, setDat] = useState([]);
  const [loading, setLoading] = useState(false);
  const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiI2MjEzNjM5IiwiZXhwIjoxNjQwODYwODY3LCJpc3MiOiJUb2tlbkF1dGhEZW1vIiwiYXVkIjoiVG9rZW5BdXRoRGVtbyJ9.NPjUTgmVrz3NGiwPmx3vvvGMrN2boOVOARpQqQbJiVE"

  const postdata = async () => {
      try {
       const data1 = await axios({
          url: "https://arr-dev.azurewebsites.net/api/v1/webs/histories/",
          headers: {
              'Authorization': 'Bearer ' + access_token
              },
          method: "POST",
          data: {
              Location : null,
              Room : null,
              Month : null
          }
      })
      .then((data1) => {
          console.log(data1);
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
        
    </div>

  );
}

// const TablePage = (props) => {
// const data = {
//   columns: [
//     {
//       label: '#',
//       field: 'id',
//       sort: 'asc'
//     },
//     {
//       label: 'DATE',
//       field: 'heading1',
//       sort: 'asc'
//     },
//     {
//       label: 'START TIME',
//       field: 'heading2',
//       sort: 'asc'
//     },
//     {
//       label: 'END TIME',
//       field: 'heading3',
//       sort: 'asc'
//     },
//     {
//       label: 'ROOM',
//       field: 'heading4',
//       sort: 'asc'
//     },
//     {
//       label: 'STATUS',
//       field: 'heading5',
//       sort: 'asc'
//     },
//     {
//       label: 'RESERVED BY',
//       field: 'heading6',
//       sort: 'asc'
//     },
//     {
//       label: 'INFO',
//       field: 'heading7',
//       sort: 'asc'
//     }
//   ],
//   rows: [
//     {
//       id: 16,
//       heading1: '02/12/2020',
//       heading2: '09:00',
//       heading3: '09:30',
//       heading4: 'Swift Room 1',
//       heading5: 'Reserved',
//       heading6: 'Nutnisa Thongrussamee',
//       heading7: <a href="/moreInfo"><i class='bx bx-info-circle'></i></a>
//     },
//     {
//       id: 15,
//       heading1: '02/12/2020',
//       heading2: '09:00',
//       heading3: '09:30',
//       heading4: 'Swift Room 1',
//       heading5: 'Completed',
//       heading6: 'Nutnisa Thongrussamee',
//       heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
//     },
//     {
//       id: 14,
//       heading1: '02/12/2020',
//       heading2: '09:00',
//       heading3: '09:30',
//       heading4: 'Swift Room 1',
//       heading5: 'Failed',
//       heading6: 'Nutnisa Thongrussamee',
//       heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
//     },
//     {
//       id: 13,
//       heading1: '02/12/2020',
//       heading2: '09:00',
//       heading3: '09:30',
//       heading4: 'Swift Room 1',
//       heading5: 'Reserved',
//       heading6: 'Nutnisa Thongrussamee',
//       heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
//     },
//     {
//       id: 12,
//       heading1: '02/12/2020',
//       heading2: '09:00',
//       heading3: '09:30',
//       heading4: 'Swift Room 1',
//       heading5: 'Reserved',
//       heading6: 'Nutnisa Thongrussamee',
//       heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
//     },
//     {
//       id: 11,
//       heading1: '02/12/2020',
//       heading2: '09:00',
//       heading3: '09:30',
//       heading4: 'Swift Room 1',
//       heading5: 'Reserved',
//       heading6: 'Nutnisa Thongrussamee',
//       heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
//     },
//     {
//       id: 10,
//       heading1: '02/12/2020',
//       heading2: '09:00',
//       heading3: '09:30',
//       heading4: 'Swift Room 1',
//       heading5: 'Reserved',
//       heading6: 'Nutnisa Thongrussamee',
//       heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
//     },
//     {
//       id: 9,
//       heading1: '02/12/2020',
//       heading2: '09:00',
//       heading3: '09:30',
//       heading4: 'Swift Room 1',
//       heading5: 'Reserved',
//       heading6: 'Nutnisa Thongrussamee',
//       heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
//     },
//     {
//       id: 8,
//       heading1: '02/12/2020',
//       heading2: '09:00',
//       heading3: '09:30',
//       heading4: 'Swift Room 1',
//       heading5: 'Reserved',
//       heading6: 'Nutnisa Thongrussamee',
//       heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
//     },    {
//       id: 7,
//       heading1: '02/12/2020',
//       heading2: '09:00',
//       heading3: '09:30',
//       heading4: 'Swift Room 1',
//       heading5: 'Reserved',
//       heading6: 'Nutnisa Thongrussamee',
//       heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
//     },
//     {
//       id: 6,
//       heading1: '02/12/2020',
//       heading2: '09:00',
//       heading3: '09:30',
//       heading4: 'Swift Room 1',
//       heading5: 'Reserved',
//       heading6: 'Nutnisa Thongrussamee',
//       heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
//     },
//     {
//       id: 5,
//       heading1: '02/12/2020',
//       heading2: '09:00',
//       heading3: '09:30',
//       heading4: 'Swift Room 1',
//       heading5: 'Reserved',
//       heading6: 'Nutnisa Thongrussamee',
//       heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
//     }
//   ]
// };

// return (

// <div className="myTable table-responsive" >
// <MDBTable responsive >
//     <MDBTableHead columns={data.columns} />
//     <MDBTableBody rows={data.rows} />
// </MDBTable>
// </div>

// );
// };

export default TablePage;

