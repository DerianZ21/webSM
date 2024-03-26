import React from 'react';
import { Link } from 'react-router-dom';

function Branding() {
    return (
        <div className="branding">
            <Link to="/about">
                <img className='logo' src='../images/imagesLogo/SeguridadManrique.jpg' alt="Logo Seguridad Manrique" />
            </Link>
            <div className="slogan">MANRIQUE SEGURIDAD</div>
            
        </div>

        );
}

export default Branding;