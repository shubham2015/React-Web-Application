//Action for sign up by taking in username password and hashing password and storing in the

import express from 'express';
import User from '../models/User';
import parseErrors from "../utils/parseErrors";
const router = express.Router();
router.post('/', (req,res) =>{
	console.log("req",req.body.user);
	const { email, password } = req.body.user;
	const user = new User({email});
	user.setPassword({password});
	//user.setConfirmationToken();
	user.save()
	     .then(userRecord => { 
	     	res.json({user: userRecord.toAuthjson()}); 	
	       })
	     .catch(err =>  { 
	     	res.status(400)
	     	.json({errors: parseErrors(err.errors)})});
});

export default router;