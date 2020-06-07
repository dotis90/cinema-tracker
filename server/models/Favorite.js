const mongoose = require('mongoose');

const FavoriteSchema = new mongoose.Schema({
    userFrom: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    movieId: {
        type: String,
    },
    movieTitle: {
        type: String
    },
    movieRunTime: {
        type: String
    }
})

module.exports = Favorite = mongoose.model('favorite', FavoriteSchema);