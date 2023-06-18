import { ItemList, Img, Text, ImgWrapper } from './Item.styled';

const Item = ({ name, character, urlImg }) => {
  return (
    <ItemList>
      <ImgWrapper>
        <Img src={urlImg} alt={name} width={180} />
      </ImgWrapper>
      <Text>{name}</Text>
      <Text>Character: {character}</Text>
    </ItemList>
  );
};

export default Item;
