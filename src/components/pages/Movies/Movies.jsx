import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchApi } from 'services/fetchMovies';
import { Btn, Form, Label, List, Search } from './Movies.styled';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import MovieLitsItem from 'components/MovieListItem/MovieListItem';
import { MagnifyingGlass } from 'react-loader-spinner';

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
        toast.error('📽️ Your request has no result. Please try again!', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: 'colored',
        });
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

        {status === Status.PANDING && (
          <MagnifyingGlass
            visible={true}
            height="80"
            width="80"
            ariaLabel="MagnifyingGlass-loading"
            wrapperStyle={{}}
            wrapperClass="MagnifyingGlass-wrapper"
            glassColor="#c0efff"
            color="#e15b64"
          />
        )}

        {status === Status.RESOLVED && (
          <List>
            {movies.map(({ id, title }) => (
              <MovieLitsItem
                key={id}
                id={id}
                title={title}
                location={location}
              />
            ))}
          </List>
        )}

        {status === Status.REJECTED && (
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="colored"
          />
        )}
      </div>
    </section>
  );
};

export default Movies;
