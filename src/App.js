import React from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Header from './components/Header';
import Footer from './components/Footer';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage';
import PrivateOutlet from './components/PrivateRoute';
import Logout from './components/Logout'

function App() {
  return (
      <div className="auth-wrapper">
        <div className="auth-inner">
          <Header/>
          <Routes>

          <Route path="/login" element={<Login/>}>
          </Route>

          <Route path="/signup" element={<CreateAccount/>}>
          </Route>

          <Route path="/additem" element={<PrivateOutlet/>}>
            <Route path="/additem" element={<Dashboard/>}/>
          </Route>

          <Route exact path='/' element={<LandingPage/>}>
          </Route>
          <Route exact path='/logout' element={<Logout/>}>
          </Route>

          </Routes>
          <Footer/>
        </div>
      </div>
  );
}

export default App;