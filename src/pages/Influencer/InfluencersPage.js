import React, { useEffect, useState } from "react";
import Heading from "../../component/Heading/Heading";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css";
import "../Team/Team.css";
import myteam from "../Team/MyTeam";
import TeamCard from "../../component/TeamCard/TeamCard";
import Breadcrumbs from "../../component/Breadcrumbs/Breadcrumbs";

export default function InfluencersPage() {
  const [team, setTeam] = useState([]);
  useEffect(() => {
    setTeam(myteam);
  });
  const teamSetting = {
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    initalSlide: 0,
    arrows: false,
    resposive: [
      {
        breakpoint: 1024,
        Ourteam: {
          slidesToShow: 2,
          slidesToScroll: 3,
          initalSlide: 0,
        },
      },

      {
        breakpoint: 600,
        Ourteam: { slidesToShow: 1, slidesToScroll: 2, initalSlide: 0 },
      },
    ],
  };

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

  return (
    <>
      <div className="about " id="about">
        <Breadcrumbs breadheading={"Influencers"} breadcrumbsLabel={"About"} />
      </div>

      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="slick-slider container" id="team">
              <Slider {...teamSetting}>
                {team?.map((data) => {
                  return (
                    <div class="col-md-4 col-sm-6 p-2">
                      <TeamCard
                        name={data.name}
                        designation={data.designation}
                        imgUrl={data.imgUrl}
                      />
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
