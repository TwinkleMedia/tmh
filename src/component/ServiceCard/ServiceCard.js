import React from 'react'
import './ServiceCard.css'
import { Link } from 'react-router-dom'
export default function ServiceCard(props) {
  const [isFlipped, setisFlipped] = React.useState(false);
  const handleFlip = () => {
    if (!props.disableAnimation) {
      setisFlipped(!isFlipped);
    }

  }
  return (
    <Link className="col-md-6 col-lg-4 mb-4" onClick={(e) => {
      if (window.innerWidth <= 768 && !props.disableAnimation) {
        e.preventDefault();
        handleFlip();
      }
    }
    }>
      <div
        className={`flip-card ${props.disableAnimation ? "no-flip" : ""} ${isFlipped ? "flip-mobile" : ""} ${props.customClass || ""}`}
        onClick={() => {
          if (window.innerWidth <= 768 && !props.disableAnimation) setisFlipped(!isFlipped);
        }}
      >
        <div className="flip-card-inner" style={{ background: props.disableBg ? "none" : "url('/asset/service1.jpg')" }}>

          {/* FRONT */}
          <div className="flip-card-front card-face d-flex flex-column justify-content-center align-items-center p-4">
            <div className="front-overlay-text">
              {props.heading}
            </div>
          </div>

          {/* BACK */}
          <div className="flip-card-back card-face d-flex justify-content-center align-items-center p-4">
            <p className="fw-semibold text-center" id='backText'>
              {props.backText}
            </p>
          </div>

        </div>
      </div>
    </Link>
  )
}
