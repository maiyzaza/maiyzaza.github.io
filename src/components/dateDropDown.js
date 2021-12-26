


import React, { useEffect, useState } from "react";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

  
const DateDropDown = () => {
  const [startDate, setStartDate] = useState(null);
  return (
    <DatePicker
      selected={startDate}
      onChange={(date) => setStartDate(date)}
      disabledKeyboardNavigation
      dateFormat="dd/MM/yyyy" 
      placeholderText="dd/mm/yyyy"
    />
  );
};
  

export default DateDropDown;