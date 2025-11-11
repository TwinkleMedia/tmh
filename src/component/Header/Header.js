import React from "react";
import "./Header.css";
// import logo from "./../../image/brand.webp";
import { Link } from "react-router-dom";
import DownloadBtn from "../download-button/DownloadBtn";
import pdf from "../download-button/TMH Company Profile.pdf";

export default function Header() {
  return (
    <nav className="navbar navbar-expand-lg sticky-top">
      <div className="container header-container">
        {/* Left: Logo */}
        <Link className="navbar-brand" to="/">
          <img src="https://res.cloudinary.com/doe3ms4zs/image/upload/v1762844208/TMH_LOGO_Reg._300x-8_e8qnmn.png" alt="Brand Logo" className="brandlogo" />
        </Link>

        {/* Toggle Button */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Collapsible Nav */}
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          {/* Center: Nav Links */}
          <ul className="navbar-nav mx-auto text-center">
            <li className="nav-item">
              <Link className="nav-link" to="/">Our Work</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/services">Services</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/blog">Blog</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contact</Link>
            </li>
          </ul>

          {/* Right: Download Button */}
          <div className="d-flex justify-content-center mt-2 mt-lg-0">
            <Link to={pdf} target="_blank" download>
              <DownloadBtn />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
