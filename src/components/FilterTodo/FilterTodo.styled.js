import styled from 'styled-components';

export const FilterTodoWrapper = styled.section`
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .todo-count {
    margin: 5px;
  }

  .button-filter {
    font-size: 15px;
    width: auto;
    margin-left: 5px;
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
`;