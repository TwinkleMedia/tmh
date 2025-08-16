import React from "react";

import AccessTimeFilledIcon from "@mui/icons-material/AccessTimeFilled";
import "./BlogCard.css";

export default function BlogCard({ item, blogSet, setImg }) {
  const [imgSrc, setSrc] = React.useState(null);

  React.useEffect(() => {
    // console.log('extrat url')
    const htmlContent = item.content; // Adjust according to your JSON structure
    const imgTagRegex = /<img[^>]+src="([^">]+)"/g;
    const match = imgTagRegex.exec(htmlContent);
    // console.log(match + "  "+match[1]);
    if (match) {
      // setImageUrl(match[1]);
      setSrc(match[1]);
      // console.log(match[1]);
    }
  }, []);

  function extractImageUrl(json) {
    // console.log('extrat url')
    const htmlContent = json.content; // Adjust according to your JSON structure
    const imgTagRegex = /<img[^>]+src="([^">]+)"/g;
    const match = imgTagRegex.exec(htmlContent);
    // console.log(match + "  "+match[1]);
    if (match) {
      // setImageUrl(match[1]);
      setImg(match[1]);
      // console.log(match[1]);
    }
  }

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    const options = { year: "numeric", month: "long", day: "numeric" };
    const formattedDate = date.toLocaleDateString(undefined, options);
    const formattedTime = date.toLocaleTimeString(undefined, {
      hour: "2-digit",
      minute: "2-digit",
    });
    return `${formattedDate} at ${formattedTime}`;
  };

  return (
    <div
      className="row pt-3 blogCardM"
      onClick={() => {
        blogSet(item);
        extractImageUrl(item);
      }}
    >
      <div className="col-4">
        <img
          src={imgSrc}
          className="img-fluid bg-warning"
          style={{
            height: "100px",
            "aspect-ratio": "1:1",
            borderRadius: "30px",
          }}
          alt=""
        />
      </div>
      <div className="col-8">
        <div className="mx-sm-5">
          <h5>{item.title}</h5>
          <div className="d-flex py-2 py-sm-4 justify-content-between">
            <span>{item.author.name}</span>
            <span>
              <AccessTimeFilledIcon className='me-2'/>
              {formatDate(item.published)}
            </span>
          </div>
          {/* <h5>"Treat Your Marketing Like Your Mobile"</h5>                       
                            <div className='d-flex py-2 py-sm-4 justify-content-between'><span>By ADMIN</span><span><AccessTimeFilledIcon/> July 22, 2024</span></div> */}
        </div>
      </div>
    </div>
  );
}
