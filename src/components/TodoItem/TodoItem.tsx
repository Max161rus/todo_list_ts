import React, { useState } from "react";
import classNames from "classnames";
import { useDispatch } from "react-redux";

import { Button } from "../Button";
import { Input } from "../Input";
import { TodoItemWrapper } from "./TodoItem.styled";
import { todoActions } from "../../store/todoListReducer";

const TodoItem = ({ todo }: any) => {

  const [text, setText] = useState(todo.todoText);

  const [editing, setEditing] = useState(false);

  const dispach = useDispatch();

  const saveEditingTodo = () => {
    const newText = text.trim();
    if (newText) {
      dispach(todoActions.saveEditedCase({
        id: todo.id,
        text
      }))
    } else {
      setText(todo.todoText);
    }
    setEditing(false);
  };

  const cancelEditingTodo = () => {
    setText(todo.todoText);
    setEditing(false);
  };

  return (
    <TodoItemWrapper>
      <Button
        className={classNames({ "button-complete": !todo.activeFlag })}
        onClick={() => dispach(todoActions.switchingActivityItem(todo.id))}
      >
        {todo.activeFlag ? "Act" : "Com"}
      </Button>

      {editing ?
        (
          <Input
            autoFocus
            onChange={(e: any) => {
              const newText = e.target.value.trimStart();
              setText(newText);
            }}
            onKeyDown={(e: any) => {
              if (e.key === 'Enter') {
                saveEditingTodo();
              } else if (e.key === 'Escape') {
                cancelEditingTodo();
              }
            }}
            onBlur={saveEditingTodo}
            value={text}
          />
        ) : (
          <p
            className={classNames("todo-text", { "todo-text--complete": !todo.activeFlag })}
            onDoubleClick={() => setEditing(true)}
          >
            {todo.todoText}
          </p>)
      }

      <Button
        onClick={() => dispach(todoActions.deleteTodo(todo.id))}
        className="button-delete">
        ×
      </Button>
    </TodoItemWrapper >
  )
};

export default TodoItem;