import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchApi } from 'services/fetchMovies';
import { Item, ItemLink, List } from './Home.styled';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

  console.log('Home');

  useEffect(() => {
    async function getMovies() {
      try {
        const {
          data: { results },
        } = await fetchApi.getTrendMovies();
        setTrendMovies([...results]);
      } catch {
        console.log(new Error());
      }
    }

    getMovies();
  }, []);

  return (
    <List>
      {trendMovies.map(({ id, title }) => (
        <Item key={id}>
          <ItemLink to={`/movies/${id}`} state={{ from: location }}>
            {title}
          </ItemLink>
        </Item>
      ))}
    </List>
  );
};

export default Home;
