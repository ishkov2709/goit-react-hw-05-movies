import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const HeadWrapper = styled.header`
  box-shadow: 1px 1px 4px 2px rgba(124, 124, 124, 0.7);
`;

export const Nav = styled.nav``;

export const List = styled.ul`
  display: flex;
  gap: 20px;

  font-size: 24px;
`;

export const Item = styled.li`
  padding: 10px 0;
`;

export const RouteLink = styled(NavLink)`
  color: #000000;

  text-decoration: none;

  &.active {
    color: orange;
  }
`;
