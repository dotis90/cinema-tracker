const path = require('path');
const express = require('express');

const app = express();

const movieRouter = require('./routes/movieRoutes');
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use('/api/users', userRouter);
app.use('/api/movies', movieRouter);
app.use('/api/auth', authRouter);

module.exports = app;
