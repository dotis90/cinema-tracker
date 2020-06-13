const express = require('express');
const favoriteController = require('../controllers/favoriteController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/number', favoriteController.getFavoriteNumber);
router.post('/favorited', favoriteController.checkIfFavorite);
router.post('/add', favoriteController.addToFavorites);
router.post('/remove', favoriteController.removeFromFavorites);
router.get('/all', favoriteController.getAllFavorites);

module.exports = router;
