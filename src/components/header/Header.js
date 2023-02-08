import { Stack } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
export default function Header() {
  return (
    <Stack direction="row" justifyContent="space-between" width="50%" alignItems="center" m="10px 30px">
      <Link to="/">
        <img alt='logo' className='header_img' src='https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/IMDB_Logo_2016.svg/2560px-IMDB_Logo_2016.svg.png' />
      </Link>
      <Link to="/movies/popular" className='header_link'>Popular</Link>
      <Link to="/movies/top-rated"  className='header_link'>Top rated</Link>
      <Link to="/movies/upcoming"  className='header_link'>Upcoming</Link>
    </Stack>
  )
}
