import styled from 'styled-components';

export const TodoItemWrapper = styled.div`

  width: 100%;
  min-height: 40px;
  display: flex;
  justify-content: space-between;
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
    width: 80%;
    padding-left: 10px;
    word-break: break-all;
  }
  
  .todo-text--complete {
    text-decoration: line-through;
  }

`;