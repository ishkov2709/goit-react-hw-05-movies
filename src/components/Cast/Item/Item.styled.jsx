import styled from '@emotion/styled';

export const ItemList = styled.li`
  width: 180px;
`;

export const ImgWrapper = styled.div`
  height: 270px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  margin-bottom: 8px;
`;

export const Img = styled.img``;

export const Text = styled.p`
  &:not(:last-child) {
    margin-bottom: 10px;

    font-weight: 600;
  }
`;
