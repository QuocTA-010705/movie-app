import React, { useEffect, useState } from "react";
import Header from "../../components/header";
import { useParams } from "react-router-dom";
import "./index.scss";
import axios from "axios";
import Movie_Card from "../../components/movie-card";
function Search_Page() {
  const { keyWord } = useParams();
  console.log(keyWord);
  const [movies, setMovies] = useState([]);
  const fetchSearchMovies = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/search/multi?query=${keyWord}&page=1&api_key=a10ee5569194b352bcca20840b7f8a32`
    );
    console.log(response.data.results);
    setMovies(response.data.results);
  };
  useEffect(() => {
    fetchSearchMovies();
  }, []);
  const formatDate = (dateString) => {
    if (!dateString) return "N/A";
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  };
  return (
    <div className="container_wrapper">
      <Header />
      <div className="main_contents">
        <div className="page_title">
          <h1>The result search of '{keyWord}'</h1>
        </div>
        <div className="movies_search">
          {movies.map((movie) => (
            <Movie_Card
              img={movie.poster_path}
              title={movie.title ? movie.title : movie.name}
              date={formatDate(
                movie.release_date ? movie.release_date : movie.first_air_date
              )}
              id={movie.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Search_Page;
