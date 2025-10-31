import React, { useState } from 'react'

const SearchBar = ({ onSearch, onClear }) => {
  const [query, setQuery] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (query.trim()) {
      onSearch(query.trim())
    }
  }

  const handleClear = () => {
    setQuery('')
    onClear()
  }

  return (
    <div className="w-full max-w-2xl mx-auto mb-8">
      <form onSubmit={handleSubmit} className="relative">
        <div className="flex items-center bg-slate-800 rounded-lg overflow-hidden shadow-lg">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search movies by title, genre, or description..."
            className="flex-1 px-6 py-4 bg-slate-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 text-lg"
          />
          
          <button
            type="submit"
            className="bg-red-500 hover:bg-red-600 text-white px-6 py-4 font-semibold transition duration-300"
          >
            Search
          </button>
        </div>

        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-32 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-white"
          >
            ✕
          </button>
        )}
      </form>
    </div>
  )
}

export default SearchBar