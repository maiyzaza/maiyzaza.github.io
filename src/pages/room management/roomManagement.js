import '../../App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import { useHistory } from 'react-router'
 
function RoomManagement() {

  let history = useHistory();

  const access_token = sessionStorage.getItem("token")

  if(!access_token){
    history.push("/")
    window.location.reload("/");
  }

  return (
    <body>
      <h1 class="content">Hello Room</h1>
    </body>
  );
}
 
export default RoomManagement;