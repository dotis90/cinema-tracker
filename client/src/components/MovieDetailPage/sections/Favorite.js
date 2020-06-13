import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Button from 'react-bootstrap/Button'

const Favorite = (props) => {

    const [favoriteNumber, setFavoriteNumber] = useState(0)
    const [favorited, setFavorited] = useState(false)

    const payload = {
        movieId: props.movieId,
        movieTitle: props.movieTitle,
        movieRunTime: props.movieRunTime
    }

    useEffect(() => {
        axios.post('/api/favorite/number', payload)
            .then(res => {
                if (res.data.success) {
                    setFavoriteNumber(res.data.favoriteNumber)
                } else {
                    alert('Failed to get favorite number')
                }
            })

        axios.post('/api/favorite/favorited', payload)
            .then(res => {
                if (res.data.success) {
                    console.log(res.data.favorited)
                    setFavorited(res.data.favorited)
                } else {
                    alert('Failed to get favorite info')
                }
            })
    }, [])

    const onClickFavorite = () => {
        console.log('clicked')
        if (favorited) {
            axios.post('/api/favorite/remove', payload)
                .then(res => {
                    if (res.data.success) {
                        setFavoriteNumber(favoriteNumber - 1)
                        setFavorited(!favorited)
                    } else {
                        alert('Failed to remove')
                    }
                })
        } else {

            axios.post('/api/favorite/add', payload)
                .then(res => {
                    if (res.data.success) {
                        setFavoriteNumber(favoriteNumber + 1)
                        setFavorited(!favorited)
                    } else {
                        alert('Failed to add')
                    }
                })
        }
    }

    return (

        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Button className="favButton" onClick={onClickFavorite} variant={favorited ? 'success' : 'danger'}>{favorited ? 'Added to Favorites ' : 'Add to Favorites '}{favoriteNumber}</Button>
        </div>

    )
}

export default Favorite