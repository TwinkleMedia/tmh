import React from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function Iconslider({products}) {
    const settings = {
        infinite: true,
        speed: 500, 
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true, 
        responsive: [
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              infinite: true,
              
            }
          }
        ]
      };
  return (
    <>
    <Slider {...settings}>
      {products.map(product => (
        <div key={product.id} className="course-slide col-md-6">
          <div className='course-details'>
            <img src={product.image} alt="imges" className="img-fluid" />
          </div>
        </div>
      ))}
    </Slider>
  </>
  
  )
}

export default Iconslider
