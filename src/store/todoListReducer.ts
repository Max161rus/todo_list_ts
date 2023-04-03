import { createSlice, createSelector, PayloadAction } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

import { FILTER_NAMES } from '../utils/constants';
import { todoListStored, filterStored } from "../utils/storage";

// import { Todo } from "../models/Todo";


export const todoListReducer = createSlice({
  name: 'todoSlise',
  initialState: {
    todoList: todoListStored.getStorageValue(),
    todoFilter: filterStored.getStorageValue()
  },
  reducers: {
    addTodo: (store, { payload }: PayloadAction<string>) => {
      const newTodo = {
        todoText: payload,
        activeFlag: true,
        id: uuidv4()
      }
      store.todoList = [newTodo, ...store.todoList];
    },

    switchingActivityItem: (store, { payload }: PayloadAction<string>) => {
      const indexTodo = store.todoList.findIndex((todo: any) => todo.id === payload);
      store.todoList[indexTodo].activeFlag = !store.todoList[indexTodo].activeFlag;
    },

    saveEditedCase: (store, { payload }: PayloadAction<{ text: string; id: string }>) => {
      const indexTodo = store.todoList.findIndex((todo: any) => todo.id === payload.id);
      store.todoList[indexTodo].todoText = payload.text;
    },

    toggleActivityStatusAllTodo: (store) => {
      const attributeActiveTodo = store.todoList.some((todo: any) => todo.activeFlag);
      store.todoList = store.todoList.map((todo: any) => ({
        ...todo,
        activeFlag: !attributeActiveTodo
      }));
    },

    deleteTodo: (store, { payload }: PayloadAction<string>) => {
      const indexTodo = store.todoList.findIndex((todo: any) => todo.id = payload);
      store.todoList.splice([indexTodo], 1);
    },

    setFilter: (store, { payload }: PayloadAction<string>) => {
      store.todoFilter = payload;
    },

    clearCompleteTodo: (store) => {
      store.todoList = store.todoList.filter((todo: any) => todo.activeFlag);
    }
  }
});

export const filteredListAndActiveTodoCounter = createSelector(
  ({ data }: any) => data.todoList,
  ({ data }: any) => data.todoFilter,
  (todoList, todoFilter) => {
    let counActiveTodos = 0;

    const filteredTodo = todoList.filter((todo: any) => {
      if (todo.activeFlag) {
        counActiveTodos++;
      }

      if (todoFilter === FILTER_NAMES.all) {
        return true;
      }

      const signAnActiveCase = todoFilter === FILTER_NAMES.active;

      return todo.activeFlag === signAnActiveCase;
    });

    return (
      {
        filteredTodo,
        counActiveTodos
      }
    )
  }
);

export const todoActions = todoListReducer.actions;