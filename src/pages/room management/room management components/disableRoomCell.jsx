import React, { useEffect, useState } from "react";
import axios from 'axios';
import ToggleSwitch from "./ToggleSwitch";
import Switch from "react-switch";

function disableRoomCell({data}) {
    console.log(data)
    
      function handleChange(checked) {
        this.setState({ checked });
      }

    return(
        <div >
            <div class="disable-cell">
                Start Time - End Time hrs. {data} 
            </div>
            {/* <Switch onChange={this.handleChange} checked={this.state.checked} /> */}
            <hr class="hr-disable"/>
        </div>
    )
}

export default disableRoomCell;