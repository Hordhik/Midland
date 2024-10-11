import "./Hero.css"
import location from "./assets/Hero/location.png"
import building from "./assets/Hero/building.png"
import dollar from "./assets/Hero/dollar.png"
import filter from "./assets/Hero/filter.png"
import downArrow from "./assets/icons/down-arrow.jpg"
import trending from "./assets/icons/trending.png"

function Hero(){
  
  return(
    <div class="hero">
      <div class="title">
        <p>Find Your Ideal <span class="blue-text">Real Estate</span> or Flat to Rent</p>
      </div>
      <div className="search-options">
        <div className="search-option">
        <img src={location} alt="" />
        <div className="info">
          <div className="name">
            <p>Location</p>
          </div>
          <div className="dropdown">
            <p>Search Location</p>
          </div>
        </div>
        </div>
        <div className="search-option">
        <img src={building} alt="" />
        <div className="info">
          <div className="name">
            <p>Property Type</p>
          </div>
          <div className="dropdown">
            <p>Apartments</p>
          </div>
        </div>
        </div>
        <div className="search-option">
        <img src={dollar} alt="" />
        <div className="info">
          <div className="name">
            <p>Pricing</p>
          </div>
          <div className="dropdown">
            <p>Your Budget</p>
          </div>
        </div>
        </div>
        <div className="buttons">
          <div className="more">
          <img src={filter} alt="" />
            <p>More</p>
           <img src={downArrow} alt="" />
          </div>
          <div className="search-button">
            <p>Search</p>
          </div>
        </div>
      </div>
      <div className="trends">
        <div className="popularity">
          <img src={trending} alt="" />
          <p>Popular Localities</p>
        </div>
        <div className="trend">
          <p>Mangalagiri</p>
        </div>
        <div className="trend">
          <p>Guntur Downtown</p>
        </div>
        <div className="trend">
          <p>Amaravati</p>
        </div>
        <div className="trend">
          <p>Bhavani Islands</p>
        </div>
        <div className="trend">
          <p>Gannavaram</p>
        </div>
        <div className="trend">
          <p>CBD</p>
        </div>
      </div>
    </div>
  );

}

export default Hero;