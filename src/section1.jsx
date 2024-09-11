import React from 'react';
import './section1.css';
import backgroundImage from '../src/images/img1.jpg'; // Adjust the path to your image

const Section1 = () => {
  return (
    <div className="hero-section" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="hero-content">
        <h1 className="hero-heading">
          <span className="highlight">OnicByte</span> <br />
          Best Software House in Peshawar
        </h1>
        <p className="hero-description">
          Web Development, Digital Marketing, Graphic Designing, SEO, Shopify Dropshipping, E-Commerce, Amazon, eBay
        </p>
        <div className="hero-buttons">
          <a href="#" className="btn">Discover More</a>
          <a href="#" className="btn">Hire Us Now</a>
        </div>
      </div>
    </div>
  );
};

export default Section1;
