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
     	localStorage.bookwormJWT = user.token;      //storing the token in local storage so dat we can keep a copy and it doesnt change
     dispatch(userLoggedIn(user))
     }); 

//userLoggedOut action is dispatched which removes the token of the user
export const logout = () => dispatch => {
  localStorage.removeItem("bookwormJWT");
  //setAuthorizationHeader();
  dispatch(userLoggedOut());
};

export const confirm = token => dispatch =>
  api.user.confirm(token).then(user => {
    localStorage.bookwormJWT = user.token;
    dispatch(userLoggedIn(user));
  });
      
