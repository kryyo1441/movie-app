import './App.css'
import MovieCard from './components/MovieCard'

function App() {
  return (
    <>
      <MovieCard movie={{ title: "my film", release_date: "2024", url: "poster.jpg" }} />
    </>
  )
}

export default App
