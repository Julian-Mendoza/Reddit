import React from 'react';
import '../Styles/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <p>&copy; {new Date().getFullYear()} J&JMendoza All rights reserved.</p>
        <ul className="footer-links">
          <li><a href="/">Home</a></li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;