import { createSelector } from "reselect";
import { BOOKS_FETCHED, BOOK_CREATED } from "../types";

export default function books(state = {}, action = {}) {
  switch (action.type) {
    default:
      return state;
  }
}


//Select all books
export const booksSelector = state => state.books;

//Converts the books hash to a array of books
export const allBooksSelector = createSelector(booksSelector, booksHash =>
  Object.values(booksHash)
);
