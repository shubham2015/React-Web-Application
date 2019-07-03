import React from 'react';
import {Message} from 'semantic-ui-react';
const ConfirmEmailMessage = (props) =>(

	<Message info>
     Please Confirm your Email Address {props.username}
	</Message>
);

export default ConfirmEmailMessage;