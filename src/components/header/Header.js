import React from 'react';
import Navigation from './Navigation.js';
import Branding from './Branding.js';
import '../..//styles/header.css';

function Header() {
  return (
    <header>
      <div className='main-header'>
        <div className='secundary-header'>
          <Branding />
          <Navigation />
        </div>
      </div>
    </header>
  );
}

export default Header;