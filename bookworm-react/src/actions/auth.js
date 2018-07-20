import api from "../api";
import {USER_LOGGED_IN, USER_LOGGED_OUT} from "../types";
export const userLoggedIn = (user) => ({
	type: USER_LOGGED_IN,
	user
});

export const userLoggedOut = () => ({
	type: USER_LOGGED_OUT
});
//api request contained in the object 'api'and .then is to handle the promise obtained to dispatch the action type userLoggedIn
export const login =(credentials) => (dispatch) => 
     api.user.login(credentials).then(user => {
     	localStorage.bookwormJWT = user.token;      //storing the token in local storage coz if we reload the app the state becomes null and inorder to
     dispatch(userLoggedIn(user))                //keep the state  intact we use the local storage to save it for furthur references.
     }); 
export const logout =() => (dispatch) => {
     
     	localStorage.removeItem("bookwormJWT")   //Logout means removing the token given to the user from the local memory    
        dispatch(userLoggedOut());         //and den dispatch the action userLoggedOut     
     };