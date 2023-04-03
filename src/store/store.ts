import { configureStore } from '@reduxjs/toolkit';
import { todoListReducer } from './todoListReducer';

export const store = configureStore({
  reducer: {
    data: todoListReducer.reducer
  }
});