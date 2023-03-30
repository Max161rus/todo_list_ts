import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';

import TodoWrapper from './components/TodoWrapper';
import CreateTodo from './components/CreateTodo';
import TodoList from './components/TodoList';
import FilterTodo from './components/FilterTodo';

import { todoListStored, filterStored } from "./utils/storage";

function App() {

  const data = useSelector(({ data }: any) => data.todoList);
  const filterValue = useSelector(({ data }: any) => data.todoFilter);

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

