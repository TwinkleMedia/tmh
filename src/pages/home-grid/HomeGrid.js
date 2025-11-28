import React, { useEffect, useRef, useState } from "react";
import Heading from "../../component/Heading/Heading";
import "./homeGrid.css";

/*export default function HomeGrid() {
  const someStyle = {
    aspectRatio: "1:1",
  };
  
  const [noOfSlide, setNoOfSlide] = React.useState(3);
  const [gridData, setGridData] = React.useState([]);
  const [filter, setFilter] = React.useState('all');
  const [filteredData, setFilteredData] = React.useState([]);
  const [categories, setCategories] = React.useState([]);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(null);

  const loadMore = () => {
    setNoOfSlide(noOfSlide + 3);
  };

  const loadLess = () => {
    setNoOfSlide(noOfSlide - 3);
  };

  const handleFilter = (e) => {
    setFilter(e.target.value);
  };

  const filterData = () => {
    if (filter === 'all') {
      return gridData.slice(0, noOfSlide);
    }
    return gridData.filter(item => item.category.includes(filter)).slice(0, noOfSlide);
  };

  // Fetch data from database
  React.useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        // First, test if the API is reachable
        const testUrl = 'https://twinklemediahub.com/admin/sidenavabar/getCreative.php';
        console.log('Testing API connection...');
        
        // Fetch categories
        const categoriesUrl = 'https://twinklemediahub.com/admin/sidenavabar/getCreative.php?type=categories';
        console.log('Fetching categories from:', categoriesUrl);
        
        const categoriesResponse = await fetch(categoriesUrl);
        console.log('Categories response status:', categoriesResponse.status);
        console.log('Categories response headers:', categoriesResponse.headers);
        
        // Check if response is ok
        if (!categoriesResponse.ok) {
          throw new Error(`HTTP error! status: ${categoriesResponse.status}`);
        }
        
        const categoriesText = await categoriesResponse.text();
        console.log('Categories raw response:', categoriesText);
        
        let categoriesData;
        try {
          categoriesData = JSON.parse(categoriesText);
        } catch (parseError) {
          console.error('JSON parse error for categories:', parseError);
          throw new Error('Invalid JSON response from categories endpoint');
        }
        
        console.log('Categories parsed data:', categoriesData);
        
        if (!categoriesData.success) {
          throw new Error(categoriesData.error || 'Failed to load categories');
        }
        
        setCategories(categoriesData.data || []);

        // Fetch images
        const imagesUrl = 'https://twinklemediahub.com/admin/sidenavabar/getCreative.php?type=images&category=all';
        console.log('Fetching images from:', imagesUrl);
        
        const imagesResponse = await fetch(imagesUrl);
        console.log('Images response status:', imagesResponse.status);
        
        if (!imagesResponse.ok) {
          throw new Error(`HTTP error! status: ${imagesResponse.status}`);
        }
        
        const imagesText = await imagesResponse.text();
        console.log('Images raw response:', imagesText);
        
        let imagesData;
        try {
          imagesData = JSON.parse(imagesText);
        } catch (parseError) {
          console.error('JSON parse error for images:', parseError);
          throw new Error('Invalid JSON response from images endpoint');
        }
        
        console.log('Images parsed data:', imagesData);
        
        if (!imagesData.success) {
          throw new Error(imagesData.error || 'Failed to load images');
        }
        
        setGridData(imagesData.data || []);
        setLoading(false);

      } catch (error) {
        console.error('Detailed fetch error:', error);
        setError(error.message);
        setLoading(false);
        
        // Log additional debugging info
        console.error('Error details:', {
          name: error.name,
          message: error.message,
          stack: error.stack
        });
      }
    };

    fetchData();
  }, []);

  // Update filtered data when filter or noOfSlide changes
  React.useEffect(() => {
    setFilteredData(filterData());
  }, [filter, noOfSlide, gridData]);

  if (loading) {
    return <div className="text-center py-5">Loading...</div>;
  }

  if (error) {
    return (
      <div className="text-center py-5">
        <div className="alert alert-danger">
          <h4>Error loading data:</h4>
          <p>{error}</p>
          <small>Check the browser console for more details.</small>
        </div>
      </div>
    );
  }

  return (
    <div className="home-grid">
      <div className="py-4">
        <Heading headingLabel="Our Best Creation" />
      </div>
      <div className="filter"></div>
      <div className="grid container text-center">
        <div className="row mb-5">
          {/* <div className="btn-group btn-grp justify-content-around flex-wrap" role="group" aria-label="Basic example">
            <button type="button" className="btn m-2" value="all" onClick={handleFilter}>
              All
            </button>
            {categories.map((category, index) => (
              <button 
                key={index} 
                type="button" 
                className="btn m-2" 
                value={category} 
                onClick={handleFilter}
              >
                {category}
              </button>
            ))}
          </div> */
/* </div>
 <div className="row justify-content-around">
   {filteredData.length > 0 ? (
     filteredData.map((item, index) => (
       <div className="col-lg-3 col-md-5 col-sm-12 m-1 align-content-center" style={someStyle} key={index}>
         <div className="boxImg align-content-center">
           <img src={item.image_url} alt={item.title} />
           <div className="info px-2">
             <h4>{item.title}</h4>
             <h2 className="m-0">{item.category}</h2>
           </div>
         </div>
       </div>
     ))
   ) : (
     <div className="col-12">
       <p>No items found</p>
     </div>
   )}
 </div>
 <div className="d-flex buttons justify-content-end">
   <div className="loadMore m-2">
     {filteredData.length < gridData.length && filter === 'all' ? (
       <button className="Btn" onClick={loadMore}>
         <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
           <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
         </svg>
         <p className="text">See More</p>
       </button>
     ) : (
       ""
     )}
   </div>
   <div className="loadLess m-2">
     {filteredData.length > 3 ? (
       <button className="Btn" onClick={loadLess}>
         <svg height="1.2em" className="arrow" viewBox="0 0 512 512">
           <path d="M233.4 105.4c12.5-12.5 32.8-12.5 45.3 0l192 192c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L256 173.3 86.6 342.6c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3l192-192z"></path>
         </svg>
         <p className="text">See Less</p>
       </button>
     ) : (
       ""
     )}
   </div>
 </div>
</div>
</div>*/
// );
// }
export default function HomeGrid() {
  const images = [
    "/asset/bestCreation/img1.png",
    "/asset/bestCreation/img2.png",
    "/asset/bestCreation/img3.png",
    "/asset/bestCreation/img4.png",
    "/asset/bestCreation/img5.png",
    "/asset/bestCreation/img6.png",
    "/asset/bestCreation/img7.png",
    "/asset/bestCreation/img8.png",
    "/asset/bestCreation/img9.png",
    "/asset/bestCreation/img10.png",
    "/asset/bestCreation/img11.png",
    "/asset/bestCreation/img12.png",
    "/asset/bestCreation/img13.png",
    "/asset/bestCreation/img14.png",
    "/asset/bestCreation/img15.png",
    "/asset/bestCreation/img16.png",
    "/asset/bestCreation/img17.png",
    "/asset/bestCreation/img18.png",
    "/asset/bestCreation/img19.png",
    "/asset/bestCreation/img20.png",
  ];
  const groupedImages = [];
  for (let i = 0; i < images.length; i += 4) {
    groupedImages.push(images.slice(i, i + 4));
  }

  const [current, setCurrent] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) =>
        prev === groupedImages.length - 1 ? 0 : prev + 1
      );
    }, 4000);

    return () => clearInterval(interval);
  }, [groupedImages.length]);
  return (
    <div className="four-carousel-wrapper">
      <div className="py-4">
        <Heading headingLabel="Our Best Creation" />
      </div>

      {/* SLIDER */}
      <div
        className="four-carousel-inner"
        style={{
          display: "flex",
          width: `${groupedImages.length * 100}%`,
          transform: `translateX(-${current * (100 / groupedImages.length)}%)`,
          transition: "0.6s ease",
        }}
      >
        {groupedImages.map((group, idx) => (
          <div
            className="four-carousel-slide"
            key={idx}
            style={{
              width: `${100 / groupedImages.length}%`,
              display: "flex",
              justifyContent: "center",
              gap: "20px",
            }}
          >
            {group.map((img, i) => (
              <div
                className="four-img-box"
                key={i}
                style={{ width: "22%" }}
              >
                <img
                  src={img}
                  alt={`slide-${idx}-${i}`}
                  style={{
                    width: "100%",
                    height: "auto",
                    borderRadius: "8px",
                  }}
                />
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* ARROWS */}
      <button
        className="four-btn prev"
        onClick={() =>
          setCurrent(current === 0 ? groupedImages.length - 1 : current - 1)
        }
      >
        ❮
      </button>

      <button
        className="four-btn next"
        onClick={() =>
          setCurrent(current === groupedImages.length - 1 ? 0 : current + 1)
        }
      >
        ❯
      </button>
    </div>
  );
}
