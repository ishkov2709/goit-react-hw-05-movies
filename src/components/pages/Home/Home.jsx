import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchApi } from 'services/fetchMovies';
import { List, Title } from './Home.styled';
import MovieLitsItem from 'components/MovieListItem/MovieListItem';

const Home = () => {
  const [trendMovies, setTrendMovies] = useState([]);
  const location = useLocation();

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
  }, [trendMovies]);

  return (
    <section className="section">
      <div className="container">
        <Title>Trending day</Title>
        <List>
          {trendMovies.map(({ id, title }) => (
            <MovieLitsItem key={id} id={id} title={title} location={location} />
          ))}
        </List>
      </div>
    </section>
  );
};

export default Home;
