import './App.css';
import Sidebar from './components/sidebar';
import History from './pages/history/history';
import RoomManagement from './pages/room management/roomManagement';
import ReservationManagement from './pages/reservation management/reservationManagement';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { useState } from 'react';
import ChangePassword from './pages/change password/changePassword';
import MoreInfo from './pages/history/moreInfo';
 
function App() {

  // ต้องใช้อันนี้
  // const [isActive, setActive] = useState("false");
  // const ToggleClass = () => {
  //   setActive(!isActive); 
  //  };

  return (

   
    <Router>
        <Switch >
          <Route path ="/history" exact={true} component={History}>
            <History />
          </Route>
          <Route path="/roomManagement">
            <RoomManagement />
          </Route>
          <Route path="/reservationManagement">
            <ReservationManagement />
          </Route>
          <Route path="/reservationManagement">
            <ReservationManagement />
          </Route>
          <Route path="/changePassword">
            <ChangePassword />
          </Route>
          <Route path="/moreInfo">
            <MoreInfo />
          </Route>
        </Switch>
        <Sidebar />
    </Router>
  );
}
 
export default App;
