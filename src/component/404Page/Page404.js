import React from 'react';
import './page404.css';

export default function Page404() {
  return (
    <div className='pg404'>

    <div className="container">
      <div className="content">
        <h1>404</h1>
        <p>Oops! The page you are looking for does not exist.</p>
        <a href="/" className="home-link">Go to Homepage</a>
      </div>
    </div>
    </div>
  );
}

