import React from 'react';
import { Link } from 'react-router-dom';
import LocationForm from './LocationForm';

const Header = () => {
  return (
    <header className="header">
      <nav className="navbar">
        <input type="checkbox" id="nav-toggle" className="nav_toggle" />
        <span className="nav_toggle"><span></span></span>
        
        <Link to="/" className="footer__logo" style={{ color: 'white' }}>
          <img src="/images/trinity_logo.png" alt="Trinity logo" />Trinity
        </Link>

        <ul className="navbar__links">
          <li><Link to="/contact">Contact</Link></li>
          <li><Link to="#">About us</Link></li>
          <li><Link to="#">Our Mission</Link></li>
          <li><Link to="#">Guides</Link></li>
          <li><Link to="#">FAQ</Link></li>
          <li><Link to="#">Login</Link></li>
          <li><Link to="/rooms">Book Now!</Link></li>
        </ul>
      </nav>

      <h1>Explore Our Available Rooms</h1>
      <LocationForm />
      <div className="header__aside-text">
        <p>We provide a variety of the best lodging accommodations...</p>
        <span>Don't worry about the quality of the service.</span>
      </div>
    </header>
  );
};

export default Header;