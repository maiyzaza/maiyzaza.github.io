import React, { useEffect, useState } from 'react'
import Select from 'react-select'

import axios from 'axios';

const customStylesStatus = {
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
      // backgroundColor: isFocused ? 'white' : 'white',
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

function MyComponent(oldValue) {

  const [data, setData] = useState([]);
  let options = [{ value: "Not Specified", label: "Not Specified" }]

  const postdata = async () => {

    const access_token = sessionStorage.getItem("token")

    axios({
      url: "https://arr-dev.azurewebsites.net/api/v1/webs/status",
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
    options.push({ value: e.id, label: e.statusName })
  });

  const onChange = (e) => {
    console.log(e)
    window.sessionStorage.setItem("status", e.label)
  }

  let defaultValue = "Not Specified"
  
  if (oldValue.oldValue !== null){
    if (oldValue !== null) {
      defaultValue = `${oldValue.oldValue}`
    }
  }
  
  return (
    <Select
      className="col-2"
      options={options}
      placeholder={defaultValue}
      styles={customStylesStatus}
      onChange={onChange}
    />
  );
}

export default MyComponent;

