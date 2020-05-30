const { validationResult } = require('express-validator');
const Profile = require('../models/Profile');
const User = require('../models/User');

// Get current user's profile

exports.getMyProfile = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate('user', ['name']);

    if (!profile) {
      return res.status(400).json({ msg: 'There is no profile for this user' });
    }

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Create or update current user's profile

exports.createOrEditProfile = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  const { location, genres, bio } = req.body;

  const profileFields = {
    user: req.user.id,
    location,
    genres: Array.isArray(genres) ? genres : genres.split(',').map((genre) => ' ' + genre.trim()),
    bio,
  };
  try {
    let profile = await Profile.findOneAndUpdate(
      { user: req.user.id },
      { $set: profileFields },
      { new: true, upsert: true }
    );
    res.json(profile);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get all profiles

exports.getAllProfiles = async (req, res) => {
  try {
    const profiles = await Profile.find().populate('user', ['name']);
    res.json(profiles);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get profile by ID

exports.getProfileById = async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.params.user_id,
    }).populate('user', ['name']);

    if (!profile) return res.status(400).json({ msg: 'Profile not found' });

    res.json(profile);
  } catch (err) {
    console.error(err.message);
    if (err.kind == 'ObjectId') {
      return res.status(400).json({ msg: 'Profile not found' });
    }
    res.status(500).send('Server Error');
  }
};
