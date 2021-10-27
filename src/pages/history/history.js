import '../../App.css';
import Table from '../../components/table'
// import Header from './components/header';

// import { useState } from 'react';
import cardImg from '../../assets/cardImg.png';

 
function History() {


  return (
    <div> 
    {/* {/* ใส่ Div เพื่อให้ใส่ component ได้ /} */}
      <body>
        <div class="card">
          <img class="card-img-top" src={cardImg}></img>
            <div class="card-img-overlay">
              <h4 class="headContent card-title">HISTORY</h4>
              <p class="content card-text">Suvarnabhumi Campus</p>
            </div>
        </div>

        
        <p className="historyFooterContent">Showing 12 of 16 entries</p>
        {/* <button className="historyFooterButton"></button> */}
        
    
        

        <Table />
        
      </body>
    </div>
  );
}
 
export default History;