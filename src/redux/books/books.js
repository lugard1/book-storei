import { createReducer, createAction } from '@reduxjs/toolkit';

export const ADD_BOOK = createAction('books/add');
export const REMOVE_BOOK = createAction('book/remove');

const initialState = {
  books: [
    {
      id: '1',
      title: 'Things Fall Apart',
      author: 'Chinua Achebe',
      category: 'Literature',
    },
    {
      id: '2',
      title: 'What is Life',
      author: 'Erwin Schrodinger',
      category: 'Science',
    },
    {
      id: '3',
      title: 'Half of a Yellow Sun',
      author: 'Chimamanda Adichie',
      category: 'History',
    },
  ],
};

const booksReducer = createReducer(initialState, (builder) => {
  builder.addCase(ADD_BOOK, (state, action) => {
    const updatedState = {
      ...state,
      books: [
        ...state.books,
        { ...action.payload, id: `${state.books.length + 1}` },
      ],
    };
    return updatedState;
  });

  builder.addCase(REMOVE_BOOK, (state, action) => {
    const updatedBooks = [...state.books].filter(
      (book) => book.id !== action.payload,
    );
    return { ...state, books: updatedBooks };
  });
  builder.addDefaultCase((state) => state);
});

export default booksReducer;
