import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './Pages/Home'
import Movies from './pages/Movies'
import MovieDetail from './pages/MovieDetail'

function App() {
  return (
    <div className="min-h-screen bg-slate-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movie/:id" element={<MovieDetail />} />
      </Routes>
    </div>
  )
}

export default App