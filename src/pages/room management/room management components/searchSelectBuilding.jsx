import React, { Component } from 'react'
import Select from 'react-select'
import '../../../App.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const customStylesBuilding = {
  control: (base, state) => ({
    ...base,
    fontFamily: 'Bariol Regular',
    boxShadow: 0,
    left: "21.55rem",
    top: "0rem",
    width: "10rem",
    cursor: 'text',
    borderRadius: 5,
    fontSize: "0.7rem",
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
    left: "22.5rem",
    top: "1.9rem",
    boxShadow: 'none',
    borderRadius: 5,
    fontSize: "0.7rem",
  }),

  singleValue: styles => ({
    ...styles,
    color: 'rgba(0, 0, 0)',
  }),
}

const MyComponent = () => (
  <Select
    className="col-2"
    options={options}
    placeholder="Not Specified"
    styles={customStylesBuilding}
  />
)

export default MyComponent;

