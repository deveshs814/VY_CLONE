import React from 'react';
import './FooterStyles.css';
import { LuLinkedin } from "react-icons/lu";
import { FiInstagram } from "react-icons/fi";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-column">
        <h4 className='vol'>Volunteer Yatra</h4>
        <p>
        Volunteer Yatra connects rural hosts with travelers for affordable and unique travel experiences. Our travelers exchange skills for stay and meals, supporting rural hosts in India. Join us for a sustainable and mutually beneficial exchange.
        </p>
      </div>
      <div className="footer-column">
        <h4>Company</h4>
        <ul>
          <li><a href="#item5">About</a></li>
          <li><a href="#item6">Blog</a></li>
          <li><a href="#item7">Privacy</a></li>
          <li><a href="#item8">Contact Us</a></li>
        </ul>
      </div>
      <div className="footer-column">
        <h4>Community</h4>
        <ul>
          <li><a href="#item9">Find Opportunities</a></li>
          <li><a href="#item10">Join Our Community</a></li>
          <li><a href="#item11">Login as Volunteer</a></li>
          <li><a href="#item12">Login as Host</a></li>
        </ul>
      </div>
      <div className='icon'>
      <LuLinkedin/>
      <FiInstagram />
      <FaFacebookF />
      <FaTwitter />
      </div>
    </footer>
  );
};

export default Footer;
