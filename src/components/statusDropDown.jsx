import React, { useEffect, useState } from 'react'
import Select from 'react-select'

import axios from 'axios';

const customStylesFloor = {
  control: (base, state) => ({
    ...base,
    fontFamily: 'Bariol Regular',
    boxShadow: 0,
    left: "32.5rem",
    top: "-2.4rem",
    width: "10rem",
    cursor: 'text',
    borderRadius: 5,
    fontSize: "0.8rem",
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
    left: "33.5rem",
    top: "-0.4rem",
    boxShadow: 'none',
    borderRadius: 5,
    fontSize: "0.8rem",
    width: "10rem"
  }),

  singleValue: styles => ({
    ...styles,
    color: 'rgba(0, 0, 0)',
  }),
}

function MyComponent() {

  const [data, setData] = useState([]);
  let options = [{ value: "Not Specified", label: "Not Specified" }]

  const postdata = async () => {

    const access_token = sessionStorage.getItem("token")

    axios({
      url: "https://arr-dev.azurewebsites.net/api/v1/webs/floors",
      headers: {
          'Authorization': "Bearer " + access_token
          },
      method: "GET",
    })
    .then((res) => {
      setData(res.data.data)
    })
  };

  useEffect(() => {
    postdata();
  },[]);

  data.forEach(e => {
    options.push({ value: e.text, label: e.text })
  });

  const onChange = (e) => {
    window.sessionStorage.setItem("floor", e.value)
  }

<<<<<<< HEAD
  const onChange = (e) => {
    window.sessionStorage.setItem("status", e.value)
    console.log(e.value)
  }
  
  const StatusDropDown = () => (
=======
  return (
>>>>>>> develop
    <Select
      className="col-2"
      options={options}
      placeholder="Not Specified"
<<<<<<< HEAD
      styles={customStylesStatus}
      onChane={onChange}
=======
      styles={customStylesFloor}
      onChange={onChange}
>>>>>>> develop
    />
  );
}

export default MyComponent;

