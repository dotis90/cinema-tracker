const Favorite = require('../models/Favorite')

// Get total number of times a movie has been 'favorited'

exports.getFavoriteNumber = (req, res) => {

    Favorite.find({ 'movieId': req.body.movieId })
        .exec((err, favorite) => {
            if (err) return res.status(400).send(err)
            res.status(200).json({ success: true, favoriteNumber: favorite.length })
        })
}

// Checks if the movie has already been 'favorited'

exports.checkIfFavorite = (req, res) => {

    Favorite.find({ 'movieId': req.body.movieId, 'userFrom': req.user })
        .exec((err, favorite) => {
            if (err) return res.status(400).send(err)

            let result = false
            if (favorite.length !== 0) {
                result = true
            }

            res.status(200).json({ success: true, favorited: result })
        })

}

// Add to Favorites list

exports.addToFavorites = (req, res) => {

    const favorite = new Favorite(req.body)

    favorite.save((err, doc) => {
        if (err) return res.json({ success: false, err })
        return res.status(200).json({ success: true, doc })
    })

}

// Remove from Favorites List

exports.removeFromFavorites = (req, res) => {

    Favorite.findOneAndDelete({ 'movieId': req.body.movieId, 'userFrom': req.user })
        .exec((err, doc) => {
            if (err) return res.status(400).json({ success: false, err })
            res.status(200).json({ success: true, doc })
        })

}

// Get all movies in favorite list

exports.getAllFavorites = (req, res) => {
    Favorite.find({ 'userFrom': req.user })
        .exec((err, favorites) => {
            if (err) return res.status(400).send(err)
            return res.status(200).json({ success: true, favorites })
        })
}