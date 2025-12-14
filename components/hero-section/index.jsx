import React from 'react'
import "./index.scss";
function Hero_Section() {
  return (
    <div className="hero-section">
      <div className="hero-section__contents">
        <h1>Welcome.</h1>
        <span>Millions of movies, TV shows and people to discover. Explore now.</span>
       <div className="search">
         <input type="text" placeholder='Search for a movie, tv show, person......' />
         <button>Search</button>
       </div>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default Hero_Section;