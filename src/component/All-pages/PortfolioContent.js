import React from "react";
import Breadcrumbs from "../../component/Breadcrumbs/Breadcrumbs";
import "./portfoliopage.css";
import graphicImg from "./Background-Image/Graphic.png";
// Animation imports
import AOS from "aos";
import "aos/dist/aos.css";
// Carousel Imports
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
export default function PortfolioContent() {
  const navigate = useNavigate();

  const handleReadMore = () => {
    navigate("/model-marketing"); // Navigate to the model marketing page
  };
  const handleReadMore2 = () => {
    navigate("/model-infuencer");
  };
  const [images, setImages] = useState([]);

  // Fetch images from the API Models // "http://localhost/twinkleadmin/reactapi/fetch_model_details.php"
  useEffect(() => {
    fetch(
      "https://twinklemediahub.com/twinkleadmin/reactapi/fetch_model_details.php"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          // Select only the first image from each model's images array
          const fetchedImages = data.data.map(
            (model) =>
              `https://twinklemediahub.com/twinkleadmin/sidenavabar/${model.images[0]}`
          );
          setImages(fetchedImages);
        }
      })
      .catch((error) => console.error("Error fetching images:", error));
  }, []);
  // Fetch Image from The API Influencers

  const [influencers, setInfluencers] = useState([]);
  useEffect(() => {
    fetch(
      "https://twinklemediahub.com/twinkleadmin/reactapi/fetch_influencers.php"
    )
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "success") {
          const influencerData = data.data.map((item) => {
            // Update path to include sidenavabar and correct Influencer directory
            const imageUrl = `https://twinklemediahub.com/twinkleadmin/sidenavabar/${item.image_path.replace(
              "influencer",
              "Influencer"
            )}`;
            console.log("Constructed Image URL:", imageUrl); // Debug log
            return {
              ...item,
              url: imageUrl,
            };
          });
          setInfluencers(influencerData);
          console.log("Full influencer data:", influencerData);
        } else {
          console.error("API Error:", data.message);
        }
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);
  const graphics = [
    {
      url: "/asset/allImages/graphics/tmh portfolio (2).png",
    },
    {
      url: "/asset/allImages/graphics/tmh portfolio (3).png",
    },
    {
      url: "/asset/allImages/graphics/tmh portfolio (4).png",
    },
    {
      url: "/asset/allImages/graphics/tmh portfolio (5).png",
    },
    {
      url: "/asset/allImages/graphics/tmh portfolio (6).png",
    },
  ];

  const website = [
    {
      url: "/asset/allImages/website/tmh portfolio (7).png",
    },
    {
      url: "/asset/allImages/website/tmh portfolio (8).png",
    },
    {
      url: "/asset/allImages/website/tmh portfolio (9).png",
    },
  ];

  const influencer = [
    {
      url: "/asset/allImages/models/tmh portfolio (10).png",
    },
    {
      url: "/asset/allImages/models/tmh portfolio (11).png",
    },
    {
      url: "/asset/allImages/models/tmh portfolio (12).png",
    },
  ];
  const product = [
    {
      url: "/asset/allImages/productShoot/tmh portfolio (15).png",
    },
    {
      url: "/asset/allImages/productShoot/tmh portfolio (16).png",
    },
    {
      url: "/asset/allImages/productShoot/tmh portfolio (17).png",
    },
    {
      url: "/asset/allImages/productShoot/tmh portfolio (18).png",
    },
  ];

  React.useEffect(() => {
    AOS.init({
      duration: 500,
      easing: "ease",
    });
    AOS.refresh();
  });

  return (
    <>
      {/* Card No. 1 */}
      <div className="container text-center overflow-hidden portfolioPage">
        <div className="row port-web-section m-50 overflow-hidden flex-sm-column-reverse flex-xs-column-reverse flex-md-row ">
          <div
            className="col-md-4 col-sm-12"
            data-sb="fadeInLeft"
            data-sb-hide="fadeOutUp"
          >
            <h2
              className="brand_title mb-10"
              style={{ "text-align": "center" }}
            >
              <span style={{ float: "left" }}>01</span>
              <hr class="line100" />
            </h2>
            <div className="clear_fix p-0"></div>

            <h2 className="brand_contenttitle">Graphics Designing</h2>

            <p
              className="text-left"
              data-sb="fadeInLeft"
              data-sb-hide="fadeOutUp"
            >
              Twinkle Media Hub Pvt Ltd, your creative powerhouse for digital
              innovation in Mumbai. At Twinkle Media Hub, we specialize in
              crafting captivating visual experiences through our expert
              graphics designing services. Whether you're looking for stunning
              2D animations, 3D animation services, dynamic motion videos, or
              bespoke graphics design solutions, we're here to bring your vision
              to life.
              <br />
              <button>
                <a href="/GraphicsDesigning">Read more...</a>
              </button>
            </p>
          </div>
          <div
            className="col-md-8 col-sm-12 p-0"
            data-sb="fadeInRight"
            data-sb-hide="fadeOutUp"
          >
            <Carousel
              showThumbs={true}
              infiniteLoop={true}
              autoPlay={true}
              className="page-portfolio"
              emulateTouch={true}
              interval={1500}
              dynamicHeight={false}
              showIndicators={false}
            >
              {graphics.map((item, index) => {
                return (
                  <div>
                    <img src={item.url} />
                    <p className="legend">Legend 1</p>
                  </div>
                );
              })}
              {/* <div>
                <img src={graphicImg} />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src={graphicImg} />
                <p className="legend">Legend 3</p>
              </div> */}
            </Carousel>
          </div>
        </div>

        {/* Card No. 2 */}
        <div className="row port-web-section m-50 overflow-hidden">
          <div
            className="col-md-8 col-sm-12 p-0"
            data-sb="fadeInRight"
            data-sb-hide="fadeOutUp"
          >
            <Carousel
              showThumbs={true}
              infiniteLoop={true}
              autoPlay={true}
              className="page-portfolio"
              emulateTouch={true}
              interval={1500}
              dynamicHeight={false}
              showIndicators={false}
            >
              {website.map((item, index) => {
                return (
                  <div>
                    <img src={item.url} />
                    <p className="legend">Legend 1</p>
                  </div>
                );
              })}
              {/* <div>
                <img src={graphicImg} />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src={graphicImg} />
                <p className="legend">Legend 3</p>
              </div> */}
            </Carousel>
          </div>
          <div className="col-md-4 col-sm-12">
            <h2
              className="brand_title mb-10"
              style={{ "text-align": "center" }}
            >
              <span style={{ float: "left" }}>02</span>
              <hr class="line100" />
            </h2>
            <div className="clear_fix p-0"></div>
            <h2 className="brand_contenttitle">
              <Link to="/websitedevlopment">Web Development and Designing</Link>
            </h2>
            <p
              className="text-left"
              data-sb="fadeInLeft"
              data-sb-hide="fadeOutUp"
            >
              Affordable Website Development in Mumbai only at Twinkle Media
              Hub, we understand that your website is the digital face of your
              business. Our expert team of developers excels in crafting custom
              solutions that not only meet but exceed your expectations. Whether
              you're looking for an E-commerce platform, a responsive design, or
              a robust web application, we have the expertise to deliver.
              <br />
              <button>
                <a href="/websitedevlopment">Read more...</a>
              </button>
            </p>
          </div>
        </div>

        {/* Card No. 3 */}
        <div className="row port-web-section m-50 overflow-hidden flex-sm-column-reverse flex-md-row">
          <div className="col-md-4 col-sm-12">
            <h2
              className="brand_title mb-10"
              style={{ "text-align": "center" }}
            >
              <span style={{ float: "left" }}>03</span>
              <hr class="line100" />
            </h2>
            <div className="clear_fix p-0"></div>
            <h2 className="brand_contenttitle">
              <Link to="/productshoot">Media Production</Link>
            </h2>
            <p
              className="text-left"
              data-sb="fadeInLeft"
              data-sb-hide="fadeOutUp"
            >
              At Twinkle Media Hub Pvt Ltd, we specialize in delivering
              top-notch media production services that bring your brand's vision
              to life. Our expert team is equipped with the latest technology
              and creative flair to produce stunning visuals that captivate and
              engage your audience. Whether you need dynamic video content or
              high-quality photography, we have you covered.
              <br />
              <button>
                <a href="/productshoot">Read more...</a>
              </button>
            </p>
          </div>
          <div
            className="col-md-8 col-sm-12 p-0"
            data-sb="fadeInRight"
            data-sb-hide="fadeOutUp"
          >
            <Carousel
              showThumbs={true}
              infiniteLoop={true}
              autoPlay={true}
              className="page-portfolio"
              emulateTouch={true}
              interval={1500}
              dynamicHeight={false}
              showIndicators={false}
            >
              {product.map((item, index) => {
                return (
                  <div>
                    <img src={item.url} />
                    <p className="legend">Legend 1</p>
                  </div>
                );
              })}
              {/* <div>
                <img src={graphicImg} />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src={graphicImg} />
                <p className="legend">Legend 3</p>
              </div> */}
            </Carousel>
          </div>
        </div>

        {/* Card No. 4 */}
        <div className="row port-web-section m-50 overflow-hidden ">
          <div
            className="col-md-8 col-sm-12 p-0"
            data-sb="fadeInRight"
            data-sb-hide="fadeOutUp"
          >
            <Carousel
              showThumbs={true}
              infiniteLoop={true}
              autoPlay={true}
              className="page-portfolio"
              emulateTouch={true}
              interval={1500}
              dynamicHeight={false}
              showIndicators={false}
            >
              {images.map((image, index) => (
                <div key={index}>
                  <img
                    className="carousel-image"
                    src={image}
                    alt={`Model ${index + 1}`}
                  />
                  <p className="legend">{`Model ${index + 1}`}</p>
                </div>
              ))}
            </Carousel>
          </div>
          <div className="col-md-4 col-sm-12">
            <h2
              className="brand_title mb-10"
              style={{ "text-align": "center" }}
            >
              <span style={{ float: "left" }}>04</span>
              <hr class="line100" />
            </h2>
            <div className="clear_fix p-0"></div>
            <h2 className="brand_contenttitle">
              <Link to="/#">Model Marketing</Link>
            </h2>
            <p
              className="text-left"
              data-sb="fadeInLeft"
              data-sb-hide="fadeOutUp"
            >
              At Twinkle Media Hub Pvt. Ltd., we bring creative visions to life
              with precision and style. Our expertise spans model shoots, print
              campaigns, and commercial advertisements, delivering visuals that
              captivate and communicate your brand's essence. With a passion for
              excellence, we craft compelling stories that leave a lasting
              impression.
              <br />
              <button
                onClick={handleReadMore}
                className="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded"
              >
                Read more...
              </button>
            </p>
          </div>
        </div>

        {/* Card No. 5 */}
        <div className="row port-web-section m-50 overflow-hidden flex-sm-column-reverse flex-md-row">
          <div className="col-md-4 col-sm-12">
            <h2
              className="brand_title mb-10"
              style={{ "text-align": "center" }}
            >
              <span style={{ float: "left" }}>03</span>
              <hr class="line100" />
            </h2>
            <div className="clear_fix p-0"></div>
            <h2 className="brand_contenttitle">
              <Link to="/productshoot">Influencer Shoot</Link>
            </h2>
            <p
              className="text-left"
              data-sb="fadeInLeft"
              data-sb-hide="fadeOutUp"
            >
              Looking to boost your brand's reach and engagement? At Twinkle
              Media Hub Pvt Ltd, we connect you with influencers across all
              niches and industries to promote your products and services
              effectively. Whether you need lifestyle, tech, fashion, beauty,
              food, or fitness influencers, we have the perfect match for your
              brand.
              <br />
              <button>
                <a onClick={handleReadMore2}>Read more...</a>
              </button>
            </p>
          </div>
          <div
            className="col-md-8 col-sm-12 p-0"
            data-sb="fadeInRight"
            data-sb-hide="fadeOutUp"
          >
            <Carousel
              showThumbs={true}
              infiniteLoop={true}
              autoPlay={true}
              className="page-portfolio"
              emulateTouch={true}
              interval={1500}
              dynamicHeight={false}
              showIndicators={false}
            >
              {influencers.map((item, index) => {
                console.log("Rendering image with URL:", item.url); // Debug log
                return (
                  <div key={index}>
                    <img
                      src={item.url}
                      className="carousel-image"
                      alt={`Influencer ${index + 1}`}
                      onError={(e) => {
                        console.error("Image failed to load:", item.url);
                        console.error("Error event:", e);
                      }}
                    />
                    <p className="legend">Influencer {index + 1}</p>
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </>
  );
}
