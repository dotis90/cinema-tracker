import React, { useEffect, useState } from 'react';
import BigImage from './sections/BigImage';

export const MovieDetailPage = (props) => {
  const [movie, setMovie] = useState([]);
  const movieId = props.match.params.movieId;

  useEffect(() => {
    fetch(`/api/movies/id?data=${movieId}`).then((res) => {
      res.json().then((res) => {
        console.log(res);
        setMovie([res]);
      });
    });
  }, []);

  return <div>Hello</div>;
};

export default MovieDetailPage;
