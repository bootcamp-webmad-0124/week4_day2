const MovieCard = props => {

    const movie = props.movieInfo
    const deleteMovie = props.deleteMovie

    return (
        <article className="MovieCard">
            <h3>{movie.title}</h3>
            <p>Director: {movie.director}</p>
            <p>Rating: {movie.IMDBRating}</p>

            <p>{movie.hasOscars ? 'Tuvo Oscars! 🏆🏆' : 'No tuvo Oscars! 💩💩'}</p>

            <button className="btn-delete" onClick={() => deleteMovie(movie._id)}>Delete </button>
        </article>
    )
}

export default MovieCard