
//We define Schema which will be common for all the users
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const schema = new mongoose.Schema(
{
	email: { type: String, required: true, lowercase: true, index: true},
	passwordHash: { type: String, required: true }
},{timestamps:true}
);

//Methods which the schema will manipulate to find valid password
schema.methods.isValidPassword = function isValidPassword(password){
	return bcrypt.compareSync(password,this.passwordHash);
};

//Secured Json object (Web Token) which can be transmitted between parties securely
schema.methods.generateJWT = function generateJWT(){
  return jwt.sign(
  {
  	email: this.email
  },
  process.env.JWT_SECRET
  );
};


//After validation of email and password ,we create a webtoken and combine in json form to return back
schema.methods.toAuthjson = function toAuthjson()
{
  return{
  	email: this.email,
  	token: this.generateJWT()
  };
};
//Instance of model is called document
//model will look for the plural version of the User in the database reference/collection
export default mongoose.model('User',schema);