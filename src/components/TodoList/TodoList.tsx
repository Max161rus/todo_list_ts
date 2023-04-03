import React from 'react';

import TodoItem from '../TodoItem/TodoItem';
import { TodoListWrapper } from './TodoList.styled';
import { useSelector } from 'react-redux';
import { filteredListAndActiveTodoCounter } from '../../store/todoListReducer';

const TodoList = () => {

  const { filteredTodo } = useSelector(filteredListAndActiveTodoCounter);

  return (
    <TodoListWrapper>
      {filteredTodo.map((todo: any) => <TodoItem key={todo.id} todo={todo} />)}
    </TodoListWrapper>
  )
};

export default TodoList;