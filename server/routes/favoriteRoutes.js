const express = require('express');
const favoriteController = require('../controllers/favoriteController');
const auth = require('../middleware/auth');

const router = express.Router();

router.post('/number', auth, favoriteController.getFavoriteNumber);
router.post('/favorited', auth, favoriteController.checkIfFavorite);
router.post('/add', auth, favoriteController.addToFavorites);
router.post('/remove', auth, favoriteController.removeFromFavorites);
router.get('/all', auth, favoriteController.getAllFavorites);

module.exports = router;
