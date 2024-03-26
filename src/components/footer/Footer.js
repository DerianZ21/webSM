import React from 'react';
import Tooltips from './Tooltips.js';
import Aditional from './Aditional.js';
import Copyright from './Copyright.js';
import '../..//styles/footer.css';

function Footer() {
  return (
    <div className='main-footer'>
      <div className='secundary-footer'>
        <Aditional/>
        <Tooltips/>
      </div>
      <Copyright/>
    </div>
  );
}

export default Footer;