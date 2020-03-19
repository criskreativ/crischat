import React from 'react';
import LoginComponent from './Login/login';
import SignupComponent from './Signup/signup';
import DashboardComponent from './Dashboard/dashboard';
const firebase = require("firebase");
require("firebase/firestore"); // Required for side-effects

class AppContainer extends React.Component {

  componentWillMount() {
    this.checkForSavedAuth();
  }

  constructor() {
    super();
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
    this.db = firebase.firestore();
    this.state = {
      user: null
    };
  }

  render() {
    if(this.state.user)
      return <DashboardComponent user={this.state.user}></DashboardComponent>
    else
      return <SignupComponent loginFn={this.loggedIn}></SignupComponent>
  }

  checkForSavedAuth = () => {
    console.log(firebase.auth().currentUser);
  };

  loggedIn = (user) => this.setState({ user: user });

}

export default AppContainer;
