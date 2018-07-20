//User Reducer, takes state and action and returns new state
import { USER_LOGGED_IN, USER_LOGGED_OUT} from "../types";
export default function user(state ={}, action ={}) {

	switch(action.type)
	{
		case USER_LOGGED_IN:
		  return action.user;   //returns the state
		case USER_LOGGED_OUT:
		  return {};   //Returns empty object after removing the user token
		default: 
		  return state;  
	}
}