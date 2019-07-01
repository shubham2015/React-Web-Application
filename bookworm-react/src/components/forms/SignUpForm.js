import React from 'react';
import PropTypes from "prop-types";
import { Form, Button } from "semantic-ui-react";
import isEmail from "validator/lib/isEmail";
import InlineError from "../messages/InlineError";

class SignUpForm extends React.Component{
  state = {
    data: {
      email: "",
      password: ""
    },
    loading: false,
    errors: {}
  };

  // OnSubmit I'm setting up the state of the errors and loading field based on the validate function for th errors and if the length of the errors field is zero 
  // which is dont have any errors then we set loading as true in setstate
  
  onChange = e =>
    this.setState({
      ...this.state,
      data: { ...this.state.data, [e.target.name]: e.target.value }
    });
  onSubmit = (e) =>{

  	const errors = this.validate(this.state.data);
  	this.setState({errors});
  	if(Object.keys(errors).length === 0){
  		this.setState({loading: true});
        this.props.submit(this.state.data)
        .catch(err => {
        console.log("Something",err);
          this.setState({loading:false})});
  	}
  }

  validate = data =>{

    const errors ={};
    if(!isEmail(data.email))
    {
    	errors.email = "Invalid Email";
    }
    if(!data.password)
    {
    	errors.password = "Invalid Password";
    }
    return errors;
  }
	render(){
        const {data,errors,loading } = this.state;
		return(
            <Form onSubmit={this.onSubmit} loading={loading}>
        <Form.Field error={!!errors.email}>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="email@email.com"
            value={data.email}
            onChange={this.onChange}
          />
          {errors.email && <InlineError text={errors.email} />}
        </Form.Field>

        <Form.Field error={!!errors.password}>
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            value={data.password}
            onChange={this.onChange}
          />
          {errors.password && <InlineError text={errors.password} />}
        </Form.Field>

        <Button primary>Sign Up</Button>
      </Form>
			);
	}
}
SignUpForm.propTypes = {
  submit: PropTypes.func.isRequired
};

export default SignUpForm;