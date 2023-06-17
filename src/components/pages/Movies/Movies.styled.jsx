import styled from '@emotion/styled';

export const Form = styled.form`
  margin-bottom: 20px;
`;

export const Label = styled.label`
  margin-right: 16px;
`;

export const Search = styled.input`
  height: 30px;
  width: 280px;

  font-size: 16px;

  outline: none;

  border: 1px solid black;

  border-radius: 4px;

  transition: border 250ms linear, box-shadow 250ms linear;

  &:focus {
    border: 1px solid transparent;
    box-shadow: 0px 0px 6px 2px rgba(59, 175, 230, 0.7);
  }
`;

export const Btn = styled.button`
  height: 30px;
  width: 68px;

  background-color: #f0f0f0;

  font-family: 'Montserrat', sans-serif;
  font-size: 16px;
  font-weight: 600;

  border: 1px solid gray;

  border-radius: 4px;

  &:active {
    background-color: orange;
    color: white;
  }
`;

export const List = styled.ul``;
