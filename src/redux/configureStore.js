import { configureStore } from '@reduxjs/toolkit';
import Reducer from './books/books';
import categoriesReducer from './categories/categories';

const store = configureStore({
  reducer: { books: Reducer, categories: categoriesReducer },
});

export default store;
