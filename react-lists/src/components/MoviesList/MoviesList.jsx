import { useState } from 'react'
import moviesData from './../../movies-data.json'
import MovieCard from '../MovieCard/MovieCard'

const MoviesList = () => {

    const [movies, setMovies] = useState(moviesData)
    const [showMovies, setShowMovies] = useState(true)

    const deleteMovie = movieIdToDelete => {

        const filteredMovies = movies.filter(elm => {
            return elm._id != movieIdToDelete
        })

        setMovies(filteredMovies)
    }

    const handleMoviesShow = () => setShowMovies(!showMovies)

    return (

        <section className="MoviesList">

            <h2>Movies List</h2>

            <button onClick={handleMoviesShow}>{showMovies ? 'Ocultar' : 'Mostar'} películas</button>

            {
                showMovies && movies.map(movie => {
                    return <MovieCard key={movie._id} movieInfo={movie} deleteMovie={deleteMovie} />
                })
            }
        </section>
    )
}

export default MoviesList