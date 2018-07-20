import api from "../api";
import {USER_LOGGED_IN} from "../types";
export const userLoggedIn = (user) => ({
	type: USER_LOGGED_IN,
	user
});

//api request contained in the object 'api'and .then is to handle the promise obtained to dispatch the action type userLoggedIn
export const login =(credentials) => (dispatch) => 
     api.user.login(credentials).then(user => {
     	localStorage.bookwormJWT = user.token;      //storing the token in local storage so dat we can keep a copy and it doesnt change
     dispatch(userLoggedIn(user))
     }); 
