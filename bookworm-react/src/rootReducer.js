//Combined reducers into one RootReducer

import {combineReducers } from 'redux';


import user from "./reducers/user";

export default combineReducers({

    user

});