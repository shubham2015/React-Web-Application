//We connect the login page to Redux to handle the state of user when logged in, the state should hold the web token
//generated before and this is held as state  

import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";

const HomePage = ({ isAuthenticated }) =>(
<div>
 <h2> HomePage </h2>
 {
  if(isAuthenticated)
 	<button>Logout</button>
  else
  	<Link to="/login">Login</Link>
 }
 </div>
 );


HomePage.propTypes = {
	isAuthenticated: PropTypes.bool.isRequired
};
//isAuthenticated will put true if token is der n vice versa
function mapStateToProps(state)
{
	
	return {
		isAuthenticated: !!state.user.token
	};
}

export default connect(mapStateToProps)(HomePage);
