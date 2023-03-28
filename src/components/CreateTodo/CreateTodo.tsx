import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { todoActions } from '../../store/todoListReducer';
import { Input } from '../Input';
import { Button } from '../Button';
import { CreatTodoWrapper } from './CreateTodo.styled';

const CreateTodo = () => {

  const [textTodo, setTextTodo] = useState('');

  const dispach = useDispatch();

  const data = useSelector(({ data }: any) => data.todoList);

  const createTodo = () => {
    if (textTodo !== '') {
      dispach(todoActions.addTodo(textTodo.trim()));
      setTextTodo('');
    }
  }

  return (
    <CreatTodoWrapper>
      <Button onClick={() => dispach(todoActions.toggleActivityStatusAllTodo())}>
        V
      </Button>

      <Input
        placeholder="Введите событие"
        autoFocus
        value={textTodo}
        onKeyDown={(e: any) => {
          if (e.key === 'Enter') {
            createTodo();
          }
        }}
        onChange={(e: any) => setTextTodo(e.target.value)}
      />

      <Button onClick={createTodo}>
        +
      </Button>
    </CreatTodoWrapper>
  )
};

export default CreateTodo;