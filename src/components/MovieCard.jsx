import React from 'react'
import { Link } from 'react-router-dom'
import { movieAPI } from '../services/api'

const MovieCard = ({ movie }) => {
  const imageUrl = movieAPI.getImageUrl(movie.poster_path)
  const rating = movie.vote_average ? movie.vote_average.toFixed(1) : 'N/A'
  const year = movie.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'

  return (
    <div className="movie-card bg-slate-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl border border-slate-700">
      <Link to={`/movie/${movie.id}`}>
        <img 
          src={imageUrl} 
          alt={movie.title}
          className="w-full h-80 object-cover"
          onError={(e) => {
            e.target.src = 'https://via.placeholder.com/500x750/1e293b/ffffff?text=No+Image';
          }}
        />
      </Link>
      
      <div className="p-4">
        <Link to={`/movie/${movie.id}`}>
          <h3 className="text-lg font-bold text-white mb-2 hover:text-red-400 transition duration-300 line-clamp-1">
            {movie.title}
          </h3>
        </Link>
        
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-400">{year}</span>
          <span className="text-sm text-yellow-400 font-semibold">⭐ {rating}</span>
        </div>
        
        <p className="text-gray-400 text-sm line-clamp-2">
          {movie.overview}
        </p>
        
        <div className="mt-3">
          <span className="inline-block bg-slate-700 text-gray-300 text-xs px-2 py-1 rounded">
            {movie.genre || 'Movie'}
          </span>
        </div>
      </div>
    </div>
  )
}

export default MovieCard