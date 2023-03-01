import { createReducer, createAction } from '@reduxjs/toolkit';

export const CHECK_STATUS = createAction('categories/check_status');

const initialState = {
  status: '',
};

const categoriesReducer = createReducer(initialState, (develop) => {
  develop.addCase(CHECK_STATUS, (state) => {
    const newState = { ...state, status: 'Under Construction' };

    return newState;
  });
  develop.addDefaultCase((state) => state);
});

export default categoriesReducer;
