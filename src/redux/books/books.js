import { createReducer, createAction } from '@reduxjs/toolkit';

export const ADD_BOOK = createAction('books/add');
export const REMOVE_BOOK = createAction('book/remove');

const initialState = {
  books: [],
};

const Reducer = createReducer(initialState, (develop) => {
  develop.addCase(ADD_BOOK, (state, action) => {
    state.books.push(action.payload);
  });
  develop.addCase(REMOVE_BOOK, (state, action) => {
    state.books.filter((book) => book.id !== action.payload);
  });
  develop.addDefaultCase((state) => state);
});

export default Reducer;
