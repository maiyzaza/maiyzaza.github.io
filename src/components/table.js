import React from "react";
import { MDBTable, MDBTableBody, MDBTableHead } from 'mdbreact';
// import Table from "@material-ui/core/Table";
// import TableBody from "@material-ui/core/TableBody";
// import TableCell from "@material-ui/core/TableCell";
// import TableHead from "@material-ui/core/TableHead";
// import TableRow from "@material-ui/core/TableRow";
// import Paper from "@material-ui/core/Paper";
// import rows from "./rowsData";

// export default () => (
//     <div>
//       <Paper class="myTable">
//         <Table >
//           <TableHead>
//             <TableRow>
//               <TableCell class="myHeadTable" numeric>#</TableCell>
//               <TableCell class="myHeadTable" >Date</TableCell>
//               <TableCell class="myHeadTable" >Start Time</TableCell>
//               <TableCell class="myHeadTable" >End Time</TableCell>
//               <TableCell class="myHeadTable" >Room</TableCell>
//               <TableCell class="myHeadTable" >Status</TableCell>
//               <TableCell class="myHeadTable" >Reserved By</TableCell>
//               <TableCell class="myHeadTable" >info</TableCell>
//             </TableRow>
//           </TableHead>
//           <TableBody>
//             {rows.map(({ id, refID, date, startTime, endTime, room, status, reservedBy, info }) => (
//               <TableRow style={{fontfamily: 'Bariol Regular'}} key={id}>
//                 <TableCell style={{fontfamily: 'Bariol Regular'}} numeric>{id}</TableCell>
//                 <TableCell component="th" scope="row">
//                   {refID}
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                   {date}
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                   {startTime}
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                   {endTime}
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                   {room}
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                   {status}
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                   {reservedBy}
//                 </TableCell>
//                 <TableCell component="th" scope="row">
//                   {info}
//                 </TableCell>
//               </TableRow>
//             ))}
//           </TableBody>
//         </Table>
//       </Paper>
//     </div>
// );

const TablePage = (props) => {
const data = {
  columns: [
    {
      label: '#',
      field: 'id',
      sort: 'asc'
    },
    {
      label: 'DATE',
      field: 'heading1',
      sort: 'asc'
    },
    {
      label: 'START TIME',
      field: 'heading2',
      sort: 'asc'
    },
    {
      label: 'END TIME',
      field: 'heading3',
      sort: 'asc'
    },
    {
      label: 'ROOM',
      field: 'heading4',
      sort: 'asc'
    },
    {
      label: 'STATUS',
      field: 'heading5',
      sort: 'asc'
    },
    {
      label: 'RESERVED BY',
      field: 'heading6',
      sort: 'asc'
    },
    {
      label: 'INFO',
      field: 'heading7',
      sort: 'asc'
    }
  ],
  rows: [
    {
      id: 16,
      heading1: '02/12/2020',
      heading2: '09:00',
      heading3: '09:30',
      heading4: 'Swift Room 1',
      heading5: 'Reserved',
      heading6: 'Nutnisa Thongrussamee',
      heading7: <a href="/moreInfo"><i class='bx bx-info-circle'></i></a>
    },
    {
      id: 15,
      heading1: '02/12/2020',
      heading2: '09:00',
      heading3: '09:30',
      heading4: 'Swift Room 1',
      heading5: 'Completed',
      heading6: 'Nutnisa Thongrussamee',
      heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
    },
    {
      id: 14,
      heading1: '02/12/2020',
      heading2: '09:00',
      heading3: '09:30',
      heading4: 'Swift Room 1',
      heading5: 'Failed',
      heading6: 'Nutnisa Thongrussamee',
      heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
    },
    {
      id: 13,
      heading1: '02/12/2020',
      heading2: '09:00',
      heading3: '09:30',
      heading4: 'Swift Room 1',
      heading5: 'Reserved',
      heading6: 'Nutnisa Thongrussamee',
      heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
    },
    {
      id: 12,
      heading1: '02/12/2020',
      heading2: '09:00',
      heading3: '09:30',
      heading4: 'Swift Room 1',
      heading5: 'Reserved',
      heading6: 'Nutnisa Thongrussamee',
      heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
    },
    {
      id: 11,
      heading1: '02/12/2020',
      heading2: '09:00',
      heading3: '09:30',
      heading4: 'Swift Room 1',
      heading5: 'Reserved',
      heading6: 'Nutnisa Thongrussamee',
      heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
    },
    {
      id: 10,
      heading1: '02/12/2020',
      heading2: '09:00',
      heading3: '09:30',
      heading4: 'Swift Room 1',
      heading5: 'Reserved',
      heading6: 'Nutnisa Thongrussamee',
      heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
    },
    {
      id: 9,
      heading1: '02/12/2020',
      heading2: '09:00',
      heading3: '09:30',
      heading4: 'Swift Room 1',
      heading5: 'Reserved',
      heading6: 'Nutnisa Thongrussamee',
      heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
    },
    {
      id: 8,
      heading1: '02/12/2020',
      heading2: '09:00',
      heading3: '09:30',
      heading4: 'Swift Room 1',
      heading5: 'Reserved',
      heading6: 'Nutnisa Thongrussamee',
      heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
    },    {
      id: 7,
      heading1: '02/12/2020',
      heading2: '09:00',
      heading3: '09:30',
      heading4: 'Swift Room 1',
      heading5: 'Reserved',
      heading6: 'Nutnisa Thongrussamee',
      heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
    },
    {
      id: 6,
      heading1: '02/12/2020',
      heading2: '09:00',
      heading3: '09:30',
      heading4: 'Swift Room 1',
      heading5: 'Reserved',
      heading6: 'Nutnisa Thongrussamee',
      heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
    },
    {
      id: 5,
      heading1: '02/12/2020',
      heading2: '09:00',
      heading3: '09:30',
      heading4: 'Swift Room 1',
      heading5: 'Reserved',
      heading6: 'Nutnisa Thongrussamee',
      heading7: <a href="#"><i class='bx bx-info-circle'></i></a>
    }
  ]
};

return (

<div className="myTable table-responsive" >
<MDBTable responsive >
    <MDBTableHead columns={data.columns} />
    <MDBTableBody rows={data.rows} />
</MDBTable>
</div>

);
};

export default TablePage;

