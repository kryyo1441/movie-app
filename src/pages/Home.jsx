import { useState, useEffect, use } from "react";
import "../css/Home.css";
import { SearchMovies, getPopularMovies } from "../services/api";
import MovieCard from "../components/MovieCard";
function Home() {

    const [searchQuery, setSearchQuery] = useState("");
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);


    useEffect(() => {
        const loadPopularMovies = async () => {
            try {
                const popularMovies = await getPopularMovies();
                setMovies(popularMovies);
            } catch (err) {
                console.log(err);
                setError("Failed to load");
            } finally {
                setLoading(false);
            }
        };

        loadPopularMovies();
    }, [])

    // Remove this hardcoded movies array, as movies are fetched from API

    const onSearch = (e) => {
        e.preventDefault()
        alert(searchQuery);
    }

    return (
        <div className="home">

            <form onSubmit={onSearch} className="search-form">
                <input type="text" placeholder="Search for movies..." className="search-input" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                <button type="submit" className="search-button">Search</button>

            </form>
            <div className="movie-grid">
                {movies.map(movie =>
                   movie.title.toLowerCase().startsWith(searchQuery) && ( <MovieCard movie={movie} key={movie.id} />)
                )}
            </div>
        </div>
    )
}

export default Home;