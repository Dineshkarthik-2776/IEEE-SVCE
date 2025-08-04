import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-scroll';
import Logo from '../assets/logo.png';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className='header'>
      <div className="logo">
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="" />
        </Link>
      </div>
      <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
        <ul>
          <li><Link to="home" smooth={true} duration={500}>HOME</Link></li>
          <li><Link to="about" smooth={true} duration={500}>ABOUT US</Link></li>
          <li><Link to="events" smooth={true} duration={500}>EVENTS</Link></li>
          <li><Link to="join" smooth={true} duration={500}>JOIN US</Link></li>
          <li><Link to="crew" smooth={true} duration={500}>CREW</Link></li>
          <li><Link to="galary" smooth={true} duration={500}>GALARY</Link></li>
          <li><Link to="contact" smooth={true} duration={500}>CONTACT US</Link></li>
        </ul>
      </nav>
      <button className="hamburger" onClick={toggleMenu}>
        {isMenuOpen ? '✖' : '☰'}
      </button>
    </div>
  );
};

export default Header;
