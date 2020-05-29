const express = require('express');
const movieController = require('../controllers/movieController');

const router = express.Router();

router.get('/popular', movieController.getPopularMovies);
router.get('/id', movieController.getSingleMovie);

module.exports = router;
