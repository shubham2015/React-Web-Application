import jwt from 'jsonwebtoken';
export default (req,res,next) =>{

const header = req.headers.authorization;
let token;
// token is actually bearer nfibigbriugbriu, we only consider the the second part
if(header) token=header.split(' ')[1];

if(token){
	jwt.verify(token, process.env.JWT_SECRET, (err,decoded) =>{
          // If error with invalid token, else he will go to next function in stack
		if(err){
			res.status(401).json({ errors: {global:"Invalid token"}});
		}
		else{
			res.userEmail = decoded.email;
			next();
		}
	})
}
else{
	res.status(401).json({errors: {global: "No Token"}});
}
}