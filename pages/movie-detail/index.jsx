import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

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
  return <div>
    <h1>{movie?.original_title}</h1>
  </div>;
}

export default Movie_Detail;
