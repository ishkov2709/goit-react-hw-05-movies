import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchApi } from 'services/fetchMovies';
import { Btn, Form, Label, List, Search } from './Movies.styled';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { errorNotity } from 'utils/errorNotify';
import MoviesLitsItem from 'components/MoviesLitsItem';
import SearchLoader from 'components/Loading/SearchLoader';

const Status = {
  IDLE: 'idle',
  PANDING: 'panding',
  RESOLVED: 'resolved',
  REJECTED: 'rejected',
};

const Movies = () => {
  const [status, setStatus] = useState(Status.IDLE);
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    async function getMovies() {
      setStatus(Status.PANDING);
      try {
        const {
          data: { results },
        } = await fetchApi.getMovieByQuery(query);
        setMovies([...results]);
        if (!results.length) throw new Error();
        setStatus(Status.RESOLVED);
      } catch {
        console.error(new Error());
        errorNotity();
        setStatus(Status.REJECTED);
      }
    }

    getMovies();
  }, [query]);

  const handleSublit = e => {
    e.preventDefault();
    const form = e.target;
    const {
      query: { name, value },
    } = form.elements;
    setSearchParams({ [name]: value });
    form.reset();
  };

  return (
    <section className="section">
      <div className="container">
        <Form onSubmit={handleSublit}>
          <Label>
            <Search type="text" name="query" />
          </Label>
          <Btn type="submit">Search</Btn>
        </Form>

        {status === Status.PANDING && <SearchLoader />}

        {status === Status.RESOLVED && (
          <List>
            {movies.map(({ id, title }) => (
              <MoviesLitsItem
                key={id}
                id={id}
                title={title}
                location={location}
              />
            ))}
          </List>
        )}

        {status === Status.REJECTED && <ToastContainer />}
      </div>
    </section>
  );
};

export default Movies;
