import React from "react";
import logo from "./../../image/brand.webp";
import "./Footer.css";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { AiFillInstagram } from "react-icons/ai";
import { CiLocationOn } from "react-icons/ci";
import { IoMailOpenOutline } from "react-icons/io5";
import { LuPhone } from "react-icons/lu";
import { LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <footer className="footer mt-4">
      <div className="container">
        <div className="row gy-4">
          <div className="col-md-6 col-lg-4">
            <img src={logo} className="img-fluid footer_logo mb-3" alt="logo" />
            <p className="footer_description">
              At Twinkle Media Hub Pvt. Ltd., we’re a passionate team of Advertising & Digital Marketing experts, turning brand visions into bold realities.
            </p>
            <div className="social_icon mt-3">
              <Link to="https://www.facebook.com/profile.php?id=61554146648877"><FaFacebookSquare className="f_icon" /></Link>
              <Link to="https://www.instagram.com/twinklemediahub"><AiFillInstagram className="i_icon" /></Link>
              <Link to="https://www.youtube.com/@twinklemedia195"><FaYoutube className="y_icon" /></Link>
              <Link to="https://www.linkedin.com/company/twinkle-media-hub-pvt-ltd"><LinkedIn className="l_icon" /></Link>
            </div>
          </div>

          <div className="col-md-6 col-lg-4">
            <h4 className="footer_title">Useful Links</h4>
            <ul className="footer_links_list">
              <li><Link className="footer_links" to="/">Our Work</Link></li>
              <li><Link className="footer_links" to="/about">About</Link></li>
              <li><Link className="footer_links" to="/services">Services</Link></li>
              <li><Link className="footer_links" to="/blog">Blog</Link></li>
              <li><Link className="footer_links" to="/contact">Contact</Link></li>
            </ul>
          </div>

          <div className="col-md-12 col-lg-4">
            <h4 className="footer_title">Contact</h4>
            <ul className="footer_contact_list">
              <li><CiLocationOn className="s_icon" /> Office No. 24, Plot 19, Gauri Complex, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614</li>
              <li><IoMailOpenOutline className="s_icon" /> <a href="mailto:info@twinklemediahub.com">info@twinklemediahub.com</a></li>
              <li><LuPhone className="s_icon" /> <a href="tel:+917009680118">+91 70096 80118</a></li>
              <li><LuPhone className="s_icon" /> <a href="tel:+917900193079">+91 79001 93079</a></li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-4 pt-3 border-top">
          <p>Twinkle Media Hub Pvt. Ltd. © 2024, All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}
