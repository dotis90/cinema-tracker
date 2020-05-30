const express = require('express');
const auth = require('../middleware/auth');
const { check } = require('express-validator');
const authController = require('../controllers/authController');

const router = express.Router();

router.get('/', auth, authController.getTokenByUser);
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists(),
  ],
  authController.authenticateAndGetToken
);

module.exports = router;
