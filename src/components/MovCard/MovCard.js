import React from 'react'
import { Link } from 'react-router-dom'
import './MovCard.css'

export default function Card({mov}) {
    return (
      <Link to={`/movie/${mov.id}`} style={{textDecoration:"none", color:"white"}}>
      <div className="cards">
          <img alt='img' className="cards__img" src={`https://image.tmdb.org/t/p/original${mov?mov.poster_path:""}` } />
          <div className="cards__overlay">
              <div className="card__title">{mov?mov.original_title:""}</div>
              <div className="card__runtime">
                  {mov?mov.release_date:""}
                  <span className="card__rating">{mov?mov.vote_average:""}</span>
              </div>
              <div className="card__description">{mov ? mov.overview : ""}</div>
          </div>
      </div>
  </Link>
    )
}

