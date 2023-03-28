import { Button } from "../Button";
import { FilterTodoWrapper } from "./FilterTodo.styled";

const FilterTodo = () => {
  return (
    <FilterTodoWrapper>
      <p className="todo-count">
        item 0
      </p>

      <div>
        <Button className="button-filter">
          All
        </Button>

        <Button className="button-filter">
          Active
        </Button>

        <Button className="button-filter">
          Complete
        </Button>
      </div>

      <Button className="button-filter">
        Clear complete
      </Button>

    </FilterTodoWrapper>
  )
};

export default FilterTodo;