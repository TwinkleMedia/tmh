
import "./HomePortfolio.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import PortfolioPage from "../../component/All-pages/PortfolioPage";
import PortfolioContent from "../../component/All-pages/PortfolioContent";
import Heading from '../../component/Heading/Heading.js';
// import './media.css';

export default function HomePortfolio() {


  return (
    <>
      {/* <Carousel
      centerSlidePercentage={50}
        centerMode={true}
        showThumbs={false}
        infiniteLoop={true}
        className="home-portfolio"
        emulateTouch={true}
        interval={1000}
      >
        <div>
          <img src={image} />
          <p className="legend">Legend 1</p>
        </div>
        <div>
          <img src={image} />
          <p className="legend">Legend 2</p>
        </div>
        <div>
          <img src={image} />
          <p className="legend">Legend 3</p>
        </div>
      </Carousel> */}
      <div className="py-5">
          {/* <Heading headingLabel="Our Services" /> */}
        </div>
      {/* <PortfolioContent/> */}
    </>
  );
}
