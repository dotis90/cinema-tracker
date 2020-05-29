const express = require('express');
const axios = require('axios');

exports.getPopularMovies = (req, res) => {
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=1`
    )
    .then((response) => {
      const results = response.data.results;
      res.json(results);
    })
    .catch((error) => {
      console.log(error);
    });
};

// .then(({ data }) => {
//     console.log(data.results);
//     res.json({ data });
//   })
//   .catch((error) => {
//     console.log(error);
//   });

// const fetchMovies = (path) => {
//     fetch(path).then((res) =>
//       res.json().then(({ data }) => {
//         console.log(data);
//         setMovies([...movies, ...data.results]);
//       })
//     );
//   };
