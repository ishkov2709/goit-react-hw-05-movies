import { Context } from 'components/App';
import { useContext, useEffect, useRef, useState } from 'react';
import { fetchApi } from 'services/fetchMovies';
import { Outlet, useLocation, useParams } from 'react-router-dom';
import {
  Back,
  HeadInfo,
  SecInfo,
  List,
  Item,
  Subtitle,
  AdLink,
  SecWrapper,
} from './Movie.styled';

import { BsArrowLeftShort } from 'react-icons/bs';
import MovieInfo from './MovieInfo/MovieInfo';

const Movie = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const baseUrlImg = useContext(Context);
  const location = useLocation();
  const backLinkLocation = useRef(location.state?.from ?? '/');

  useEffect(() => {
    async function movieById() {
      try {
        const { data } = await fetchApi.getMovieById(movieId);
        setMovie({ ...data });
      } catch {
        console.error(new Error());
      }

      return () => {
        setMovie({});
      };
    }

    movieById();
  }, [movieId]);

  const percentCalc = value => {
    return `${Math.round(value * 10)}%`;
  };

  const parseYear = date => {
    return new Date(date).getFullYear();
  };

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    movie.hasOwnProperty('title') && (
      <section className="section">
        <HeadInfo className="container">
          <Back to={backLinkLocation.current}>
            <BsArrowLeftShort />
            Go Back
          </Back>
          <MovieInfo
            urlImg={baseUrlImg + poster_path}
            title={title}
            releaseDate={parseYear(release_date)}
            voteAverage={percentCalc(vote_average)}
            overview={overview}
            genres={genres.map(({ name }) => name).join(' ')}
          />
        </HeadInfo>
        <SecInfo>
          <SecWrapper className="section">
            <div className="container">
              <Subtitle>Additional information</Subtitle>
              <List>
                <Item>
                  <AdLink to="cast">Cast</AdLink>
                </Item>
                <Item>
                  <AdLink to="reviews">Reviews</AdLink>
                </Item>
              </List>
            </div>
          </SecWrapper>
          <Outlet />
        </SecInfo>
      </section>
    )
  );
};

export default Movie;
