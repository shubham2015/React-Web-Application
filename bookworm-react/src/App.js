import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {BrowserRouter } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import Dashboard from './components/pages/Dashboard';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import PropTypes from 'prop-types';
// User Route for Higher Order Authenticated routes only. So only the authenticated user can go to next pages and
// and can view other stuff
const App = ({location}) => (
  
  <div className="ui container">
  <Route location ={location} path = "/" exact component ={HomePage} />
  <GuestRoute location ={location} path ="/login" exact component = {LoginPage}/>
  <GuestRoute location ={location} path ="/signup" exact component = {SignUpPage}/>
  <UserRoute location ={location} path = "/dashboard" exact component = {Dashboard}/>
   </div>
 
  
  );
App.propTypes = {
  location: PropTypes.shape({
  	pathname: PropTypes.string.isRequired
}).isRequired
};
export default App;
