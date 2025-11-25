import React from 'react';
import './icon.css';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function Iconslider({ products }) {
  // const settings = {
  //   infinite: products.length > 4,
  //   speed: 500,
  //   slidesToShow: Math.min(products.length, 4),
  //   slidesToScroll: 1,
  //   autoplay: products.length > 1,
  //   autoplaySpeed: 2000,
  //   pauseOnHover: true,
  //   responsive: [
  //     {
  //       breakpoint: 768,
  //       settings: {
  //         slidesToShow: Math.min(products.length, 1),
  //         slidesToScroll: 1,
  //         infinite: products.length > 1
  //       }
  //     }
  //   ]
  // };

  // return (
  //   <Slider {...settings}>
  //     {products.map(product => (
  //       <div key={product.id}>
  //         <img
  //           src={product.image}
  //           alt="logo"
  //           style={{ width: '100%', maxHeight: '120px', objectFit: 'contain' }}
  //         />
  //       </div>
  //     ))}
  //   </Slider>
  // );
  return (
    <div className="client-section">
  <div className="container">
    <div className="row justify-content-center">
      {products.map((logo, index) => (
        <div key={index} className="col-6 col-sm-4 col-md-3 col-lg-2 client-item">
          <div className="client-box">
            <img src={logo} alt="client-logo" />
          </div>
        </div>
      ))}
    </div>
  </div>
</div>

  )
}

export default Iconslider;
