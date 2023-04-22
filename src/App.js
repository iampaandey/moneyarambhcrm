
import './App.css';
import React from 'react';
import Admin from './components/Admin';
import './components/css/bootstrap.min.css'
import CustomerPopup from './components/CustomerPopup';
import {Switch,Route, BrowserRouter, Router } from 'react-router-dom';
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
    <Switch>
    <React.Fragment>
     <Navbar/>
   <Route exact path='/'><Dashboard/></Route>
   <Route exact path='/leads'><TaskManager/></Route> 
   <Route exact path='/admin'><Admin/></Route>
   <Route exact path="/leadinfo"><CustomerPopup/></Route>
   <UserBox/>



      <Footer/> 
    </React.Fragment>
    </Switch>






    

    </>
  );
}

export default App;
