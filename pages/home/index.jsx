import React from "react";
import Header from "../../components/header";
import Hero_Section from "../../components/hero-section";
import Carousel from "../../components/carousel";

function Home() {
  return (
    <div>
      <Header />
      <Hero_Section />
      <Carousel
        heading={"Trending"}
        url="https://api.themoviedb.org/3/trending/all/week?api_key=a10ee5569194b352bcca20840b7f8a32&language=en-US"
      />
      <Carousel
        heading={"Comedy Movies"}
        url="https://api.themoviedb.org/3/discover/movie?api_key=a10ee5569194b352bcca20840b7f8a32&with_genres=35"
      />
      <Carousel
        heading={"Top Rated"}
        url="https://api.themoviedb.org/3/movie/top_rated?api_key=a10ee5569194b352bcca20840b7f8a32&language=en-US"
      />
      <Carousel
        heading={"Action Movies"}
        url="https://api.themoviedb.org/3/discover/movie?api_key=a10ee5569194b352bcca20840b7f8a32&with_genres=28"
      />
      <Carousel
        heading={"Horror movies"}
        url="https://api.themoviedb.org/3/discover/movie?api_key=a10ee5569194b352bcca20840b7f8a32&with_genres=27"
      />
      <Carousel
        heading={"Romance movies"}
        url="https://api.themoviedb.org/3/discover/movie?api_key=a10ee5569194b352bcca20840b7f8a32&with_genres=10749"
      />
    </div>
  );
}

export default Home;
