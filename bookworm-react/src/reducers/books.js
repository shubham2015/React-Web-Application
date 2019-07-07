import { createSelector } from "reselect";
import { BOOKS_FETCHED, BOOK_CREATED } from "../types";

export default function books(state = {}, action = {}) {
  switch (action.type) {
    case BOOKS_FETCHED:
    case BOOK_CREATED:
      return {...state, ...action.data.entities.books};        
    default:
      return state;  
  }
}


//Select all books
export const booksSelector = state => state.books;

//Converts the books hash to a array of books and returns all the books of the particular user
export const allBooksSelector = createSelector(booksSelector, booksHash =>
  Object.values(booksHash)
);
