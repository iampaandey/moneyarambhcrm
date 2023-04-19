
import './App.css';
<<<<<<< HEAD
import CustomerPopup from './components/CustomerPopup';
// import Dashboard from './components/Dashboard';
=======
import './components/css/bootstrap.min.css'

import Dashboard from './components/Dashboard';
>>>>>>> 3b875dee632a2af734fd80e835e3e55743b519cd
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
<<<<<<< HEAD
     {/* <TaskManager/> */}
     <CustomerPopup/>
=======
     <TaskManager/>
     {/* <Login/> */}
     {/* <Signup/> */}
>>>>>>> 3b875dee632a2af734fd80e835e3e55743b519cd
     {/* <TaskCard/> */}
     {/* <Footer/> */}

    </>
  );
}

export default App;
