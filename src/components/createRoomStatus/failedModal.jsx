import React from "react";
import { useHistory } from 'react-router-dom';

function FailedModal({closeModal}) {

    const history = useHistory();

    
    const handleCancelClick = () => {
        history.push("/roomManagement")
        window.location.reload()
    }


    return(
        <div>
            <div className="logout-modal">
                <div className="logout-modalContainer">
                    <div className="title">SIGN OUT</div>
                    <div className="body">Are you sure you want to sign out?</div>
                    <div className="footer">
                        <button className="btn btn-danger btn-sm" type="button" onClick={() => closeModal(false)} >OK</button>
                        <button className="btn btn-primary btn-sm" type="button" onClick={() => handleCancelClick()} id="cancelLogOut">Cancel</button>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default FailedModal