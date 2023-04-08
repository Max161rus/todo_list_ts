import styled from 'styled-components';

export const TodoItemWrapper = styled.div`

  display: grid;
  grid-template-columns: 1fr 15fr 1fr;
  gap: 10px;
  width: 100%;
  min-height: 40px;
  margin-top: 5px;
  margin-bottom: 5px;

  :hover {
    transition: 0.3s;
    box-shadow: 0 0 5px 2px red;
  }

  .button-delete {
    background-color: red;
  }

  .button-complete {
    background-color: yellow;
    color: black;
  }

  .todo-text {
    display: flex;
    align-items: center;
    width: 100%;
    word-break: break-all;
  }
  
  .todo-text--complete {
    text-decoration: line-through;
  }
`;

  