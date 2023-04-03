import { configureStore } from '@reduxjs/toolkit';
import { todoListReducer } from './todoListReducer';

export const store = configureStore({
  reducer: {
    data: todoListReducer.reducer
  }
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;