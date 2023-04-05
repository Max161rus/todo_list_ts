import React from "react";
import classNames from "classnames";

import { Button } from "../Button";
import { FilterTodoWrapper } from "./FilterTodo.styled";
import { FILTER_NAMES } from "../../utils/constants";
import { todoActions, filteredListAndActiveTodoCounter } from "../../store/todoListReducer";
import { useAppSelector, useAppDispatch } from "../../hooks/hooks";

const FilterTodo = () => {

  const filterName = useAppSelector(({ data }) => data.todoFilter);

  const todoItemCount = useAppSelector(({ data }) => data.todoList.length);

  const { counActiveTodos } = useAppSelector(filteredListAndActiveTodoCounter);

  const dispach = useAppDispatch();

  if (!todoItemCount) {
    return null;
  }

  return (
    <FilterTodoWrapper>
      <p className="todo-count">
        {counActiveTodos} item{counActiveTodos > 1 ? 's' : null} active
      </p>

      <div className="filter-wrapper">
        {Object.values(FILTER_NAMES).map((filterValue) => {
          return (
            <Button
              className={classNames("button-filter", { "button-active": filterValue === filterName })}
              key={filterValue}
              onClick={() => dispach(todoActions.setFilter(filterValue))}
            >
              {filterValue}
            </Button>
          )
        })}

      </div>

      <Button
        className="button-clear"
        onClick={() => dispach(todoActions.clearCompleteTodo())}
      >
        Clear complete
      </Button>

    </FilterTodoWrapper>
  )
};

export default FilterTodo;