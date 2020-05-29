const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/popular', movieController.getPopularMovies);

module.exports = router;
