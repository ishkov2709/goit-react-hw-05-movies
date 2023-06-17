import MovieLitsItem from 'components/MovieListItem/MovieListItem';
import { useEffect, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { fetchApi } from 'services/fetchMovies';
import { Btn, Form, Label, List, Search } from './Movies.styled';

const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();
  const [movies, setMovies] = useState([]);
  const query = searchParams.get('query');

  useEffect(() => {
    if (!query) return;

    async function getMovies() {
      try {
        const {
          data: { results },
        } = await fetchApi.getMovieByQuery(query);
        if (!results.length) throw new Error();
        setMovies([...results]);
      } catch {
        console.error(new Error());
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

  console.log(location);

  return (
    <section className="section">
      <div className="container">
        <Form onSubmit={handleSublit}>
          <Label>
            <Search type="text" name="query" />
          </Label>
          <Btn type="submit">Search</Btn>
        </Form>
        <List>
          {movies.map(({ id, title }) => (
            <MovieLitsItem key={id} id={id} title={title} location={location} />
          ))}
        </List>
      </div>
    </section>
  );
};

export default Movies;
