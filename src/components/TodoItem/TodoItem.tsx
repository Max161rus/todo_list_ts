import React, { useState } from "react";
import { Button } from "../Button";
import { Input } from "../Input";
import { TodoItemWrapper } from "./TodoItem.styled";
import { useDispatch, useSelector } from "react-redux";
import classNames from "classnames";
import { todoActions } from "../../store/todoListReducer";

// interface TodoItemProps {
//   todo: any;
// }

const TodoItem = ({ todo }: any) => {

  const [text, setText] = useState(todo.textTodo);

  const [editing, setEditing] = useState(false);

  const dispach = useDispatch();

  return (
    <TodoItemWrapper>
      <Button
        className={classNames({ "button-complete": !todo.activeFlag })}
        onClick={() => dispach(todoActions.switchingActivityItem(todo.id))}
      >
        {todo.isActive ? "Act" : "Com"}
      </Button>

      {editing ?
        (
          <Input
            autoFocus
            onChange={(e: any) => setText(e.target.value)}
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

      <Button className="button-delete">
        ×
      </Button>
    </TodoItemWrapper >
  )
};

export default TodoItem;