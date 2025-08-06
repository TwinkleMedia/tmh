import React from "react";
import "./Header.css";
import logo from "./../../image/brand.webp";
import { Link } from "react-router-dom";
import DownloadBtn from "../download-button/DownloadBtn";
import pdf from '../download-button/TMH Company Profile.pdf';

export default function Header() {


  

  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg" >
        <div className="container">
          <Link to="/">
            <img src={logo} className="brandlogo"></img>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" to="/">
                  Our Work
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link " to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to="/services">
                  Services
                </Link>
              </li>

              {/* <li className="nav-item">
                  <Link className="nav-link " to="/portfolio">
                    Portfolio
                  </Link>
                </li> */}

              {/* <li className="nav-item">
                <Link className="nav-link " to="/collaborations">
                  Collaboration
                </Link>
              </li> */}
              {/* <li className="nav-item">
                <Link className="nav-link " to="#">
                Ads
                </Link>
                </li> */}

              {/* <li className="nav-item">
                  <Link className="nav-link " to="/influencers">
                  Influencers
                  </Link>
                  </li> */}

              <li className="nav-item">
                <Link className="nav-link " to="/blog">
                  Blog
                </Link>
              </li>

              {/* <li className="nav-item">
                  <Link className="nav-link " to="/career">
                    Career
                  </Link>
                </li> */}
              <li className="nav-item">
                <Link className="nav-link " to="/contact">
                  Contact
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link " to={pdf} target="_blank" download>
                  <DownloadBtn/>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
