import { Author, ItemList, Text } from './Item.styled';

const Item = ({ author, content }) => {
  return (
    <ItemList>
      <Author>{author}</Author>
      <Text>{content}</Text>
    </ItemList>
  );
};

export default Item;
