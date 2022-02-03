import React from 'react'
import Select from 'react-select'

const customStylesFloor = {
  control: (base, state) => ({
    ...base,
    fontFamily: 'Bariol Regular',
    boxShadow: 0,
    left: "16rem",
    paddingBottom: "0rem",
    top: "-1.61rem",
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
    left: "16rem",
    top: "-0.4rem",
    boxShadow: 'none',
    borderRadius: 5,
    fontSize: "0.8rem",
    width: "14rem",
    borderColor: "#EAEAEA"
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

function EndTimeSelect(oldValue) {

  let options = [{ value: "09:00", label: "09:00" },
                { value: "09:30", label: "09:30" },
                { value: "10:00", label: "10:00" },
                { value: "10:30", label: "10:30" },
                { value: "11:00", label: "11:00" },
                { value: "11:30", label: "11:30" },
                { value: "12:00", label: "12:00" },
                { value: "12:30", label: "12:30" },
                { value: "13:00", label: "13:00" },
                { value: "13:30", label: "13:30" },
                { value: "14:00", label: "14:00" },
                { value: "14:30", label: "14:30" },
                { value: "15:00", label: "15:00" },
                { value: "15:30", label: "15:30" },
                { value: "16:00", label: "16:00" },
                { value: "16:30", label: "16:30" },
                { value: "17:00", label: "17:00" },
                { value: "17:30", label: "17:30" },
                { value: "18:00", label: "18:00" },
                { value: "18:30", label: "18:30" },
                { value: "19:00", label: "19:00" },
                { value: "19:30", label: "19:30" },
                { value: "20:00", label: "20:00" },
                { value: "20:30", label: "20:30" },
                { value: "21:00", label: "21:00" },
                { value: "21:30", label: "21:30" },
                { value: "22:00", label: "22:00" },
                { value: "22:30", label: "22:30" },
                { value: "23:00", label: "23:00" },
                { value: "23:30", label: "23:30" },
                { value: "24:00", label: "24:00" }]
        
  const onChange = (e) => {
    window.sessionStorage.setItem("endTime", e.value)
  }

  let defaultValue = "Not Specified"
  if (oldValue !== null) {
    defaultValue = `${oldValue.oldValue}`
  }

  return (
    <Select
      className="positionFloorSelect"
      options={options}
      placeholder={defaultValue}
      styles={customStylesFloor}
      onChange={onChange}
    />
  );
}

export default EndTimeSelect;

