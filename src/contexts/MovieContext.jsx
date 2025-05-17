import { createContext, useContext, useState, useCallback, useMemo } from 'react';

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export function MovieProvider({ children }) {
    const [favorites, setFavorites] = useState([]);

    const addToFav = useCallback((movie) => {
        setFavorites(prev => [...prev, movie]);
    }, []);

    const removeFromFav = useCallback((movieId) => {
        setFavorites(prev => prev.filter(movie => movie.id !== movieId));
    }, []);

    const isFavorite = useCallback((movieId) => {
        return favorites.some(movie => movie.id === movieId);
    }, [favorites]);

    const value = useMemo(() => ({
        favorites,
        addToFav,
        removeFromFav,
        isFavorite
    }), [favorites, addToFav, removeFromFav, isFavorite]);

    return (
        <MovieContext.Provider value={value}>
            {children}
        </MovieContext.Provider>
    );
}