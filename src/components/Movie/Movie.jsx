import { Context } from 'components/App';
import { Suspense, useContext, useEffect, useRef, useState } from 'react';
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
import MainLoader from 'components/Loading/MainLoader';
import MovieInfo from './MovieInfo';

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

  const compilePosterURL = path => {
    return path
      ? baseUrlImg + path
      : 'https://t3.ftcdn.net/jpg/05/90/75/40/360_F_590754013_CoFRYEcAmLREfB3k8vjzuyStsDbMAnqC.jpg';
  };

  const percentCalc = value => {
    return `${Math.round(value * 10)}%`;
  };

  const parseYear = date => {
    return new Date(date).getFullYear();
  };

  const fromArrayToString = arr => {
    return arr.map(({ name }) => name).join(' ');
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
            urlImg={compilePosterURL(poster_path)}
            title={title}
            releaseDate={parseYear(release_date)}
            voteAverage={percentCalc(vote_average)}
            overview={overview}
            genres={fromArrayToString(genres)}
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
          <Suspense fallback={<MainLoader />}>
            <Outlet />
          </Suspense>
        </SecInfo>
      </section>
    )
  );
};

export default Movie;
