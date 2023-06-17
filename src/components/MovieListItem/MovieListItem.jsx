import { BiCameraMovie } from 'react-icons/bi';
import { Item, ItemLink } from './MovieListItem.styled';

const MovieLitsItem = ({ id, title, location }) => {
  return (
    <Item>
      <BiCameraMovie style={{ marginRight: '8px' }} />
      <ItemLink to={`/movies/${id}`} state={{ from: location }}>
        {title}
      </ItemLink>
    </Item>
  );
};

export default MovieLitsItem;
