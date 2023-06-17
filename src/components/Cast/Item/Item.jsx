import { ItemList, Img, Text } from './Item.styled';

const Item = ({ name, character, urlImg }) => {
  return (
    <ItemList>
      <Img src={urlImg} alt={name} width={220} height={330} />
      <Text>{name}</Text>
      <Text>Character: {character}</Text>
    </ItemList>
  );
};

export default Item;
