import React from 'react';
import instagram from '../../assets/images/logo/instagram.png';
import twitter from '../../assets/images/logo/x.png';
import facebook from '../../assets/images/logo/facebook.png';
import whatsapp from '../../assets/images/logo/whatsapp.png';
import linkedin from '../../assets/images/logo/linkedin.png';


function Tooltips() {
    return (
        <div className='tooltips'>
            <h3>SIGUENOS</h3>
            <div className="redes">
                <a href="https://ec.linkedin.com/in/manrique-seguridad-0b790820a" target="_blank" rel="noopener noreferrer">
                    <img id='icon-linkedin' src={linkedin} className="icono iconos-redes"alt="Linkedin" />
                </a>
                <a href="https://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                    <img id='icon-facebook' className="icono iconos-redes" src={facebook} alt="Facebook" />
                </a>
                <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
                    <img id='icon-instagram' className="icono iconos-redes" src={instagram} alt="instagram" />
                </a>
                <a href="https://twitter.com/" target="_blank" rel="noopener noreferrer">
                    <img id='icon-twitter' className="icono iconos-redes" src={twitter} alt="Twitter" />
                </a>
                <a href="https://www.whatsapp.com/" target="_blank" rel="noopener noreferrer">
                    <img id='icon-whatsapp' className="icono-whatsapp" src={whatsapp} alt="WhatsApp" />
                </a>
            </div>
        </div>
    );
}

export default Tooltips;