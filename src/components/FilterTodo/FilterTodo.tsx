import classNames from "classnames";
import { useSelector, useDispatch } from "react-redux";

import { Button } from "../Button";
import { FilterTodoWrapper } from "./FilterTodo.styled";
import { FILTER_NAMES } from "../../utils/constants";
import { todoActions } from "../../store/todoListReducer";

const FilterTodo = () => {

  const filterName = useSelector(({ data }: any) => data.todoFilter);

  const dispach = useDispatch();

  return (
    <FilterTodoWrapper>
      <p className="todo-count">
        item 0
      </p>

      <div>
        {Object.values(FILTER_NAMES).map((filterValue) => {
          console.log(filterValue)
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
        className="button-filter"
        onClick={() => dispach(todoActions.clearCompleteTodo())}
      >
        Clear complete
      </Button>

    </FilterTodoWrapper>
  )
};

export default FilterTodo;