import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Section = styled.section`
  padding: 30px 0;
`;

export const TitleBox = styled.div`
  margin: 0 40px;
  display: flex;
  gap: 20px;
`;

export const Poster = styled.img``;

export const InfoWrapper = styled.div``;

export const Title = styled.h1``;

export const Overview = styled.h2``;

export const Genres = styled.h3``;

export const Text = styled.p``;

export const Back = styled(Link)`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  gap: 2px;
  margin-bottom: 10px;
  margin-left: 40px;
  padding: 2px 4px;

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
