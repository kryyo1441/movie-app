import "../css/MovieCard.css"
import { useMovieContext } from "../contexts/MovieContext";
import { memo } from "react";

function MovieCard({ movie }) {

    const { addToFav, removeFromFav, isFavorite } = useMovieContext();
    const favorite = isFavorite(movie.id);

    const onFavClick = (e) => {
        e.preventDefault();
        if (favorite) {
            removeFromFav(movie.id);
        } else {
            addToFav(movie);
        }
    };

    return (
        <div className="movie-card">
            <div className="movie-poster">
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
                <div className="movie-overlay">
                    <button className={`favorite-btn ${favorite ? 'active' : ''}`} onClick={onFavClick} data-favorite-icon=""></button>
                </div>
            </div>

            <div className="movie-info">
                <h3>{movie.title}</h3>
                <p>{movie.release_date.split("-")[0]}</p>
            </div>
        </div>
    )
}

export default memo(MovieCard);