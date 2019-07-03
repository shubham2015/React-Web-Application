
// SignUp handling, makes a client side request to api.js in client and that will make call to axios to backend
import api from "../api";

import {USER_LOGGED_IN} from "../types";
export const userLoggedIn = (user) => ({
	type: USER_LOGGED_IN,
	user
});


export const signup =(data) => (dispatch) => 
     api.user.signup(data).then(user => {
        //console.log("User signup",user);
     	localStorage.bookwormJWT = user.token;      //storing the token in local storage coz if we reload the app the state becomes null and inorder to
     dispatch(userLoggedIn(user))                //keep the state  intact we use the local storage to save it for furthur references.
     }); 