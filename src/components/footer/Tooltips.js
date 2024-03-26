import React from 'react';

function Tooltips() {
  return (
      <div className="tooltips">
        <a href="https://tiktok.com/" target="_blank" rel="noopener noreferrer">
            <img className="iconos-redes" src={process.env.PUBLIC_URL + "/images/imagesLogo/tiktok.png"} alt="Twitter" />
        </a>
        <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
            <img className="iconos-redes" src={process.env.PUBLIC_URL + "/images/imagesLogo/facebook.png"} alt="Facebook" />
        </a>
        <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
            <img className="iconos-redes" src={process.env.PUBLIC_URL + "/images/imagesLogo/whatsapp.png"} alt="WhatsApp" />
        </a>
        <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
            <img className="iconos-redes" src={process.env.PUBLIC_URL + "/images/imagesLogo/x.png"} alt="Twitter" />
        </a>
    </div>
  );
}

export default Tooltips;