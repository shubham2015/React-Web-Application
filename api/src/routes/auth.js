
// Action to Login the user by validating if he is the valid user
import express from 'express';

//Model/User will hold details of user based on email and password which is meant to be a schema
import User from '../models/User';
const router = express.Router();

//Post the request with credential to login into webpage. this request is stored in credentials for server side authentications
router.post('/',(req ,res)=> {
	const {credentials} = req.body;  //Using body-parser to capture the credentials in the request 

	//We find for the particular user in the 'User' database and send the response using the promise obtained.
	
	User.findOne({ email: credentials.email }).then(user=>{
		//If user is present and password matches  den we authenticate him else error
		if(user && user.isValidPassword(credentials.password))
		{
            res.json({user: user.toAuthjson()});
		}
		else{
			res.status(400).json({ errors: {global: "Invalid"}});
		}
	});
});

router.post("/reset_password_request", (req,res)=> {
   User.findOne({ email: req.body.email}).then(user =>{
   	if(user){
   		sendResetPasswordEmail(user);
   		res.json({});
   	}
   	else{
   		res.status(400).json({errors: {global :"User Not Found"}});
   	}
   });
});
export default router;