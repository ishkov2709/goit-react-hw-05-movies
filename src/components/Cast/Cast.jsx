import { Context } from 'components/App';
import { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi } from 'services/fetchMovies';
import { CastBox, List } from './Cast.styled';
import Item from './Item';

const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState([]);
  const baseUrlImg = useContext(Context);

  useEffect(() => {
    async function getCredits() {
      try {
        const {
          data: { cast },
        } = await fetchApi.getCreditsMovie(movieId);
        setCredits([...cast]);
      } catch {
        console.error(new Error());
      }
    }
    getCredits();
  }, [movieId]);

  const compileImgURL = path => {
    return path
      ? baseUrlImg + path
      : 'https://icon-library.com/images/unknown-person-icon/unknown-person-icon-27.jpg';
  };

  return (
    <section className="section">
      <CastBox className="container">
        <List>
          {credits.map(({ credit_id, name, character, profile_path }) => (
            <Item
              key={credit_id}
              name={name}
              character={character}
              urlImg={compileImgURL(profile_path)}
            />
          ))}
        </List>
      </CastBox>
    </section>
  );
};

export default Cast;
