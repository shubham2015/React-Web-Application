import api from "../api";
import { userLoggedIn } from "./auth";

// Make call to the client api in .api to furthur make a axios call to the backend and that will return the data of the user
// After succefull signup we will dispatch the login action and store thr token in the temporary storage.


export const signup = data => dispatch =>
  api.user.signup(data).then(user => {
    localStorage.bookwormJWT = user.token;
    dispatch(userLoggedIn(user));
  });
