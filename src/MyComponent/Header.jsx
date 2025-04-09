// ========================
// Header.jsx - Top Navigation Bar
// ========================

import React from 'react';
import './CSS/Header.css'; // Importing external CSS for header styling
import { FaCoffee } from "react-icons/fa"; // Importing coffee icon from react-icons

// ========================
// Functional Component: Header
// ========================
export default function Header() {
  return (
    <>
      {/* Top Header Section */}
      <header>
        {/* Navigation Bar */}
        <nav className="navbar">
        
          {/* Logo Section with Coffee Icon */}
          <div className="logo">
            <FaCoffee /> BigBoom Cafe
          </div>

          {/* Navigation Links */}
          <ul className="nav-links">
            <li><a href="#">Brew Guide</a></li>        {/* Link to Brew Guide */}
            <li><a href="#">Cafe Menu</a></li>         {/* Link to Cafe Menu */}
            <li><a href="#">Best Seller</a></li>       {/* Link to Best Sellers */}
            <li><a href="#">About Us</a></li>          {/* Link to About Us page */}
          </ul>

        </nav>
      </header>
    </>
  );
}
