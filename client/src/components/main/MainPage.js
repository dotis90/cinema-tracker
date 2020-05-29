import React, { useState, useEffect } from 'react';
import MainImage from './sections/MainImage';

export const MainPage = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const endpoint = '/api/movies/popular';
    fetchMovies(endpoint);
  }, []);

  const fetchMovies = (path) => {
    fetch(path).then((res) =>
      res.json().then((res) => {
        console.log(res);
        setMovies([...movies, ...res]);
      })
    );
  };

  return (
    <div>
      {movies[0] && (
        <MainImage
          title1={movies[0].original_title}
          text1={movies[0].overview}
          image1={`https://image.tmdb.org/t/p/w1280/${movies[0].backdrop_path && movies[0].backdrop_path}`}
          title2={movies[1].original_title}
          text2={movies[1].overview}
          image2={`https://image.tmdb.org/t/p/w1280/${movies[1].backdrop_path && movies[1].backdrop_path}`}
          title3={movies[2].original_title}
          text3={movies[2].overview}
          image3={`https://image.tmdb.org/t/p/w1280/${movies[2].backdrop_path && movies[2].backdrop_path}`}
        />
      )}
    </div>
  );
};

export default MainPage;
