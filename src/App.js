import React from 'react';
import FormPage from './Headers/login'
import Signup from "./Headers/signup"
import Home from "./Headers/Home"
// import profile from "./Headers/profile"

import './App.css';
import {BrowserRouter as Router,Switch, Route, Link, Redirect} from 'react-router-dom';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/signin" component={FormPage}/>
          <Route path="/signup" component={Signup}/>
          <Route path="/home" component={Home}/>
          <Redirect to="/signin"></Redirect>
        </Switch>
      </Router>
    </div>
  );
}

// function App() {
//   return (
//     <profile />
//   );
// }

export default App;
