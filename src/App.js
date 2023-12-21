
import './App.css';
import React from 'react';
import Admin from './components/Admin';
import './components/css/bootstrap.min.css'
import CustomerPopup from './components/CustomerPopup';
import { Switch, Route } from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Footer from './components/Footer';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { Signup } from './components/Signup';
// import TaskCard from './components/TaskCard';
import TaskManager from './components/TaskManager';
import UserBox from './components/UserBox';
import { ToastContainer } from 'react-toastify'
import List from './components/List';
import Employee from './components/Employee';
import AdminLogin from './components/AdminLogin';
import { About } from './components/About';
function App() {
  return (
    <>
      <Switch>
        <React.Fragment>
          <Navbar />
          <ToastContainer />
          <Route exact path='/'><Dashboard /></Route>
          <Route exact path='/leads'><TaskManager /></Route>
          <Route exact path='/admin'><Admin /></Route>
          <Route exact path="/leadinfo:id"><CustomerPopup /></Route>
          <Route exact path="/employee:id"><Employee /></Route>
          <Route exact path="/login"><Login /></Route>
          <Route exact path="/signup"><Signup /></Route>
          <Route exact path="/list"><List /></Route>
          <Route exact path="/adminlogin"><AdminLogin /></Route>
          <Route exact path="/aboutus"><About /></Route>

          <UserBox />



          <Footer />
        </React.Fragment>
      </Switch>








    </>
  );
}

export default App;
