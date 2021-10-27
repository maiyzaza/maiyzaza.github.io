import '../../App.css';
import cardImg from '../../assets/cardImg.png';

function MoreInfo() {


  return (
    <div>
      <body> 
        <div class="card">
          <img class="card-img-top" src={cardImg}></img>
            <div class="card-img-overlay">
              <h4 class="headContent card-title">MORE INFORMATION</h4>
              <p class="content card-text">Reference ID: 020820I123456</p>
            </div>
        </div>
        
        <div class="myCard card">
          <div class="card-body">
            <p class="card-text boldB" style={{fontSize: "1rem"}}>Reservation</p>
            <hr style={{height: "0.03rem", color: "#D7D5DB"}}/>
            <p class="card-text regularB">Date</p>
          </div>
        </div>

        <div class="myCard1 card">
          <div class="card-body">
            <p class="card-text boldB" style={{fontSize: "1rem"}}>Swift Room 1</p>
            <hr style={{height: "0.03rem", color: "#D7D5DB"}}/>
            <p class="card-text regularB">Date</p>
          </div>
        </div>

      </body>
    </div>
  );
}
 
export default MoreInfo;