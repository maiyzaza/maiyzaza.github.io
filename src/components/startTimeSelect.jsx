import React, { useEffect, useState } from 'react'
import Select from 'react-select'

import axios from 'axios';

const customStylesBuilding = {
  control: (base, state) => ({
    ...base,
    fontFamily: 'Bariol Regular',
    boxShadow: 0,
    // left: "21.55rem",
    top: "0rem",
    width: "10rem",
    cursor: 'text',
    borderRadius: 5,
    fontSize: "0.8rem",
    width: "14rem",
    borderColor: "#EAEAEA"
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
    // left: "22.5rem",
    top: "1.9rem",
    boxShadow: 'none',
    borderRadius: 5,
    fontSize: "0.8rem",
    width: "14rem"
  }),

  singleValue: styles => ({
    ...styles,
    color: 'rgba(0, 0, 0)',
    fontSize: "0.8rem"
  })
}

function StartTimeSelect() {


  let options = [{ value: "09:00", label: "09:00" }
                ]


  const onChange = (e) => {
    window.sessionStorage.setItem("startTime", e.value)
  }


  return (
    <Select
      options={options}
      placeholder="Not Specified"
      styles={customStylesBuilding}
      onChange={onChange}
    />
  );
}

export default StartTimeSelect ;

