import "./FeaturedLocation.css"
import imageV from "./assets/Featured Location/vijaywada.jpeg";
import imageA from "./assets/Featured Location/amravathi.jpeg";
import imageG from "./assets/Featured Location/guntur.jpeg";
import imageM from "./assets/Featured Location/mangalagiri.png";
import imageB from "./assets/Featured Location/bensent-road.jpeg";
import rightArrow from "./assets/icons/right-arrow.png"

function FeaturedLocation(){
  return(
    <div className="featured-locations">
      <div className="title">
        <p>Featured Locations</p>
        <div className="sub-title">
          <p>The Best Locations To Buy Or Rent</p>
          <p className="see-all">See All Locations 
            <img src={rightArrow} alt="" />
          </p>
        </div>
      </div>
      <div className="locations">
        <div className="location">
          <img src={imageV} alt="" />
          <div className="info">
            <div className="place">
              <p>Vijaywada</p>
            </div>
            <div className="no-of-properties">
              <p>12,900 Properties</p>
            </div>
          </div>
        </div>
        <div className="location">
          <img src={imageA} alt="" />
          <div className="info">
            <div className="place">
              <p>Amaravati</p>
            </div>
            <div className="no-of-properties">
              <p>60,101 Properties</p>
            </div>
          </div>
        </div>
        <div className="location">
          <img src={imageG} alt="" />
          <div className="info">
            <div className="place">
              <p>Guntur</p>
            </div>
            <div className="no-of-properties">
              <p>71,002 Properties</p>
            </div>
          </div>
        </div>
        <div className="location">
          <img src={imageM} alt="" />
          <div className="info">
            <div className="place">
              <p>Mangalagri</p>
            </div>
            <div className="no-of-properties">
              <p>2,100 Properties</p>
            </div>
          </div>
        </div>
        <div className="location">
          <img src={imageB} alt="" />
          <div className="info">
            <div className="place">
              <p>Besant Road</p>
            </div>
            <div className="no-of-properties">
              <p>860 Properties</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
}

export default FeaturedLocation;