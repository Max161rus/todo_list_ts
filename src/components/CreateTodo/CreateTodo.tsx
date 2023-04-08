import React, { useState } from 'react';

import { todoActions } from '../../store/todoListReducer';
import { Input } from '../Input';
import { Button } from '../Button';
import { CreatTodoWrapper } from './CreateTodo.styled';
import { useAppDispatch } from "../../hooks/hooks";

const CreateTodo = () => {

  const [textTodo, setTextTodo] = useState('');

  const dispach = useAppDispatch();

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
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            createTodo();
          }
        }}
        onChange={(e) => setTextTodo(e.target.value)}
      />

      <Button onClick={createTodo}>
        +
      </Button>
    </CreatTodoWrapper>
  )
};

export default CreateTodo;