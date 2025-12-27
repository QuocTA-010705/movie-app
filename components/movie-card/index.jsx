import React from "react";
import "./index.scss";
import { Link } from "react-router-dom";
function Movie_Card({ id, img, title, date }) {
  return (
    <Link to={`/movie/${id}`} className="movie-card">
      <img
        src={
          img
            ? `https://image.tmdb.org/t/p/original${img}`
            : "https://movie-eta-sage.vercel.app/assets/no-poster-af8294eb.png"
        }
        alt=""
      />
      <h3>{title}</h3>
      <p>{date}</p>
    </Link>
  );
}

export default Movie_Card;
