import './App.css';
import Header from './Header';
import React from 'react';
import { Route, Redirect, Routes } from "react-router-dom";
import styled from 'styled-components';


function App() {
  return (
    <div className="App">
      <Header/>
      <h1>I am app!</h1>
    </div>
  );
}

export default App;
