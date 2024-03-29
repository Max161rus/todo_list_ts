import React from 'react';

import TodoItem from '../TodoItem/TodoItem';
import { TodoListWrapper } from './TodoList.styled';
import { useSelector } from 'react-redux';
import { filteredListAndActiveTodoCounter } from '../../store/todoListReducer';
import { Todo } from "../../models/Todo";

const TodoList = () => {

  const { filteredTodo } = useSelector(filteredListAndActiveTodoCounter);

  return (
    <TodoListWrapper>
      {filteredTodo.map((todo: Todo) => <TodoItem key={todo.id} todo={todo} />)}
    </TodoListWrapper>
  )
};

export default TodoList;