import "./Header.css"
import downArrow from "./assets/icons/down-arrow.jpg"


function Header(){

  return(
    <div class="header">
      <div class="left">
        <div class="logo">
          <span class="blue-text">Midland</span> Real-Estate
        </div>
      </div>
      <div className="middle">
        <div class="options">
          <div class="option">
            <p>Buy</p>
            <img src={downArrow} alt="" />
          </div>
          <div class="option">
            <p>Rent</p>
            <img src={downArrow} alt="" />
          </div>
          <div class="option">
            <p>Sell</p>
            <img src={downArrow} alt="" />
          </div>
          <div class="option">
            <p>About Us</p>
          </div>
          <div class="option">
            <p>Contact</p>
          </div>
        </div>
      </div>
      <div class="right">
        <div class="buttons">
          <button class="SignIn">Sign In</button>
          <button class="Explore">Start Exploring</button>
        </div>
      </div>
    </div>
  );

}

export default Header;