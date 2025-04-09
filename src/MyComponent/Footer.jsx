// ========================
// Footer.jsx - Page Footer Component
// ========================

import React from 'react';
import './CSS/Footer.css'; // External CSS for footer styling

// Importing social media icon images
import img from './IMAGE/facebook.png';
import img1 from './IMAGE/instagram.png';
import img2 from './IMAGE/twitter.png';
import img3 from './IMAGE/indeed.png';

// ========================
// Functional Component: Footer
// ========================
export default function Footer() {
  return (
    <>
      {/* Footer Section */}
      <footer className="footer">
        
        {/* Copyright */}
        <p>
          &copy; All Rights Reserved to Yash Gurav <br />
          Powered By Nescafe
        </p>

        {/* Social Media Icons */}
        <img src={img} alt="Facebook" className='img' />
        <img src={img1} alt="Instagram" className='img' />
        <img src={img2} alt="Twitter" className='img' />
        <img src={img3} alt="Indeed" className='img' />
      </footer>
    </>
  );
}
