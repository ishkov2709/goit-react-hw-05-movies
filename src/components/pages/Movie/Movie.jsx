import { Context } from 'components/App';
import { useContext, useEffect, useState } from 'react';
import { fetchApi } from 'services/fetchMovies';
import { useLocation, useParams } from 'react-router-dom';
import parseYear from 'utils/parseYear';
import {
  Back,
  Genres,
  InfoWrapper,
  Overview,
  Poster,
  Section,
  Text,
  Title,
  TitleBox,
} from './Movie.styled';

import { BsArrowLeftShort } from 'react-icons/bs';

const Movie = () => {
  const [movie, setMovie] = useState({});
  const { movieId } = useParams();
  const baseUrlImg = useContext(Context);
  const location = useLocation();

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

  const { poster_path, title, release_date, vote_average, overview, genres } =
    movie;

  return (
    movie.hasOwnProperty('title') && (
      <Section>
        <Back to={location.state.from}>
          <BsArrowLeftShort />
          Go Back
        </Back>
        <TitleBox>
          <Poster src={baseUrlImg + poster_path} alt={title} width={300} />
          <InfoWrapper>
            <Title>
              {title} ({parseYear(release_date)})
            </Title>
            <Text>User Score: {Math.round(vote_average * 10)}%</Text>
            <Overview>Overview</Overview>
            <Text>{overview}</Text>
            <Genres>Genres</Genres>
            <Text>{[...genres.map(({ name }) => name)].join(' ')}</Text>
          </InfoWrapper>
        </TitleBox>
      </Section>
    )
  );
};

export default Movie;
