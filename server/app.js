const path = require('path');
const express = require('express');

const app = express();

const movieRouter = require('./routes/movieRoutes');

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use('/api/movies', movieRouter);

module.exports = app;