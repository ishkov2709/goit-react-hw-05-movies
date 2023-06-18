import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchApi } from 'services/fetchMovies';
import Item from './Item';
import { List } from './Reviews.styled';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState({});

  useEffect(() => {
    if (!reviews.id) {
      async function getReviews() {
        try {
          const {
            data: { id, results },
          } = await fetchApi.getReviewsMovie(movieId);
          setReviews({ id, results });
        } catch {
          console.error(new Error());
        }
      }
      getReviews();
    }
  }, [reviews, movieId]);

  const { results } = reviews;

  return (
    <section className="section">
      <div className="container">
        {!results?.length && <p>We don t have ant reviews for this movie</p>}

        <List>
          {results?.map(({ id, author, content }) => (
            <Item key={id} author={author} content={content} />
          ))}
        </List>
      </div>
    </section>
  );
};

export default Reviews;
