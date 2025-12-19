// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import "./index.scss";

// import required modules
import { Navigation } from "swiper/modules";
import Movie_Card from "../movie-card";
import axios from "axios";
import { useEffect, useState } from "react";

export default function Carousel({ heading, url}) {
  const [movies, setMovies] = useState([]);

  const fetchMovies = async () => {
    const response = await axios.get(
      url
    );
    console.log(response.data.results);
    setMovies(response.data.results);
  };
  useEffect(() => {
    fetchMovies();
  }, []);

  return (
    <div className="mySwiper">
      <h2>{heading}</h2>
      <>
        <Swiper
          navigation={true}
          modules={[Navigation]}
          slidesPerView={5}
          spaceBetween={15}
        >
          {movies.map((movie) => (
            <SwiperSlide>
              <Movie_Card 
              img = {`https://image.tmdb.org/t/p/original/${movie.poster_path}.jpg`}
              title={movie.title ? movie.title : movie.name}
              date={movie.release_date ? movie.release_date : movie.first_air_date}
              id={movie.id}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </>
    </div>
  );
}
