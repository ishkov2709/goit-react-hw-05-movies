import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { fetchApi } from 'services/fetchMovies';
import { Title } from './Home.styled';
import MoviesList from 'components/MoviesList/MoviesList';

const Status = {
  IDLE: 'idle',
  PANDING: 'panding',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Home = () => {
  const [trendMovies, setTrendMovies] = useState(null);
  const [status, setStatus] = useState(Status.IDLE);
  const location = useLocation();

  useEffect(() => {
    if (!trendMovies?.length) {
      async function getMovies() {
        setStatus(Status.PANDING);
        try {
          const {
            data: { results },
          } = await fetchApi.getTrendMovies();
          setTrendMovies([...results]);
          setStatus(Status.RESOLVED);
        } catch {
          console.log(new Error());
          setStatus(Status.REJECTED);
        }
      }

      getMovies();
    }
  }, [trendMovies]);

  if (!trendMovies) return;

  return (
    <section className="section">
      <div className="container">
        <Title>Trending day</Title>
        {status === Status.RESOLVED && (
          <MoviesList movies={trendMovies} location={location} />
        )}
      </div>
    </section>
  );
};

export default Home;
