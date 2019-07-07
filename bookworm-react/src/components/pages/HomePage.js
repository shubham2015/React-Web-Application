//We connect the login page to Redux to handle the state of user when logged in, the state should hold the web token
//generated before and this is held as state  
import {BrowserRouter,Route} from 'react-router-dom';
import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {logout} from "../../actions/auth";
import Dashboard from './Dashboard';
import Example from './Example';

//We are getting state info from redux whether is authenticated or not and if he is authenticated then provide him button for 
//logout, if not then provide him signup form 

//Wen clicked on logout we call logout function in auth.js
const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>Home Page</h1>
     
    {isAuthenticated ? (
      <div>
       <Dashboard/>
      <button onClick={() => logout()}>Logout</button>
      </div>
    ) : (
      <div>
        <Example/>
      </div>
    )}
  </div>

);

HomePage.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  logout: PropTypes.func.isRequired
};
//isAuthenticated will put true if token is der n vice versa
function mapStateToProps(state)
{
	console.log(!!state.user.token);
  //state.user.token is the token stored in the redux and we get it here and once you logged in to the application successfull, this will inturn rreturn
  // the value 
	return {
		isAuthenticated: !!state.user.token
	};
}

export default connect(mapStateToProps, { logout: logout })(HomePage);
