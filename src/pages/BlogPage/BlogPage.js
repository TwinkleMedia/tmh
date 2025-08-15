import React from "react";
import img from "./../../image/blog1front.png";
import BlogCard from "../../component/BlogCard/BlogCard";
import Breadcrumbs from "../../component/Breadcrumbs/Breadcrumbs";
import { Helmet } from "react-helmet";

import axios from "axios";

export default function BlogPage() {
  const [blogs, setBlogs] = React.useState([]);
  const [singleBlog, setSingleBlog] = React.useState();
  const [imageurl, setImgUrl] = React.useState(null);

  React.useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/blogger/v3/blogs/3966493491498803495/posts?key=AIzaSyDCAU3BfPkqCsSLcle9mlMHuEUPNuKBIi0"
      )
      .then((res) => {
        console.log("API Response:", res.data.items);
        setBlogs(res.data.items);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });


  }, []);


  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [setSingleBlog]);

  return (
    <>
      <Helmet>
        <title>Blogs | Twinkle Media Hub Sevices in Mumbai, Navi Mumbai</title>
        <link rel="canonical" href="https://www.twinklemediahub.com/blog" />
        <meta
          name="description"
          content="Twinkle Media Hub Sevices in Mumbai is a Digital Marketing Agency in Mumbai that serves High-Performance End-to-End Marketing Services to help in your Business Growth"
        />
        <meta
          name="keywords"
          content="Twinkle Media Hub Pvt. Ltd., SEO, PPC, Social Media Marketing, Email Marketing, Graphic design, Direct Marketing, Web Development, Video Editing, Email Marketing, Bulk Whatsup Marketing"
        />
        <meta
          property="og:title"
          content="Blogs | Twinkle Media Hub Sevices in Mumbai, Navi Mumbai"
        />
        <meta
          property="og:site_name"
          content="Twinkle Media Hub Services Pvt. Ltd."
        />
        <meta property="og:url" content="https://twinklemediahub.com/blog" />
        <meta
          property="og:description"
          content="Twinkle Media Hub Sevices in Mumbai is a Digital Marketing Agency in Mumbai that serves High-Performance End-to-End Marketing Services to help in your Business Growth"
        />
        <meta property="og:type" content="website" />
      </Helmet>
      <div className="about" id="about">
        <Breadcrumbs breadheading={"Blogs"} breadcrumbsLabel={"About"} />
      </div>
      {blogs.length > 0 ? (
        <div className="container-fluid">
          <div className="row py-5">
            <div className="col-xl-8">
              <div className="col-10 mx-auto mt-4">
                <h1>{singleBlog?.title}</h1>
                <img
                  src={imageurl}
                  className="bg-warning my-3"
                  style={{ borderRadius: "30px", width: "80%" }}
                  alt=""
                />
                <div
                  dangerouslySetInnerHTML={{ __html: singleBlog?.content }}
                  className="my-blog"
                />
                {/* <iframe src={singleBlog?.url} className="iframe"></iframe> */}
              </div>
            </div>
            <div className="col-xl-4 overflow-y-scroll blogCard">
              {blogs.map((item, index) => {
                return (
                  <BlogCard key={index} item={item} blogSet={setSingleBlog} setImg={setImgUrl}/>
                );
              })}
            </div>
          </div>
        </div>
      ) : (
        <p className="text-center py-5">Loading blogs...</p>
      )}
    </>
  );
}