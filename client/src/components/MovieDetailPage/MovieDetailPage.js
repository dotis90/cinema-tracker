import React, { Fragment, useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import BigImage from './sections/BigImage';
import CastCard from './sections/CastCard';

export const MovieDetailPage = (props) => {
  const [movie, setMovie] = useState({});
  const [actors, setActors] = useState([]);

  useEffect(() => {
    const movieId = props.match.params.movieId;
    fetch(`/api/movies/id?data=${movieId}`).then((res) => {
      res.json().then((res) => {
        console.log(res);
        setMovie(res);

        fetch(`/api/movies/credits?data=${movieId}`).then((res) => {
          res.json().then((res) => {
            console.log(res);
            setActors(res.cast);
          });
        });
      });
    });
  }, []);

  return (
    <Fragment>
      {movie && <BigImage image={movie.backdrop_path} title={movie.title} tagline={movie.tagline} />}

      <h1>Cast</h1>

      <Container fluid>
        <Row>
          {actors &&
            actors
              .filter((actor) => actor.profile_path)
              .map((actor, index) => (
                <Fragment key={index}>
                  <CastCard
                    image={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
                    name={actor.name}
                  />
                </Fragment>
              ))}
        </Row>
      </Container>
    </Fragment>
  );
};

export default MovieDetailPage;
