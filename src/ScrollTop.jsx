import React, { useState, useEffect } from 'react';
import { IoIosArrowUp } from "react-icons/io";

const ScrollTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleScroll = () => {
    const scrollTop = window.pageYOffset;
    if (scrollTop > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <button 
      className={`scroll-button ${isVisible ? 'visible' : 'hidden'}`}
      onClick={scrollToTop}
      title="Scroll to Top"
    >
      <IoIosArrowUp />
    </button>
  );
};

export default ScrollTop;
