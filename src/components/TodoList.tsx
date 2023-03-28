import React from 'react';
import TodoItem from './TodoItem';
import { TodoListWrapper } from "./TodoList.styled";
import { useSelector } from 'react-redux';

const TodoList = () => {

  const data = useSelector(({ data }: any) => data.todoList);

  return (
    <TodoListWrapper>
      {data.map((todo: any) => <TodoItem key={todo.id} todo={todo} />)}
    </TodoListWrapper>
  )
};

export default TodoList;