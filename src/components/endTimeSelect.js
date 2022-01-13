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
    fontSize: "0.7rem",
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
    fontSize: "0.7rem",
    width: "14rem"
  }),

  singleValue: styles => ({
    ...styles,
    color: 'rgba(0, 0, 0)',
  }),

  singleValue: styles => ({
    ...styles,
    color: 'rgba(0, 0, 0)',
  }),
}

function EndTimeSelect() {



        //   const [data, setData] = useState([]);
          let options = [{ value: "Not Specified", label: "Not Specified" }]
        
        //   const postdata = async () => {
        //     // const access_token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9lbWFpbGFkZHJlc3MiOiI2MjEzNjM5IiwiZXhwIjoxNjQ0MzQxOTIwLCJpc3MiOiJUb2tlbkF1dGhEZW1vIiwiYXVkIjoiVG9rZW5BdXRoRGVtbyJ9.pkA3vaCkD9PWpJ00kCqTjsn0h09qqhT0q_xCY61b5l0"
        //     const access_token = sessionStorage.getItem("token")
            
        //     axios({
        //       url: "https://arr-dev.azurewebsites.net/api/v1/webs/buildings",
        //       headers: {
        //           'Authorization': "Bearer " + access_token
        //           },
        //       method: "GET",
        //     })
        //     .then((res) => {
        //       setData(res.data.data)
        //     })
        //     .catch((res) => {
        //       // Todo Do Something
        //     });
        //   };
        
        //   useEffect(() => {
        //     postdata();
        //   },[]);
        
        //   data.forEach(e => {
        //     options.push({ value: e.text, label: e.text })
        //   });
        
        //   const onChange = (e) => {
        //     window.sessionStorage.setItem("building", e.value)
        //   }
        

  return (
    <Select
      className="positionFloorSelect"
      options={options}
      placeholder="Not Specified"
      styles={customStylesFloor}
    //   onChange={onChange}
    />
  );
}

export default EndTimeSelect;

