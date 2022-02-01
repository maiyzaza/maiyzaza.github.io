import Select from 'react-select'
import React, { useEffect, useState } from "react";

  const options = [
    { value: 'completed', label: 'Completed' },
    { value: 'failed', label: 'Failed' },
    { value: 'reserved', label: 'Reserved' }
  ]
  
  const customStylesStatus = {
    control: (base, state) => ({
      ...base,
      fontFamily: 'Bariol Regular',
      boxShadow: 0,
      left: "33rem",
      width: "10rem",
      cursor: 'text',
      borderRadius: 5,
      fontSize: "0.8rem",
      height: "2.4rem",
      top: "-2.4rem"
    }),
  
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        cursor: 'pointer',
        backgroundColor: isFocused ? 'white' : 'white',
        color: isFocused ? 'rgba(255, 80, 86)' : 'black',
        lineHeight: 2,
      }
    },
  
    input: styles => ({
      ...styles,
      color: 'black',
      fontFamily: 'Bariol Regular',
    }),
  
    menu: styles => ({
      ...styles,
      left: "34rem",
      top: "-0.9rem",
      boxShadow: 'none',
      borderRadius: 5,
      fontSize: "0.8rem",
    }),
  
    singleValue: styles => ({
      ...styles,
      color: 'rgba(0, 0, 0)',
    }),
  }

  const onChange = (e) => {
    window.sessionStorage.setItem("status", e.value)
    console.log(e.value)
  }
  
  const StatusDropDown = () => (
    <Select
      className="col-2"
      options={options}
      placeholder="Not Specified"
      styles={customStylesStatus}
      onChane={onChange}
    />
    
  )

export default StatusDropDown;