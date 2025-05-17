# Movie App

A React-based movie application that allows users to browse popular movies and manage their favorites.

## Features

- Browse popular movies from TMDB API
- Search for specific movies
- Add/remove movies to favorites
- Responsive grid layout
- Real-time favorites management using Context API
- Optimized rendering with React.memo

## Tech Stack

- React + Vite
- React Router for navigation
- TMDB API for movie data
- Context API for state management

## Setup

1. Clone the repository
2. Install dependencies:
```bash
npm install
```
3. Create a `.env` file with your TMDB API key:
```bash
VITE_TMDB_API_KEY=your_api_key_here
```
4. Start the development server:
```bash
npm run dev
```

## Project Structure

```
src/
├── components/
│   ├── MovieCard.jsx
│   └── NavBar.jsx
├── contexts/
│   └── MovieContext.jsx
├── css/
│   ├── MovieCard.css
│   └── Favorites.css
├── pages/
│   ├── Home.jsx
│   └── Favorites.jsx
├── services/
│   └── api.js
└── App.jsx
```

## API Integration

The app uses the TMDB API to fetch:
- Popular movies
- Movie search results
- Movie posters and details
