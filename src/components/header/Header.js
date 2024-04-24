import React, { useState, useEffect } from 'react';
import Navigation from './Navigation.js';
import Branding from './Branding.js';
import '../../styles/header.css';

function Header() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    let lastScrollTop = 0; 

    function handleScroll() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

      if (scrollTop > lastScrollTop) {
        setIsVisible(false);
      } else {
        setIsVisible(true);
      }

     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // para actualiza el scrollTop
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
      <header className={`main-header ${isVisible ? 'mostrar' : 'ocultar'}`} onMouseOver={() => setIsVisible(true)}>
        <div className='secundary-header'>
          <Branding />
          <Navigation />
        </div>
      </header>
  );
}

export default Header;