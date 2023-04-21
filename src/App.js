
import './App.css';
import Admin from './components/Admin';
import './components/css/bootstrap.min.css'
import CustomerPopup from './components/CustomerPopup';

import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Signup } from './components/Signup';
// import TaskCard from './components/TaskCard';
import TaskManager from './components/TaskManager';
import UserBox from './components/UserBox';

function App() {
  return (
    <>
     <Navbar/>
     {/* <UserBox/> */}
     {/* <Dashboard/> */}
     
     {/* <TaskManager/> */}
     {/* <Login/> */}
     {/* <Signup/> */}
     {/* <TaskCard/> */}
     <CustomerPopup/>
     {/* <Admin/> */}
     {/* <Footer/> */}

    </>
  );
}

export default App;
