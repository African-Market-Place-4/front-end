import React from 'react';
import './App.css'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import {Routes, Route } from "react-router-dom";

import Login from "./components/Login";
import CreateAccount from "./components/CreateAccount";
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import LandingPage from './components/LandingPage'

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

          <Route path="/dashboard" element={<Dashboard/>}>
          </Route>

          <Route exact path='/' element={<LandingPage/>}>
          </Route>

          </Routes>
        </div>
      </div>
  );
}

export default App;