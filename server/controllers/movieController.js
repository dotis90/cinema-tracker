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
