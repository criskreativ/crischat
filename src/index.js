import React from 'react';
import ReactDOM from 'react-dom';
import './assets/scss/index.scss';
import logo from './assets/icons/logo-2.svg';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
import * as serviceWorker from './serviceWorker';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';

const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects?????

firebase.initializeApp({
  apiKey: "AIzaSyAGWlAc1AcTdD-YWtQ5x3U82I1uIA_jtuE",
  authDomain: "chat-debf4.firebaseapp.com",
  databaseURL: "https://chat-debf4.firebaseio.com",
  projectId: "chat-debf4",
  storageBucket: "chat-debf4.appspot.com",
  messagingSenderId: "576487033453",
  appId: "1:576487033453:web:bdc5ef396aaf5d08d78d64",
  measurementId: "G-XLCCSNG0YE"
});


const routing = (
  <Router>
    <div className="container" id='routing-container'>
    <Route path='/signup'>
      <div className="container__home"><Link to="/">Home</Link></div>
    </Route>
    <Route path='/login'>
      <div className="container__home"><Link to="/">Home</Link></div>
    </Route>
    <Route exact path='/'>
    <header>
      <nav>
        <ul>
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </header>
    </Route>

    <Route exact path='/'>
      <div className="home">
        <h1>CrisChat App</h1>
        <div className="logo"><img src={logo} alt="logo"/></div>
      </div>
    </Route>

    <Route path='/signup' component={SignupComponent}></Route>
    <Route path='/login' component={LoginComponent}></Route>
    <Route path='/dashboard' component={DashboardComponent}></Route>
    </div>
  </Router>
)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
