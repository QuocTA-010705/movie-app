import React, { useState } from 'react'
import "./index.scss";
import { useNavigate } from 'react-router-dom';
function Hero_Section() {
  const[keyWord,setKeyWord] = useState("");
  const navigate = useNavigate();
  const handleSeacrh = () =>{
    if(!keyWord.trim()) return;
    navigate(`/search/${keyWord}`);
  }
  return (
    <div className="hero-section">
      <div className="hero-section__contents">
        <h1>Welcome.</h1>
        <span>Millions of movies, TV shows and people to discover. Explore now.</span>
       <div className="search">
         <input 
         value={keyWord}
         onChange={(event)=>setKeyWord(event.target.value)}
         type="text" placeholder='Search for a movie, tv show, person......' />
         <button onClick={handleSeacrh}>Search</button>
       </div>
      </div>
      <div className="overlay"></div>
    </div>
  )
}

export default Hero_Section;