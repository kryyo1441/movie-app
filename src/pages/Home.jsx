import MovieCard from "../components/MovieCard" // Fixed import path

function Home() {
    const movies = [
        { id: 1, title: "Movie 1", description: "Description 1", release_date: "2024" },
        { id: 2, title: "Movie 2", description: "Description 2", release_date: "2022" },
        { id: 3, title: "Movie 3", description: "Description 3", release_date: "2021" },
        { id: 4, title: "Movie 4", description: "Description 4", release_date: "2020" }
    ]

    return (
        <div className="home">
            <div className="movie-grid">
                {movies.map(movie => 
                    <MovieCard movie={movie} key={movie.id} />
                )}
            </div>
        </div>
    )
}

export default Home