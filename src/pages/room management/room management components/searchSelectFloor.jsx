import React, { Component } from 'react'
import Select from 'react-select'
import '../../../App.css';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' }
]

const customStylesFloor = {
  control: (base, state) => ({
    ...base,
    fontFamily: 'Bariol Regular',
    boxShadow: 0,
    left: "34rem",
    top: "-2.365rem",
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
    color: 'blue',
    fontFamily: 'Times New Roman, Times, Serif',
  }),

  menu: styles => ({
    ...styles,
    // marginTop: "20rem",
    left: "35rem",
    top: "-0.5rem",
    boxShadow: 'none',
    borderRadius: 0,
    fontSize: "0.7rem",
  }),

  singleValue: styles => ({
    ...styles,
    color: 'rgba(255, 80, 86)',
  }),
}

const MyComponent = () => (
  <Select
    className="col-2"
    options={options}
    placeholder="Not Specified"
    styles={customStylesFloor}
  />
)

export default MyComponent;

