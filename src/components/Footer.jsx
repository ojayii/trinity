import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__wrapper">
        <div className="footer__head">
          <Link to="/" className="footer__logo">
            <img src="/images/trinity_logo.png" alt="Trinity logo" />Trinity
          </Link>
          <div className="footer__head__right">
            <span>Ready to get started?</span>
            <Link to="/rooms" className="footer__cta-btn">Get started</Link>
          </div>
        </div>
        <p className="footer__copyright">© 2025 Trinity Hotel. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;