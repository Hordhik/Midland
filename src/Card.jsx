import "./Card.css"
import bath from "./assets/card/bath.png"
import img from "./assets/card/img.jpeg"

function Card(){

  return(
    <div className="card">
      <img src={img} alt="" />
      <div className="info">
        <div className="title">
          <p className="name">NHS Villa</p>
          <p className="blue-text price">₹ 35,890/Month</p>
        </div>
        <div className="address">
          <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M6.64044 13.6786C6.64044 13.6786 2.35852 10.0724 2.35852 6.52396C2.35852 5.27291 2.8555 4.07311 3.74012 3.18848C4.62474 2.30386 5.82455 1.80688 7.07559 1.80688C8.32664 1.80688 9.52644 2.30386 10.4111 3.18848C11.2957 4.07311 11.7927 5.27291 11.7927 6.52396C11.7927 10.0724 7.51074 13.6786 7.51074 13.6786C7.27253 13.8979 6.88042 13.8956 6.64044 13.6786ZM7.07559 8.58767C7.3466 8.58767 7.61496 8.5343 7.86534 8.43058C8.11572 8.32687 8.34323 8.17486 8.53486 7.98323C8.72649 7.79159 8.87851 7.56409 8.98222 7.31371C9.08593 7.06332 9.13931 6.79497 9.13931 6.52396C9.13931 6.25294 9.08593 5.98459 8.98222 5.73421C8.87851 5.48382 8.72649 5.25632 8.53486 5.06469C8.34323 4.87305 8.11572 4.72104 7.86534 4.61733C7.61496 4.51362 7.3466 4.46024 7.07559 4.46024C6.52826 4.46024 6.00334 4.67766 5.61632 5.06469C5.2293 5.45171 5.01187 5.97662 5.01187 6.52396C5.01187 7.07129 5.2293 7.5962 5.61632 7.98323C6.00334 8.37025 6.52826 8.58767 7.07559 8.58767Z" fill="#0059FF"/>
          </svg>
          <p>Amaravati, Vijayawada,  520032</p>
        </div>
        <div className="owner">
          <p>Owner : <span>Arun</span></p>
        </div>
        <div className="rooms">
          <div className="room">
            <img src={bath} alt="" />
            <p>2 Baths</p>
          </div>
          <div className="room">
            <img src={bath} alt="" />
            <p>2 Baths</p>
          </div>
          <div className="room">
            <img src={bath} alt="" />
            <p>2 Baths</p>
          </div>
        </div>
        <div className="options">
          <div className="contact blue-text">
            <p>Contact</p>
          </div>
          <div className="sale">
            <p >For Sale</p>
          </div>
        </div>
      </div>
    </div>
  )

}

export default Card;