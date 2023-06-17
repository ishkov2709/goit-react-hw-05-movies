import {
  Genres,
  InfoBox,
  Overview,
  Poster,
  Text,
  Title,
  Wrapper,
} from './MovieInfo.styled';

const MovieInfo = ({
  urlImg,
  title,
  releaseDate,
  voteAverage,
  overview,
  genres,
}) => {
  return (
    <Wrapper>
      <Poster src={urlImg} alt={title} width={300} />
      <InfoBox>
        <Title>
          {title} ({releaseDate})
        </Title>
        <Text>User Score: {voteAverage}</Text>
        <Overview>Overview</Overview>
        <Text>{overview}</Text>
        <Genres>Genres</Genres>
        <Text>{genres}</Text>
      </InfoBox>
    </Wrapper>
  );
};

export default MovieInfo;
