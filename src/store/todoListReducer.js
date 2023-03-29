import { createSlice, createSelector } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from 'uuid';

import { FILTER_NAMES } from '../utils/constants';

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

    switchingActivityItem: (store, { payload }) => {
      const indexTodo = store.todoList.findIndex(todo => todo.id === payload);
      store.todoList[indexTodo].activeFlag = !store.todoList[indexTodo].activeFlag;
    },

    saveEditedCase: (store, { payload }) => {
      const indexTodo = store.todoList.findIndex(todo => todo.id === payload.id);
      store.todoList[indexTodo].todoText = payload.text;
    },

    toggleActivityStatusAllTodo: (store) => {
      const attributeActiveTodo = store.todoList.some(todo => todo.activeFlag);
      store.todoList = store.todoList.map(todo => ({
        ...todo,
        activeFlag: !attributeActiveTodo
      }));
    },

    deleteTodo: (store, { payload }) => {
      const indexTodo = store.todoList.findIndex(todo => todo.id = payload);
      store.todoList.splice([indexTodo], 1);
    },

    setFilter: (store, { payload }) => {
      store.todoFilter = payload;
    },

    clearCompleteTodo: (store) => {
      store.todoList = store.todoList.filter(todo => todo.activeFlag);
    }
  }

});

export const filteredListAndActiveTodoCounter = createSelector(
  ({ data }) => data.todoList,
  ({ data }) => data.todoFilter,
  (todoList, todoFilter) => {
    let counActiveTodos = 0;

    const filteredTodo = todoList.filter(todo => {
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