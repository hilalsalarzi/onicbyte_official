import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import './Nav.css';
import logo from '../src/images/softlogo.png';
const Nav = () => {
  return (
    <nav className="navbar">
      <div className="logo"><img src={logo} alt="Logo" /></div>
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#blog">Blog</a></li>
        <li><a href="#apply">Apply</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <ul className="social-icons">
        <li><a href="#facebook"><FontAwesomeIcon icon={faFacebook} /></a></li>
        <li><a href="#twitter"><FontAwesomeIcon icon={faTwitter} /></a></li>
        <li><a href="#instagram"><FontAwesomeIcon icon={faInstagram} /></a></li>
        <li><a href="#youtube"><FontAwesomeIcon icon={faYoutube} /></a></li>
        <li><a href="#linkedin"><FontAwesomeIcon icon={faLinkedin} /></a></li>
      </ul>
      <button className="get-in-touch">Get in Touch</button>
    </nav>
  );
};

export default Nav;
