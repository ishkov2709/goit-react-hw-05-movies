import { BiCameraMovie } from 'react-icons/bi';
import { Item, ItemLink } from './MoviesLitsItem.styled';

const MoviesLitsItem = ({ id, title, location }) => {
  return (
    <Item>
      <BiCameraMovie style={{ marginRight: '8px' }} />
      <ItemLink to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </ItemLink>
    </Item>
  );
};

export default MoviesLitsItem;
