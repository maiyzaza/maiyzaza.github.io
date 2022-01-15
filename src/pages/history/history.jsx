import '../../App.css';
import Table from '../../components/table'
import cardImg from '../../assets/cardImg.png';
import StatusDropDown from '../../components/statusDropDown';
import DateDropDown from '../../components/dateDropDown';
import axios from 'axios';
import React, { useEffect, useState } from "react";
import { useHistory } from 'react-router'


 
function History(props) {

  const [items, setItems] = useState([]);
  const [inputValue, setValue] = useState('');
  const [selectedValue, setSelectedValue] = useState(null);

    // handle input change event
  const handleInputChange = value => {
    setValue(value);
  };

  // handle selection
  const handleChange = value => {
    setSelectedValue(value);
  }

  // const fetchData = () => {
  //   return  axios.get('/users?page=1').then(result => {
  //     const res =  result.data.data;
  //     return res;
  //   });
  // }

  const [isActive, setActive] = useState(false);

  useEffect(() => {
    props.onCollapse(!isActive);
  }, [!isActive]);

  let history = useHistory();

  const access_token = sessionStorage.getItem("token")
  
  if(!access_token){
    history.push("/")
    window.location.reload("/");
  }

  return (
    <div> 
    {/* {/* ใส่ Div เพื่อให้ใส่ component ได้ /} */}
      <body >      
        <div class="card">
          <img class="card-img-top" src={cardImg}></img>
            <div class="card-img-overlay">
              <div className={props.isActive ? "headContent" : "headContent active"}>
                <h4 class="card-title ">HISTORY</h4>
              </div>
              <p class="content card-text">Suvarnabhumi Campus</p>
              {/* <div className='customSearchBar'>
                <input type='text' placeholder='Search Room'></input>
              </div> */}
            </div>
        </div>
        
        <h1 class="search_container_date"> Date </h1>
        <h1 class="search_container_status"> Status </h1>
        <div class="date-drop-down">
          <DateDropDown />
        </div>
        <StatusDropDown />
        <button class="search_button">Search</button>
        
    
        
        {/* <button className="historyFooterButton"></button> */}

        <Table />
        
      </body>
    </div>
  );
}
 
export default History;