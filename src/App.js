// THIS IS THE ORIGINAL VERSION 
// import './App.css';
// import Header from './Header';
// import React from 'react';
// import { Route, Redirect, Routes } from "react-router-dom";
// import styled from 'styled-components';
// import '../node_modules/bootstrap/dist/css/bootstrap.min.css';




// function App() {
//   return (
//     <div className="App">
//       <Header/>
//       <h1>I am app!</h1>
//     </div>
//   );
// }

// export default App;








import React from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Routes, Route, Link } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";

function App() {
  return (<Routes>
    <div className="App">
      <nav className="navbar navbar-expand-lg navbar-light fixed-top">
        <div className="container">
          <Link className="navbar-brand" to={"/sign-in"}>positronX.io</Link>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-in"}>Login</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/sign-up"}>Sign up</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div className="auth-wrapper">
        <div className="auth-inner">
          <Route>
            <Route exact path='/' component={Login} />
            <Route path="/sign-in" component={Login} />
            <Route path="/sign-up" component={SignUp} />
          </Route>
        </div>
      </div>
    </div></Routes>
  );
}

export default App;