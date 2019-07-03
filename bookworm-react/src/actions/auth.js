//THUNK ACTIONS login and logout and resetPassword Which return action creators userLoggedIn and userLoggedOut that will handle the action objects for reducers

// User Login handling, makes a client side request to api.js in client and that will make call to axios to backend
import api from "../api";
import {USER_LOGGED_IN, USER_LOGGED_OUT} from "../types";
import setAuthorization from '../utils/setAuthorization';

export const userLoggedIn = (user) => ({
	type: USER_LOGGED_IN,
	user
});

export const userLoggedOut = () => ({
	type: USER_LOGGED_OUT
});
//api request contained in the object 'api'and .then is to handle the promise obtained to dispatch the action type userLoggedIn this action will be handled by the reducer that can make changes to state of the object
export const login =(credentials) => (dispatch) => 
     api.user.login(credentials).then(user => {
        //console.log("User logg",user);
     	localStorage.bookwormJWT = user.token;      //storing the token in local storage coz if we reload the app the state becomes null and inorder to
    setAuthorization(user.token);
     dispatch(userLoggedIn(user))                //keep the state  intact we use the local storage to save it for furthur references.
     }); 
export const logout =() => (dispatch) => {
     
     	localStorage.removeItem("bookwormJWT")   //Logout means removing the token given to the user from the local memory    
        setAuthorization();
        dispatch(userLoggedOut());         //and den dispatch the action userLoggedOut     
     };

export const resetPassword = () =>({email}) =>()=>
      api.user.resetPassword(email);