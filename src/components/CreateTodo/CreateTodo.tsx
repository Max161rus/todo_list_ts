import React, { useState } from 'react';
import { useDispatch } from 'react-redux';

import { todoActions } from '../../store/todoListReducer';
import { Input } from '../Input';
import { Button } from '../Button';
import { CreatTodoWrapper } from './CreateTodo.styled';
import { AppDispatch } from '../../store/store';

const CreateTodo = () => {

  const [textTodo, setTextTodo] = useState('');

  const dispach = useDispatch<AppDispatch>();

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