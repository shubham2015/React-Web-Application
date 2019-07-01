import React from 'react';
import {connect} from 'react-redux';
import {signup} from '../../actions/users';
import SignUpForm from '../forms/SignUpForm';
class SignUpPage extends React.Component{
   // When clicked on submit, it will call signup action in actions/users.js and there we make a api backend 
   // request to insert in database and then log him in


    submit = (data) => this.props.signup(data).then(()=> this.props.history.push("/dashboard"));
	render(){

		return(
			<div>
            <SignUpForm submit= {this.submit}/>
			</div>

			);
	}
}


export default connect(null ,{signup})(SignUpPage);