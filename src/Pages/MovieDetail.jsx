import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { movieAPI } from '../services/api'

const MovieDetail = () => {
  const { id } = useParams()
  const [movie, setMovie] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadMovie = async () => {
      try {
        const movieData = await movieAPI.getMovieById(id)
        setMovie(movieData)
        setLoading(false)
      } catch (error) {
        console.error('Error loading movie:', error)
        setLoading(false)
      }
    }

    loadMovie()
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-white text-xl">Loading movie details...</div>
      </div>
    )
  }

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">Movie not found</div>
          <Link 
            to="/movies" 
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-lg"
          >
            Back to Movies
          </Link>
        </div>
      </div>
    )
  }

  const imageUrl = movieAPI.getImageUrl(movie.backdrop_path, 'w1280')
  const posterUrl = movieAPI.getImageUrl(movie.poster_path)
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'

  return (
    <div className="min-h-screen">
      <div 
        className="h-96 bg-cover bg-center relative"
        style={{ backgroundImage: `url(${imageUrl})` }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 -mt-48 relative z-10">
        <Link 
          to="/movies" 
          className="inline-flex items-center text-red-400 hover:text-red-300 mb-6 transition duration-300"
        >
          ← Back to Movies
        </Link>

        <div className="bg-slate-800 rounded-lg overflow-hidden shadow-2xl">
          <div className="md:flex">
            <div className="md:w-1/3 p-8">
              <img 
                src={posterUrl} 
                alt={movie.title}
                className="w-full rounded-lg shadow-lg"
              />
            </div>
            
            <div className="md:w-2/3 p-8">
              <h1 className="text-4xl font-bold text-white mb-4">{movie.title}</h1>
              
              <div className="flex flex-wrap items-center gap-4 mb-6">
                <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {movie.genre || 'Movie'}
                </span>
                <span className="text-yellow-400 text-lg font-semibold">
                  ⭐ {movie.vote_average?.toFixed(1) || 'N/A'}/10
                </span>
                <span className="text-gray-300">{year}</span>
                <span className="text-gray-300">{movie.runtime} min</span>
              </div>

              <div className="mb-6">
                <h2 className="text-2xl font-semibold text-white mb-3">Overview</h2>
                <p className="text-gray-300 text-lg leading-relaxed">
                  {movie.overview}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MovieDetail