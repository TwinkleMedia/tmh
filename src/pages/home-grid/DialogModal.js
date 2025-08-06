import React from "react";
import grid from "./gridData.js";
import graphicImg from "../../image/Graphic.png";
import { Carousel } from "react-responsive-carousel";
// import videoSrc from '../../videos/videoplayback.mp4'

export default function DialogModal(props) {
  const [ditem, setDItem] = React.useState(props.ditem);
  // console.log(props.ditem);

  return (
    <>
      <div className="videoModal">
        {/* <h2>{ditem.heading2}</h2> */}
        {ditem.video ? (
          <>
            <video className="video" controls autoPlay loop muted>
              <source
                src={"asset/videos/" + props.name + ".mp4"}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </>
        ) : (
          /*<div className=" videoModal">
            <Carousel
              showThumbs={true}
              infiniteLoop={true}
              autoPlay={true}
              className="slider"
              emulateTouch={true}
              interval={1500}
              dynamicHeight={true}
              showIndicators={false}
            >
              <div>
                <img src={graphicImg} />
                <p className="legend">Legend 1</p>
              </div>
              <div>
                <img src={graphicImg} />
                <p className="legend">Legend 2</p>
              </div>
              <div>
                <img src={graphicImg} />
                <p className="legend">Legend 3</p>
              </div>
            </Carousel>
            </div>*/
            " "
          
        )}
        <div className=" videoBtn">
          <button
            className="button"
            onClick={() => {
              props.setDialogStat((prev) => {
                return { ...prev, stat: false };
              });
            }}
          >
            <span class="X"></span>
            <span class="Y"></span>
            <div class="close">Close</div>
          </button>
        </div>
      </div>
    </>
  );
}
