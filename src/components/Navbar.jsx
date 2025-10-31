import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="bg-slate-800 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold text-red-500">🎬 MovieHub</span>
          </Link>
          
          <div className="flex space-x-6">
            <Link 
              to="/" 
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300"
            >
              Home
            </Link>
            <Link 
              to="/movies" 
              className="text-gray-300 hover:text-white px-3 py-2 rounded-md transition duration-300"
            >
              Movies
            </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default Navbar