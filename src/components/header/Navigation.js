import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='main-navegation'>

      <ul className={`menu ${isMenuOpen ? 'open' : 'close'}`}>
        <li id="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          menu
        </li>
        <li ><Link to="/">Home</Link></li>
        <li ><Link to="/about">About</Link></li>
        <li ><Link to="/services">Services</Link></li>
        <li ><Link to="/contacts">Contacts</Link></li>
      </ul>
    </nav>
  );
}

export default Navigation;