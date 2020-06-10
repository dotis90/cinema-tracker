import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

const FavoritesPage = () => {
    let [favoriteMovies, setFavoriteMovies] = useState([])

    useEffect(() => {
        fetchFavoriteMovies()
    }, [])

    const fetchFavoriteMovies = () => {
        axios.get('api/favorite/all')
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.favorites)
                    setFavoriteMovies(res.data.favorites)
                } else {
                    alert('Sign in to use this feature.')
                }
            })
    }

    const onClickRemove = (movieId) => {
        const payload = { movieId }

        axios.post('/api/favorite/remove', payload)
            .then(res => {
                if (res.data.success) {
                    fetchFavoriteMovies()
                } else {
                    alert('Failed to remove from favorites')
                }
            })
    }

    const renderData = favoriteMovies.map((movie, index) => {
        return (
            <tr key={index}>
                <td><Link to={`/movies/${movie.movieId}`}>{movie.movieTitle}</Link></td>
                <td>{movie.movieRunTime} minutes</td>
                <td><Button variant="danger" style={{ width: '100%' }} onClick={() => onClickRemove(movie.movieId)}>Remove</Button></td>
            </tr>
        )
    })


    return (
        <div style={{ width: '85%', height: '80vh', margin: '3rem auto' }}>

            <h1>Your Favorite Movies</h1>

            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Run Time</th>
                        <th>Remove from Favorites</th>
                    </tr>
                </thead>
                <tbody>
                    {renderData}
                </tbody>
            </table>
        </div>
    )

}

export default FavoritesPage