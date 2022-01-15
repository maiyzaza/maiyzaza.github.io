import React, { useEffect, useState } from 'react'
import Select from 'react-select'

import axios from 'axios';

const customStylesFloor = {
  control: (base, state) => ({
    ...base,
    fontFamily: 'Bariol Regular',
    boxShadow: 0,
    left: "16rem",
    paddingBottom: "0rem",
    top: "-2.3rem",
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
    left: "16rem",
    top: "-0.4rem",
    boxShadow: 'none',
    borderRadius: 5,
    fontSize: '0.8rem',
    width: "14rem"
  }),

  singleValue: styles => ({
    ...styles,
    color: 'rgba(0, 0, 0)',
    fontSize: '0.8rem'
  })
}

let options = [{ value: 30 , label: "30 min." }]

function listing() {

  const minDuration = window.sessionStorage.getItem("minDuration")

  let data = [{ value: 30 , label: "30 min." },
                { value: 60 , label: "1 hr." },
                { value: 90 , label: "1 hr. 30 min." },
                { value: 120 , label: "2 hrs." },
                { value: 150 , label: "2 hrs. 30 min." },
                { value: 180 , label: "3 hrs." }]

  data.forEach(e => {
    if (e.value > minDuration) {
      console.log(e)
      options.push(e.value, e.label)
    }
  });

  MaxDurationSelect()
}

function MaxDurationSelect() {

  const minDuration = window.sessionStorage.getItem("minDuration")

  let options = [{ value: 30 , label: "30 min." },
                { value: 60 , label: "1 hr." },
                { value: 90 , label: "1 hr. 30 min." },
                { value: 120 , label: "2 hrs." },
                { value: 150 , label: "2 hrs. 30 min." },
                { value: 180 , label: "3 hrs." }]

  const onChange = (e) => {
    window.sessionStorage.setItem("maxDuration", e.value)
  }

  return (
    <Select
      className="positionFloorSelect"
      options={options}
      placeholder="Not Specified"
      styles={customStylesFloor}
      onChange={onChange}
    />
  );
}

export default MaxDurationSelect;

