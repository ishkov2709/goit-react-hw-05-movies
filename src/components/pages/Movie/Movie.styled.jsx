import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const HeadInfo = styled.div`
  box-shadow: 0px 2px 2px 0px rgba(125, 125, 125, 1);
`;

export const Back = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  padding: 2px 4px;
  margin-bottom: 10px;

  background-color: #f5f5f5;
  color: black;

  border: 1px solid black;
  border-radius: 4px;

  text-decoration: none;

  &:active {
    background-color: orange;
    color: white;
  }
`;

export const SecInfo = styled.div``;

export const SecWrapper = styled.section`
  padding: 20px 0;
  box-shadow: 0px 2px 2px 0px rgba(125, 125, 125, 1);
`;

export const List = styled.ul``;

export const Item = styled.li``;

export const AdLink = styled(Link)`
  font-size: 18px;
  font-weight: 600;
  color: #1e6ace;

  text-decoration: none;
`;

export const Subtitle = styled.h2`
  font-size: 16px;
  margin-bottom: 10px;
`;
