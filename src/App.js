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
import Login from './pages/login/login';
import logOutModal from './components/logOutModal';
 
function App() {

  // ต้องใช้อันนี้
  const [isActive, setActive] = useState("false");

  return (
    <Router>
        <Switch >
          <Route path ="/history" exact={true} component={History}>
            <History 
            onCollapse={(isActive) => {
            setActive(!isActive);
            }}
            />
            <Sidebar />
          </Route>
          <Route path="/roomManagement">
            <RoomManagement 
            onCollapse={(isActive) => {
            setActive(!isActive);
            }}
            />
            <Sidebar />
          </Route>
          <Route path="/reservationManagement">
            <ReservationManagement 
            onCollapse={(isActive) => {
            setActive(!isActive);
            }}
            />
            <Sidebar />
          </Route>
          <Route path="/changePassword">
            <ChangePassword />
            <Sidebar />
          </Route>
          <Route path="/moreInfo">
<<<<<<< HEAD
          {/* <Route path="/moreInfo/:bookingId" element={ <MoreInfo /> } > */}
            <MoreInfo 
            onCollapse={(isActive) => {
            setActive(!isActive);
            }}
            />
=======
            <MoreInfo />
>>>>>>> 082e74f (pull develop)
            <Sidebar />
          </Route>
          <Route path="/">
            <div>
              <Login />
            </div>
          </Route>
          
        </Switch>
    </Router>
  );
}
 
export default App;
