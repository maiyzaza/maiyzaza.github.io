import React from "react";
import { useHistory } from 'react-router-dom';

function SuccessModal({closeModal}) {

    const history = useHistory();
    
    const goToReservationManagement = () => {
        let path = `/reservationManagement`
        history.push(path)
    }


    return(
        <div>
            <div className="logout-modal">
                <div className="logout-modalContainer">
                    <button id='close' onClick={() => {closeModal(false); goToReservationManagement()}}>close</button>
                    <div className="title">SIGN OUT</div>
                    <div className="body">Are you sure you want to sign out?</div>
                </div>
                
            </div>
        </div>
    )
}

export default SuccessModal