import React, { useEffect } from 'react';
import { useAppSelector } from "./hooks/hooks";

import TodoWrapper from './components/TodoWrapper';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import FilterTodo from './components/FilterTodo';

import { todoListStored, filterStored } from "./utils/storage";

function App() {

  const data = useAppSelector(({ data }) => data.todoList);
  const filterValue = useAppSelector(({ data }) => data.todoFilter);

  useEffect(() => {
    todoListStored.setStorageValue(data);
  }, [data]);

  useEffect(() => {
    filterStored.setStorageValue(filterValue);
  }, [filterValue]);

  return (
    <TodoWrapper>
      <CreateTodo />
      <TodoList />
      <FilterTodo />
    </TodoWrapper>
  );
}

export default App;

