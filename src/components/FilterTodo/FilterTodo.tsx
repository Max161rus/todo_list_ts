import React from "react";
import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../Button";
import { FilterTodoWrapper } from "./FilterTodo.styled";
import { FILTER_NAMES } from "../../utils/constants";
import { todoActions, filteredListAndActiveTodoCounter } from "../../store/todoListReducer";
import { RootState } from "../../store/store";

const FilterTodo = () => {

  const filterName = useSelector(({ data }: RootState) => data.todoFilter);

  const todoItemCount = useSelector(({ data }: RootState) => data.todoList.length);

  const { counActiveTodos } = useSelector(filteredListAndActiveTodoCounter);

  const dispach = useDispatch();

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