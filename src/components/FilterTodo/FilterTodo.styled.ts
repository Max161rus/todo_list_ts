import styled from 'styled-components';

export const FilterTodoWrapper = styled.section`
  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .todo-count {
    margin: 5px;
  }

  .filter-wrapper {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 10px;
  }

  .button-filter,
  .button-clear {
    font-size: 15px;
    width: auto;
  }
  
  .button-delete {
    background-color: red;
  }
  
  .button-complete {
    background-color: yellow;
    color: black;
  }

  .button-active {
		box-shadow: 0 0 5px 2px red;
	}

  @media (max-width: 482px) {
    flex-direction: column;
    .button-clear {
      width: 100%;
      margin-top: 10px;
    }
    .filter-wrapper {
      width: 100%;
    }
  }
`;