import React from 'react';
import './section2.css';
import profileImage from '../src/images/ceo.png'; // Adjust the path to your profile image
import serviceIcon1 from '../src/images/ceo.png'; // Adjust the path to your icons
import serviceIcon2 from '../src/images/ceo.png';
import serviceIcon3 from '../src/images/ceo.png';
import serviceIcon4 from '../src/images/ceo.png';
import serviceIcon5 from '../src/images/ceo.png';
import serviceIcon6 from '../src/images/ceo.png';
import backgroundImage from '../src/images/newimg.png'; // Adjust the path to your background image

const Section2 = () => {
  return (
    <div className="section2-container" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="section2-content">
        <h1 className="section2-heading">Our Services</h1>
        <p className="section2-description">
          OnicByte specializes in delivering unique and optimized software solutions tailored to your specific needs. Our team excels in creating standout web and mobile applications with cutting-edge UI/UX design. With our comprehensive suite of services, including prototyping, graphic design, branding, and social media marketing, we optimize your online presence and enhance user experiences. Trust us for exceptional quality, unmatched creativity, and reliable results. Let OnicByte unlock your ideas' full potential and empower your digital success.
        </p>
        <div className="profile-card">
          <img src={profileImage} alt="Profile" className="profile-image" />
          <div className="profile-details">
            <h2 className="profile-name">Ismail</h2>
            <p className="profile-role">CEO, Director</p>
          </div>
          <a href="#" className="section2-btn">More Services</a>
        </div>
      </div>
      <div className="section2-cards">
        <a href="#" className="service-card">
          <img src={serviceIcon1} alt="Service 1" className="service-icon" />
          <h3 className="service-title">Service 1</h3>
        </a>
        <a href="#" className="service-card">
          <img src={serviceIcon2} alt="Service 2" className="service-icon" />
          <h3 className="service-title">Service 2</h3>
        </a>
        <a href="#" className="service-card">
          <img src={serviceIcon3} alt="Service 3" className="service-icon" />
          <h3 className="service-title">Service 3</h3>
        </a>
        <a href="#" className="service-card">
          <img src={serviceIcon4} alt="Service 4" className="service-icon" />
          <h3 className="service-title">Service 4</h3>
        </a>
        <a href="#" className="service-card">
          <img src={serviceIcon5} alt="Service 5" className="service-icon" />
          <h3 className="service-title">Service 5</h3>
        </a>
        <a href="#" className="service-card">
          <img src={serviceIcon6} alt="Service 6" className="service-icon" />
          <h3 className="service-title">Service 6</h3>
        </a>
      </div>
    </div>
  );
};

export default Section2;
