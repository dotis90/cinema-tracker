const axios = require('axios');

exports.getPopularMovies = (req, res) => {
  let currentPage = req.query.data;

  return axios
    .get(
      `https://api.themoviedb.org/3/movie/popular?api_key=${process.env.MOVIE_API_KEY}&language=en-US&page=${currentPage}`
    )
    .then((response) => {
      const results = response.data;
      res.json(results);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.getSingleMovie = (req, res) => {
  const movieId = req.query.data;

  return axios
    .get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${process.env.MOVIE_API_KEY}&language=en-US`)
    .then((response) => {
      const results = response.data;
      res.json(results);
    })
    .catch((error) => {
      console.log(error);
    });
};

exports.getCredits = (req, res) => {
  const movieId = req.query.data;
  return axios
    .get(
      `https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=${process.env.MOVIE_API_KEY}&language=en-US`
    )
    .then((response) => {
      const results = response.data;
      res.json(results);
    })
    .catch((error) => {
      console.log(error);
    });
};
