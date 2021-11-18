import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Login from './Login'

function PrivateOutlet() {
    const token = localStorage.getItem("token")
    return token ? <Outlet /> : <Navigate to="/login" element={Login}/>;
  }

export default PrivateOutlet;