import { useState } from 'react'
import './App.css'
import Favorites from './pages/Favorites'
import Home from './pages/Home'
import { Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar'
import { MovieProvider } from './contexts/MovieContext'

function App() {
  const [count, setCount] = useState(0)

  return (
    <MovieProvider>
      <div>
        <NavBar></NavBar>
      
        <main className='main-content'>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="favorites" element={<Favorites/>}></Route>
          </Routes>
        </main>
      </div>
    </MovieProvider>
  )
}

export default App
