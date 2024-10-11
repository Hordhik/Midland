import "./AboutUs.css";


function AboutUs(){
  return(
    <div className="about-us">
      <div className="title">
        <p className="blue-text">About Us</p>
        <div className="sub-title">
          <p>We are dedicated to deliver a powerful website for every real estate Client</p>
        </div>
      </div>
      <div className="reasons">
        <div className="reason">
          <p className="number">190K</p>
          <p className="represents">
            Is the number of properties we offer,
            with exceptional quality 
          </p>
        </div>
        <div className="reason">
          <p className="number">190K</p>
          <p className="represents">
            Is the number of properties we offer,
            with exceptional quality 
          </p>
        </div>
        <div className="reason">
          <p className="number">190K</p>
          <p className="represents">
            Is the number of properties we offer,
            with exceptional quality 
          </p>
        </div>
      </div>
    </div>
  )
}

export default AboutUs;