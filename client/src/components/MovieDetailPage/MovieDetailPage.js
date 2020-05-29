import React, { Fragment, useEffect, useState } from 'react';
import BigImage from './sections/BigImage';

export const MovieDetailPage = (props) => {
  const [movie, setMovie] = useState({});
  const movieId = props.match.params.movieId;

  useEffect(() => {
    fetch(`/api/movies/id?data=${movieId}`).then((res) => {
      res.json().then((res) => {
        console.log(res);
        setMovie(res);
      });
    });
  }, []);

  return (
    <Fragment>
      {movie && <BigImage image={movie.backdrop_path} title={movie.title} tagline={movie.tagline} />}
    </Fragment>
  );
};

export default MovieDetailPage;
