import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import {BrowserRouter } from 'react-router-dom';
import HomePage from './components/pages/HomePage';
import Example from './components/pages/Example';
import LoginPage from './components/pages/LoginPage';
import SignUpPage from './components/pages/SignUpPage';
import Dashboard from './components/pages/Dashboard';
import UserRoute from './components/routes/UserRoute';
import GuestRoute from './components/routes/GuestRoute';
import TopNavigation from './components/navigation/TopNavigation';
import NewBookPage from './components/pages/NewBookPage';
import {connect} from 'react-redux';
//import ForgotPassword from './components/pages/ForgotPassword'; 
import PropTypes from 'prop-types';
// User Route for Higher Order Authenticated routes only. So only the authenticated user can go to next pages and
// and can view other stuff
const App = ({location,isAuthenticated}) => (
  
  <div className="ui container">
   {isAuthenticated && <TopNavigation/>}
  <Route location ={location} path = "/" exact component ={HomePage} />
  <GuestRoute location ={location} path ="/login" exact component = {LoginPage}/>
  <GuestRoute location ={location} path ="/signup" exact component = {SignUpPage}/>
  
  <UserRoute location ={location} path = "/dashboard" exact component = {Dashboard}/>
   <UserRoute location = {location} path ="/books/new" exact component ={NewBookPage}/>
   </div>
 
  
  );
App.propTypes = {
  location: PropTypes.shape({
  	pathname: PropTypes.string.isRequired
}).isRequired,
isAuthenticated: PropTypes.bool.isRequired
};

function mapStateToProps(state){

  return{
    isAuthenticated: !!state.user.email
  } 
}
export default connect(mapStateToProps)(App);
