
import './App.css';
// import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
// import TaskCard from './components/TaskCard';
import TaskManager from './components/TaskManager';
import UserBox from './components/UserBox';

function App() {
  return (
    <>
     <Navbar/>
     <UserBox/>
     {/* <Dashboard/> */}
     <TaskManager/>
     {/* <TaskCard/> */}
     <Footer/>

    </>
  );
}

export default App;
