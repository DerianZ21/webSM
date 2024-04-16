import React from 'react';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../../styles/about.css'

function About() {

  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#main-about') {
      const section = document.getElementById('main-about');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div id='main-about' className='main-about'>
      <div className='info about'></div>
    </div>
  );
}

export default About;