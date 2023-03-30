import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  border-radius: 3px;
  border: none;
  background-color: black;
  color: white;
  outline: none;

  :focus {
    box-shadow: 0 0 5px 2px red;
  }
`;