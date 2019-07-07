
import { normalize } from "normalizr";
import { BOOKS_FETCHED, BOOK_CREATED } from "../types";
import api from "../api";
import { bookSchema } from "../schemas";

// We return the normalized form of books data bookSchema is the format we want to normalize it
//Normalizer
export const fetchBooks = () => dispatch =>
  api.books
    .fetchAll()
    .then(books => dispatch(booksFetched(normalize(books, [bookSchema]))));

export const createBook =(data) => dispatch =>
   api.books
      .create(data)
      .then(book => dispatch(bookCreated(normalize(book, bookSchema))));   

// Normalized data is wat sending data.entities.books
const booksFetched = data => ({
  type: BOOKS_FETCHED,
  data
});

const bookCreated = data => ({
  type: BOOK_CREATED,
  data
});    

