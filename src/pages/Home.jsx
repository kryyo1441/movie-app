import { useState } from "react";
import MovieCard from "../components/MovieCard"
function Home() {

    const [searchQuery, setSearchQuery] = useState("");

    const movies = [
        { id: 1, title: "john", description: "Description 1", release_date: "2024", url: "https://via.placeholder.com/150" },
        { id: 2, title: "Mohn", description: "Description 2", release_date: "2022", url: "https://via.placeholder.com/150" },
        { id: 3, title: "lophn", description: "Description 3", release_date: "2021", url: "https://via.placeholder.com/150" },
        { id: 4, title: "lawn", description: "Description 4", release_date: "2020", url: "https://via.placeholder.com/150" }
    ]

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

export default Home