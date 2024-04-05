import React from 'react';

function Tooltips() {
    return (
        <div className='tooltips'>
            <p>SIGUENOS</p>
            <div className="redes">
                <a href="https://ec.linkedin.com/in/manrique-seguridad-0b790820a" target="_blank" rel="noopener noreferrer">
                    <img id='icon-linkedin' className="iconos-redes" src={process.env.PUBLIC_URL + "/images/imagesLogo/linkedin.png"} alt="Linkedin" />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img id='icon-facebook' className="iconos-redes" src={process.env.PUBLIC_URL + "/images/imagesLogo/facebook.png"} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img id='icon-instagram' className="iconos-redes" src={process.env.PUBLIC_URL + "/images/imagesLogo/instagram.png"} alt="instagram" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <img id='icon-twitter' className="iconos-redes" src={process.env.PUBLIC_URL + "/images/imagesLogo/x.png"} alt="Twitter" />
                </a>
                <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                    <img id='icon-whatsapp' className="icono-whatsapp" src={process.env.PUBLIC_URL + "/images/imagesLogo/whatsapp.png"} alt="WhatsApp" />
                </a>
            </div>
        </div>
    );
}

export default Tooltips;