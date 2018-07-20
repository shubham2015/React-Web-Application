//We connect the login page to Redux to handle the state of user when logged in, the state should hold the web token
//generated before and this is held as state  

import React from "react";
import {Link} from "react-router-dom";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {logout} from "../../actions/auth";

const HomePage = ({ isAuthenticated, logout }) => (
  <div>
    <h1>Home Page</h1>
    {isAuthenticated ? (
      <button onClick={() => logout()}>Logout</button>
    ) : (
      <div>
        <Link to="/login">Login</Link> or <Link to="/signup">Sign Up</Link>
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
	
	return {
		isAuthenticated: !!state.user.token
	};
}

export default connect(mapStateToProps, { logout })(HomePage);
