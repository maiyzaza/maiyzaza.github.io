import React from "react";
import { useHistory } from 'react-router-dom';
import TableReservationList from './tableReservationList'


function ReservationListModal({closeModal}) {

    const history = useHistory();

    const goToReservationManagement = () => {
        let path = `/reservationManagement`
        history.push(path)
    }

    return(
        <div>
            <div className="reservationList-modal" >
                <div className="reservationList-modalContainer">
                    {/* <button type="button" class="btn-close">
                        <span class="icon-cross"></span>
                        <span class="visually-hidden">Close</span>
                    </button> */}
                    <button id='close' 
                    onClick={() => {closeModal(false); goToReservationManagement()}}>close</button>
                    <div className="title">NEW RESERVATION
                    </div>
                    
                    <div className="body">
                        {/* <Table /> */}
                        <TableReservationList />
                    </div>
                    {/* <div className="footer">
                        <button className="btn btn-primary btn-sm" type="button" onClick={() => closeModal(false)} id="cancelLogOut">Cancel</button>
                    </div> */}
                </div>
                
            </div>
        </div>
    )
}

export default ReservationListModal