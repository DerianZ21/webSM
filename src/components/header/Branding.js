import React from 'react';
import { Link } from 'react-router-dom';

function Branding() {
    return (
        <div className="branding">
            <Link to="/about">
                <img className='logo' src='../images/imagesLogo/SeguridadManrique-sinfondo.png' alt="Logo Seguridad Manrique" />
            </Link>
            <img className='name-marca' src='../images/imagesLogo/logo-texto.svg' alt='nombre de la marca'>
            </img>
            
        </div>

        );
}

export default Branding;