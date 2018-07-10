import React from 'react';
import {Route} from 'react-router-dom';
import LoginForm from '../forms/LoginForm';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {login} from '../../actions/auth';
class LoginPage extends React.Component {


    submit = (data) => {
      this.props.login(data).then(() => this.props.history.push("/"))                   //Fetch login from user and then use Promise to send to home page
      };
	render() {

		return(
          <div>
          <h1> Login Page </h1>
          <LoginForm submit={this.submit}/>                
          </div>
	          );
	}
}

LoginPage.propTypes = { 
  history: PropTypes.shape({
    push: PropTypes.func.isRequired
  }).isRequired,
 login: PropTypes.string.isRequired
}

export default connect(null, {login})(LoginPage);