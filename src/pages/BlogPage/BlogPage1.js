import React from "react";
import img from "./../../image/blog1front.png";
import BlogCard from "../../component/BlogCard/BlogCard";
import Breadcrumbs from "../../component/Breadcrumbs/Breadcrumbs";
import blogs from "./blogs";
import { Helmet } from "react-helmet";
import axios from "axios";

export default function BlogPage() {
  // Blog Data

 
  const [blogs, setBlogs] = React.useState([]);
  const [singleBlog, setSingleBlog] = React.useState();
  React.useEffect(() => {
    axios
      .get(
        "https://www.googleapis.com/blogger/v3/blogs/3966493491498803495/posts?key=AIzaSyDCAU3BfPkqCsSLcle9mlMHuEUPNuKBIi0"
      )
      .then((res) => {
        console.log(res.data.items);
        setBlogs(res.data.items);
      });
  },[]);

  // ====================

  React.useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

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
      <div className="about " id="about">
        <Breadcrumbs breadheading={"Blogs"} breadcrumbsLabel={"About"} />
      </div>
      {blogs!=''? console.log('x'):(
      <div className="container-fluid">
        <div className="row py-5">
          <div className="col-xl-4 overflow-y-scroll blogCard">
            {blogs.map((item, index) => {
              return <BlogCard item={item} blogSet={setSingleBlog} />;
            })}
          </div>
          <div className="col-xl-8">
            <div className="col-10 mx-auto mt-4">
              {/*<div className="col-10 mx-auto">
              <h1>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod,
                quae!
              </h1>

              <img
                src={img}
                className="bg-warning my-3"
                style={{ borderRadius: "30px", width: "100%" }}
                alt=""
              />
              <h2>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Molestias neque itaque recusandae.
              </h2>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
                accusamus, distinctio blanditiis omnis et suscipit voluptatem
                molestiae in eaque eligendi dolores at. Voluptatibus qui
                consequatur officia nobis possimus obcaecati ipsam.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Necessitatibus earum suscipit voluptates eligendi rem eaque unde
                modi vero obcaecati, repudiandae nam amet incidunt et eveniet
                itaque culpa reprehenderit libero quas vitae? Voluptatem quas
                ipsa quis sequi modi omnis aliquam similique? Iste dolorum illo
                officia unde nisi hic expedita nam, id molestiae sed ratione
                cumque fugiat saepe ut beatae distinctio tempore. Distinctio
                hic, voluptatum molestias ut dolorum neque accusantium
                necessitatibus porro? Dolorum tenetur quidem nisi culpa? Commodi
                libero quisquam deleniti ab incidunt vel perspiciatis quod
                laudantium facere! Voluptatibus officiis dicta ratione corrupti
                tempore iure earum, consectetur facere aliquam inventore, ad a
                libero atque temporibus vero ex nisi eveniet repudiandae
                deserunt fugit autem odio! Voluptates blanditiis, consequatur
                mollitia doloremque aliquam, accusantium quas animi quis
                exercitationem soluta fugiat debitis. Animi accusamus error
                natus quae, iusto reiciendis quo temporibus voluptatum
                consequatur aut rem placeat modi doloremque provident voluptates
                iste velit libero sint, consectetur tenetur perferendis
                obcaecati eveniet inventore. Reiciendis nam corrupti porro! Quod
                accusantium voluptatibus, laudantium consequatur quis odit error
                necessitatibus voluptatum corrupti sit tempore recusandae fuga
                vitae sed enim. Est quibusdam magni facere dignissimos
                accusantium dicta voluptatem et adipisci veniam? Laboriosam nam,
                minus, placeat ducimus rem esse dolores odio harum sit, modi
                facere.
              </p>
            </div>*/}
              <h1>{singleBlog.title}</h1>

              <img
                src={img}
                className="bg-warning my-3"
                style={{ borderRadius: "30px", width: "80%" }}
                alt=""
              />
              {/* <h2>{singleBlog.subHeading}</h2> */}
              <p>
                {/* {singleBlog.para} */}
                <div dangerouslySetInnerHTML={{ __html: singleBlog.content }} />
              </p>
            </div>
          </div>
        </div>
      </div>)}
    </>
  );
}
