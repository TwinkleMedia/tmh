import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";

function Map() {
  React.useEffect(() => {
    AOS.init({
      duration: 1500,
      easing: "ease",
    });
    AOS.refresh();
  }, []);

  return (
    <>
      <div className="container">
        {/*<div className="row">
          <div
            className="col-12 text-center mb-5 mt-5 map_line"
            data-aos-duration="1500"
            data-aos="zoom-in"
          >
            <h3>We Are Here</h3>
            <img src={arrow} alt="Example GIF" className="arrows" />
          </div>
        </div>*/}
      </div>

      {/* <iframe
        title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3771.6572448290863!2d73.0197476!3d19.0348194!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c379ce95aae1%3A0x37747dde40adf03f!2sEksa%20Food%20Products!5e0!3m2!1sen!2sin!4v1715686492830!5m2!1sen!2sin"
        width="100%"
        height="700px"
        className="maps"
        allowFullScreen=""
        loading="lazy"
        data-aos-duration="1500"
        data-aos="zoom-in"
        m-3
      ></iframe> */}
      <iframe
       title="Google Maps"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3772.054543050999!2d73.04044260025604!3d19.017318081187316!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c30d1db88649%3A0x1924f2317c91d723!2sTwinkle%20Media%20Hub%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1721895628997!5m2!1sen!2sin"
        width="100%"
        height="700px"
        className="maps"
        allowFullScreen=""
        loading="lazy"
        data-aos-duration="1500"
        data-aos="zoom-in"
        m-3
        style={{border:0}}
        allowfullscreen=""
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </>
  );
}

export default Map;
