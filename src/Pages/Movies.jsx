import React, { useState, useEffect } from 'react'
import { movieAPI } from '../services/api'
import MovieCard from '../components/MovieCard'
import SearchBar from '../components/SearchBar'

const Movies = () => {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(true)
  const [searchResults, setSearchResults] = useState(null)

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const allMovies = await movieAPI.getPopularMovies()
        setMovies(allMovies)
        setLoading(false)
      } catch (error) {
        console.error('Error loading movies:', error)
        setLoading(false)
      }
    }

    loadMovies()
  }, [])

  const handleSearch = async (query) => {
    setLoading(true)
    try {
      const results = await movieAPI.searchMovies(query)
      setSearchResults(results)
    } catch (error) {
      console.error('Search error:', error)
    }
    setLoading(false)
  }

  const handleClearSearch = () => {
    setSearchResults(null)
  }

  const displayMovies = searchResults || movies

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading movies...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            {searchResults ? 'Search Results' : 'All Movies'}
          </h1>
          <p className="text-xl text-gray-300">
            {searchResults 
              ? `Found ${displayMovies.length} movies`
              : `Browse ${displayMovies.length} amazing movies`
            }
          </p>
        </div>

        <SearchBar 
          onSearch={handleSearch}
          onClear={handleClearSearch}
        />

        {searchResults && (
          <div className="text-center mb-8">
            <button
              onClick={handleClearSearch}
              className="bg-slate-600 hover:bg-slate-700 text-white px-6 py-3 rounded-lg transition duration-300"
            >
              Clear Search
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          {displayMovies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Movies