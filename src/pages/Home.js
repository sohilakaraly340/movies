import React from 'react'
import MovieList from '../components/movielist/MovieList'
import SlidShow from '../components/slidshow/SlidShow'

export default function home() {
  return (
    <div>
      <SlidShow/>
      <MovieList/>
    </div>
  )
}
