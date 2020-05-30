const express = require('express');
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const profileController = require('../controllers/profileController');

const router = express.Router();

router.get('/', profileController.getAllProfiles);
router.get('user/:user_id', profileController.getProfileById);
router.get('/me', auth, profileController.getMyProfile);
router.post(
  '/',
  auth,
  [
    check('genres', 'Genres is required').not().isEmpty(),
    check('bio', 'About me section is required').not().isEmpty(),
  ],
  profileController.createOrEditProfile
);

module.exports = router;
