import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./index.scss";
import Header from "../../components/header";
import Tags from "../../components/tags";
import "react-circular-progressbar/dist/styles.css";
import { buildStyles, CircularProgressbar } from "react-circular-progressbar";
import { GoPlay } from "react-icons/go";

function Movie_Detail() {
  const { movieId } = useParams();
  const [movie, setMovie] = useState({});
  console.log(movieId);
  //https://api.themoviedb.org/3/movie/1087192?api_key=a10ee5569194b352bcca20840b7f8a32
  const fetchMovie_detail = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=a10ee5569194b352bcca20840b7f8a32`
    );
    console.log(response.data);
    setMovie(response.data);
  };
  useEffect(() => {
    fetchMovie_detail();
  }, [movieId]);
  return (
    <div className="container_wrapper">
      <Header />
      <div className="container">
        <div className="background">
          <img
            src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`}
            alt=""
          />
        </div>
        <div className="contents">
          <div className="contents__left">
            <img
              src={`https://image.tmdb.org/t/p/original/${movie?.poster_path}`}
              alt=""
            />
          </div>
          <div className="contents__right">
            <h1>{movie?.title}</h1>
            <p className="tagline">{movie?.tagline}</p>
            {movie.genres?.map((genre) => (
              <Tags key={genre.id}>{genre.name}</Tags>
            ))}
            <div className="row">
              <div className="circularRating">
                <CircularProgressbar
                  value={movie?.vote_average}
                  maxValue={10}
                  background
                  text={movie?.vote_average?.toFixed(1)}
                  styles={buildStyles({
                    textColor: "#fff",
                    backgroundColor: "#041226",
                    pathColor:
                      movie?.vote_average < 5
                        ? "red"
                        : movie?.vote_average < 7
                        ? "orange"
                        : "green",
                  })}
                />
              </div>
              <div className="playbtn">
                <GoPlay className="icon" />
                <span>Watch trailer</span>
              </div>
            </div>
            <div className="overview">
              <h1>Overview</h1>
              <div className="description">
                {movie?.overview}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="overlay"></div>
    </div>
  );
}

export default Movie_Detail;
