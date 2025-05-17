import "../css/Favorites.css"
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
    const { favorites } = useMovieContext();

    if (favorites.length > 0) {
        return (
            <>
                <div className="favorites">
                    <h2>Favourites</h2>
                    <p>Your favorite movies</p>
                </div>
                <div className="favorites-grid">
                    {favorites.map(movie => (
                        <MovieCard movie={movie} key={movie.id} />
                    ))}
                </div>
            </>
        )
    }

    return (
        <div className="favorites-empty">
            <h2>Favourites</h2>
            <p>No favorite movies yet</p>
        </div>
    )
}

export default Favourites