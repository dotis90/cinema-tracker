const express = require('express');
const userController = require('../controllers/userController');
const { check } = require('express-validator');

const router = express.Router();

router.post(
  '/',
  [
    check('name', 'Name is required').not().isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({ min: 8 }),
  ],
  userController.registerUser
);

module.exports = router;
