import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

export const todoListReducer = createSlice({
  name: 'todoSlise',
  initialState: {
    todoList: [],
    todoFilter: "All"
  },
  reducers: {
    addTodo: (store, { payload }) => {
      const newTodo = {
        todoText: payload,
        activeFlag: true,
        id: uuidv4()
      }
      store.todoList = [newTodo, ...store.todoList];
    },
    switchingActivityItem: (store, {payload}) => {
      const indexTodo = store.todoList.findIndex(todo => todo.id === payload);
      store.todoList[indexTodo].activeFlag = !store.todoList[indexTodo].activeFlag;
    }
  }

});

export const todoActions = todoListReducer.actions;