import React, { Fragment, useState, useEffect } from 'react';
import { Container, Row } from 'react-bootstrap';
import ImageCarousel from './sections/MainImage';
import MovieCard from './sections/MovieCard';

export const MainPage = () => {
  const [movies, setMovies] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    const endpoint = `/api/movies/popular?data=${1}`;
    fetchMovies(endpoint);
  }, []);

  const fetchMovies = (path) => {
    fetch(path).then((res) =>
      res.json().then((res) => {
        setMovies([...movies, ...res.results]);
        setCurrentPage(res.page);
      })
    );
  };

  const handleClick = () => {
    console.log(currentPage);
    const endpoint = `/api/movies/popular?data=${currentPage + 1}`;
    fetchMovies(endpoint);
  };

  return (
    <div>
      {movies[0] && (
        <ImageCarousel
          title1={movies[0].title}
          text1={movies[0].overview}
          image1={`https://image.tmdb.org/t/p/w1280/${movies[0].backdrop_path && movies[0].backdrop_path}`}
          title2={movies[1].title}
          text2={movies[1].overview}
          image2={`https://image.tmdb.org/t/p/w1280/${movies[1].backdrop_path && movies[1].backdrop_path}`}
          title3={movies[2].title}
          text3={movies[2].overview}
          image3={`https://image.tmdb.org/t/p/w1280/${movies[2].backdrop_path && movies[2].backdrop_path}`}
        />
      )}

      <h1 style={{ textAlign: 'center' }}>Popular Movies</h1>
      <Container fluid>
        <Row>
          {movies &&
            movies.map((movie, index) => (
              <Fragment key={index}>
                <MovieCard
                  title={movie.title}
                  image={movie.poster_path && `https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  release={movie.release_date}
                  movieId={movie.id}
                />
              </Fragment>
            ))}
        </Row>
      </Container>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button onClick={handleClick}>Load More</button>
      </div>
    </div>
  );
};

export default MainPage;
