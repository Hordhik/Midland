import "./FeaturedProperties.css"
import Card from "./Card"

function FeaturedProperties(){

    return(
      <div className="featured-properties">
        <div className="title">
          <p>Featured Properties</p>
          <div className="sub-title">
            <p>Explore The Best Properties For You From Us</p>
            <div className="options">
              <div className="option select">
                <p>All Properties</p>
              </div>
              <div className="option">
                <p>All Properties</p>
              </div>
              <div className="option">
                <p>All Properties</p>
              </div>
            </div>
          </div>
        </div>
        <div className="properties">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
        <div className="properties">
          <Card></Card>
          <Card></Card>
          <Card></Card>
          <Card></Card>
        </div>
      </div>
    )
}

export default FeaturedProperties;