import React from 'react';
import Breadcrumbs from '../../component/Breadcrumbs/Breadcrumbs';
// import img from '/asset/img/logo.png';

const collaborations = [
  {
    logo: 'path_to_logo1.jpg',
    description: 'Company 1 Description',
    url: 'https://company1.com'
  },
  {
    logo: 'path_to_logo2.jpg',
    description: 'Company 2 Description',
    url: 'https://company2.com'
  },
  {
    logo: 'path_to_logo2.jpg',
    description: 'Company 2 Description',
    url: 'https://company2.com'
  },
  {
    logo: 'path_to_logo2.jpg',
    description: 'Company 2 Description',
    url: 'https://company2.com'
  },
  {
    logo: 'path_to_logo2.jpg',
    description: 'Company 2 Description',
    url: 'https://company2.com'
  },
  {
    logo: 'path_to_logo2.jpg',
    description: 'Company 2 Description',
    url: 'https://company2.com'
  },
  {
    logo: 'path_to_logo2.jpg',
    description: 'Company 2 Description',
    url: 'https://company2.com'
  },
  {
    logo: 'path_to_logo2.jpg',
    description: 'Company 2 Description',
    url: 'https://company2.com'
  },
  {
    logo: 'path_to_logo2.jpg',
    description: 'Company 2 Description',
    url: 'https://company2.com'
  },
  // Add more collaborations as needed
];

const CollaborationsPage = () => {
  React.useEffect(()=>{
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
  return (
    <>
    <div className="about " id="about">
        <Breadcrumbs breadheading={"Our Collaborations"} breadcrumbsLabel={"collaborations"} />
      </div>
    <div className="container">
     <div className="text-center my-5">
        <h1>Our Collaborations</h1>
        <p>We are proud to collaborate with leading companies and clients to bring innovative solutions.</p>
      </div>

      <div className="row">
        {collaborations.map((collab, index) => (
          <div className="col-md-4 mb-4" key={index}>
            <div className="card text-center h-100">
              {/* <img src={collab.logo} alt="Company Logo" className="card-img-top p-3" style={{ maxHeight: '150px', objectFit: 'contain' }} /> */}
              <img src="/asset/img/logo.png" alt="Company Logo" className="card-img-top p-3" style={{ maxHeight: '150px', objectFit: 'contain' }} />
              <div className="card-body">
                <p className="card-text">{collab.description}</p>
                <a href={collab.url} className="btn btn-primary">Learn More</a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="text-center my-5">
        <h2>Interested in Collaborating?</h2>
        <p>Contact us today to learn more about how we can work together.</p>
        <a href="/contact" className="btn btn-primary">Contact Us</a>
      </div>
    </div>
    </>
  );
};

export default CollaborationsPage;
