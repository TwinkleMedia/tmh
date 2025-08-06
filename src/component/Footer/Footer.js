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
    <>
      {/* <footer className="text-white py-5">
         <div className="container px-sm-5">
      <div className="row">
        <div className="col-md-8">
          <h1>Let's Talk</h1>
          <h1>We're Listening</h1>
        </div>
        <div className="col-md-4 text-center py-5 py-sm-0">
          <button className='btn touchbtn'>Get In Touch</button>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-md-4">
        
          <div className='footerLogo'>
          <img src={logo} className="img-fluid logo-footer" alt="logo" />
          </div>
        </div>
        <div className="col-md-4 position-relative">
        <p className=' bottom-0 py-5'>METALBULLS LLC © 2023, All Right Reserved.</p>
       
        </div>
        <div className="col-md-4 iconsparent">
        
                <a href=""><FacebookIcon/></a>
                <a href=""><InstagramIcon/></a>
                <a href=""><YouTubeIcon/></a>
     
        </div>
      </div>
      </div>
        <div className="col-7 col-sm-3 mx-auto"></div>

        <p className="text-center pt-2 ">
          Twinkle MEdia © 2024, All Right Reserved.
        </p>
      </footer> */}
 
      <footer className="footer mt-4">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-4">
              <img src={logo} className="img-fluid footer_logo" alt="logo" />
              <p>
                At Twinkle Media Hub Pvt. Ltd., we're a passionate team of
                Advertising & Digital Marketing experts fueled by a desire to
                transform brands. We craft captivating campaigns that tell your
                Unique Story, Generate Leads, and Drive Measurable results &
                from strategic planning & stunning creative to data-driven
                optimization, we empower businesses of all sizes to shine
                brightly online.
              </p>

              <div className="social_icon justify-content-center">
                <div className="facebook_icon">
                  <Link to='https://www.facebook.com/profile.php?id=61554146648877'>
                    {" "}
                    <FaFacebookSquare className="f_icon" />
                  </Link>
                </div>
                <div className="instagram_icon">
                  <Link to='https://www.instagram.com/twinklemediahub?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=='>
                    {" "}
                    <AiFillInstagram className="i_icon" />
                  </Link>
                </div>
                <div className="youtube_icon">
                  <Link to='https://www.youtube.com/@twinklemedia195'>
                    {" "}
                    <FaYoutube className="y_icon" />
                  </Link>
                </div>
                <div className="youtube_icon">
                  <Link to='https://www.linkedin.com/company/twinkle-media-hub-pvt-ltd/?viewAsMember=true'>
                    {" "}
                    <LinkedIn className="l_icon" />
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-12 col-md-6 col-lg-4 foot_details">
            <h4 className="footer_title"> Useful Links</h4>
            <ul className="d-flex flex-lg-column flex-md-column flex-sm-column align-items-sm-center  justify-content-around col-sm-12 col-12">
              <li><Link className="footer_links" to='/'>Our Work</Link></li>
              <li><Link className="footer_links" to='/about'>About</Link></li>
              <li><Link className="footer_links" to='/services'>Services</Link></li>
              <li><Link className="footer_links" to='/blog'>Blog</Link></li>
              {/* <li><Link className="footer_links" to='/career'>Career</Link></li> */}
              <li><Link className="footer_links" to='/contact'>Contact</Link></li>
            </ul>
            </div>
            <div className="col-12 col-lg-4 foot_details">
            <h6 className="footer_title"> Address</h6>
            <ul>
              <li className="address_details"> <Link><CiLocationOn className="s_icon" />Office No. 24, Plot 19, Gauri Complex, Sector 11, CBD Belapur, Navi Mumbai, Maharashtra 400614 </Link> </li>
              <li className="address_details"> <Link  to="mailto:info@twinklemediahub.com"><IoMailOpenOutline className="s_icon" />info@twinklemediahub.com </Link> </li>
              <li className="address_details"> <Link to="tel:+917009680118"> <LuPhone className="s_icon" />7009680118</Link> </li>
              <li className="address_details"> <Link to="tel:+917900193079"> <LuPhone className="s_icon" />7900193079</Link> </li>
            </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
