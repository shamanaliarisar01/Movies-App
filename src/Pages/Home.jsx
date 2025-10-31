import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { movieAPI } from '../services/api'
import MovieCard from '../components/MovieCard'

const Home = () => {
  const [featuredMovies, setFeaturedMovies] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMovies = async () => {
      try {
        const movies = await movieAPI.getPopularMovies()
        setFeaturedMovies(movies.slice(0, 12)) 
        setLoading(false)
      } catch (error) {
        console.error('Error loading movies:', error)
        setLoading(false)
      }
    }

    loadMovies()
  }, [])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading featured movies...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen">
      <section className="bg-gradient-to-br from-slate-900 to-slate-800 py-20">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-white mb-6">
            Welcome to MovieHub
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Discover amazing movies from various genres. Find your next favorite film.
          </p>
          <Link 
            to="/movies" 
            className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition duration-300 inline-block"
          >
            Explore All Movies
          </Link>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Featured Movies
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMovies.map(movie => (
              <MovieCard key={movie.id} movie={movie} />
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home