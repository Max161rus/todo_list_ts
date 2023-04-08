import styled from 'styled-components';

export const Button = styled.button`
  border: none;
  background-color: green;
  width: 40px;
  filter: brightness(100%);
  color: white;
  border-radius: 1px;

  :hover {
    transition: 0.3s;
    filter: brightness(200%);
    cursor: pointer;
    box-shadow: 0 0 5px 2px red;
  }

  :active {
    filter: brightness(70%);
  }
`;