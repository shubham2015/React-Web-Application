import react from 'React';
import PropTypes from 'prop-types';
import { Message } from 'semantic-ui-react';
import {connect} from 'react-redux';
import ForgotPasswordForm from '../forms/ForgotPasswordForm';
import {resetPassword} from '../../actions/auth';
class ForgotPassword extends React.Component{


state:{

	success: false
}
// resetPassword is the thunk action her present in ../../actions/auth
submit =(data) => this.props
                  .resetPassword(data)
                  .then(() => this.setState({success:true}));
render(){

return(
      <div>
      if(this.state.success)
      {
         <Message>Email Sent</Message>
      }
      else
      {
      	<ForgotPasswordForm submit={this.submit}/>
      }
      </div>
	);

}
}

ForgotPassword.propTypes = {
  resetPassword: PropTypes.func.isRequired
};


export default connect(null, {resetPassword})(ForgotPassword);