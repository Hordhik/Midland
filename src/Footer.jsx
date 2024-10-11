import "./Footer.css";
import building1 from "./assets/footer/1.png";
import building2 from "./assets/footer/2.png";
import building3 from "./assets/footer/3.png";
import building4 from "./assets/footer/4.png";
import building5 from "./assets/footer/5.png";
import building6 from "./assets/footer/6.png";
import linkdin from "./assets/footer/social/linkdin.png"
import twitter from "./assets/footer/social/twitter.png"
import instagram from "./assets/footer/social/instagram.png"
import facebook from "./assets/footer/social/facebook.png"
import youtube from "./assets/footer/social/youtube.png"

function Footer(){



  return(
    <div className="footer">
      <div className="head">
        <img src={building1} alt="" />
        <img src={building2} alt="" />
        <img src={building3} alt="" />
        <img src={building4} alt="" />
        <img src={building5} alt="" />
        <img src={building6} alt="" />
        <img src={building1} alt="" />
        <img src={building2} alt="" />
        <img src={building3} alt="" />
        <img src={building4} alt="" />
        <img src={building5} alt="" />
        <img src={building6} alt="" />
      </div>
      <div className="main">
        <div className="links">
          <div className="about">
            <p>About MidLand Real-Estate</p>
            <div className="discription">
              <p>With its revolutionary next-gen services customized specifically to address the real estate industry like Property Advice, New Projects, Rates & Trends</p>
            </div>
          </div>
          <div className="navigation">
            <p>Navigation</p>
            <div className="navigators">
              <div className="navigate">Buy</div>
              <div className="navigate">Sell</div>
              <div className="navigate">Rent</div>
              <div className="navigate">Contact</div>
            </div>
          </div>
        </div>
        <div className="bottom">
          <div className="logos">
            <img src={linkdin} alt="" />
            <img src={twitter} alt="" />
            <img src={instagram} alt="" />
            <img src={facebook} alt="" />
            <img src={youtube} alt="" />
          </div>
          <div className="reserved">
            <p>© 2024 Midland Real-Estate. All rights reserved.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer;

