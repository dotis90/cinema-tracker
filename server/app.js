const path = require('path');
const express = require('express');

const app = express();

const movieRouter = require('./routes/movieRoutes');
const userRouter = require('./routes/userRoutes');
const authRouter = require('./routes/authRoutes');
const profileRouter = require('./routes/profileRoutes');
const favoriteRouter = require('./routes/favoriteRoutes')

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use('/api/users', userRouter);
app.use('/api/movies', movieRouter);
app.use('/api/auth', authRouter);
app.use('/api/profiles', profileRouter);
app.use('/api/favorite', favoriteRouter)

if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"))

    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "../client", "build", "index.html"))
    })
}

module.exports = app;
