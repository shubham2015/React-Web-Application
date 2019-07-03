
//We define Schema which will be common for all the users
// User model which is generated for each user entry and that can be stored in db
import mongoose from 'mongoose';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import uniqueValidator from 'mongoose-unique-validator';


const schema = new mongoose.Schema(
{
	email: { type: String, 
           required: true, 
           lowercase: true,
           index: true,
            unique: true},
	passwordHash: { type: String, required: true },
  confirmed: {type: Boolean, default:false},
  confimationToken: { type: String, default: ""}
},{timestamps:true}
);

//Methods which the schema will manipulate to find valid password
schema.methods.isValidPassword = function isValidPassword(password){
	return bcrypt.compareSync(password,this.passwordHash);
};
/*schema.methods.setConfirmationToken = function setConfirmationToken(){
  this.confirmationToken = this.generateJWT();
};
*/

schema.methods.setPassword = function setPassword(password){
  
  
  this.passwordHash = bcrypt.hashSync(password.password,10);
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
  console.log("M getting calles");
  return{
  	email: this.email,
    confirmed:false,
  	token: this.generateJWT()
  };
};
schema.plugin(uniqueValidator, { message: 'Email already exists'});
//Instance of model is called document
//model will look for the plural version of the User in the database reference/collection
export default mongoose.model('User',schema);