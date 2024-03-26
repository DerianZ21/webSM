import React from 'react';
import { Link } from 'react-router-dom';

function Navigation() {
    return (
      <nav>
        <ul className="menu">
          <li><Link to="/home">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/services">Services</Link></li>
          <li><Link to="/products">Products</Link></li>
          <li><Link to="/contacts">Contacts</Link></li>
        </ul>
      </nav>
    );
  }

  export default Navigation;