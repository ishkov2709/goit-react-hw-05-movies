import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const List = styled.ul`
  padding: 20px 0;
  margin: 0 20px;
`;

export const Item = styled.li`
  &:not(:last-child) {
    margin-bottom: 8px;
  }
`;

export const ItemLink = styled(Link)`
  font-size: 18px;
  color: #3f1ae0;
  text-decoration: none;
`;
