import React from 'react'
import './index.scss'
import { Link } from 'react-router-dom';
function Movie_Card({id,img, title, date}) {
  return (
    <Link to={`/movie/${id}`} className='movie-card'>
      <img src={img} alt="" />
      <h3>{title}</h3>
      <p>{date}</p>
    </Link>
  )
}

export default Movie_Card;