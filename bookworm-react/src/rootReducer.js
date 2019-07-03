//Combined reducers into one RootReducer

import {combineReducers } from 'redux';

import books from "./reducers/books";
import user from "./reducers/user";

export default combineReducers({

    user,
    books
});