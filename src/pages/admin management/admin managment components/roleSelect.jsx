import React, { useState, useEffect } from 'react';
import Select from 'react-select'
import axios from 'axios';

const customStylesBuilding = {
  control: (base, state) => ({
    ...base,
    fontFamily: 'Bariol Regular',
    boxShadow: 0,
    // left: "21.55rem",
    top: "0rem",
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
    // left: "22.5rem",
    top: "1.9rem",
    boxShadow: 'none',
    borderRadius: 5,
    fontSize: "0.8rem",
    width: "14rem"
    
  }),

  menuList: styles => ({
    ...styles,
    height: "9rem",
  }),

  singleValue: styles => ({
    ...styles,
    color: 'rgba(0, 0, 0)',
    fontSize: "0.8rem"
  })
}

function RoleSelect({onChange, oldValue}) {

    const access_token = sessionStorage.getItem("token")
    const [data, setData] = useState(null)

    const postdata = async () => {
        try {
          const roomInfo = await axios({
            url: `https://arr-dev.azurewebsites.net/api/v1/webs/role`,
            headers: {
                'Authorization': 'Bearer ' + access_token
                },
            method: "GET",
            data: {
            }
        })
        .then((res) => {
            console.log(res.data.data)
            setData(res.data.data)
        });
        } catch (err) {
          console.log(err);
        }
      };
      useEffect(() => {
        postdata();
      },[]);

    let options = []
    if (data !== null) {
        for (var i = 0; i < data.length; i++) {
            options.push( { value: data[i].roleId, label: data[i].roleName } )
        }
    }

    let defaultValue = "Not Specified"
    if (oldValue !== null) {defaultValue = oldValue}

    return (
        <Select
        options={options}
        placeholder={defaultValue}
        styles={customStylesBuilding}
        onChange={onChange}
        />
    );
}

export default RoleSelect ;

