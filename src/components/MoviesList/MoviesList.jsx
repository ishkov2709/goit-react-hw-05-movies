import { BiCameraMovie } from 'react-icons/bi';
import { Item, ItemLink, List } from './MoviesList.styled';
import PropTypes from 'prop-types';

const MoviesList = ({ movies, location }) => {
  return (
    <List>
      {movies.map(({ id, title }) => (
        <Item key={id}>
          <BiCameraMovie style={{ marginRight: '8px' }} />
          <ItemLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </ItemLink>
        </Item>
      ))}
    </List>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.object),
  location: PropTypes.object,
};
