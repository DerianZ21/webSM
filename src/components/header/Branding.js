import React from 'react';
import { Link } from 'react-router-dom';

function Branding() {
    return (
        <div className="branding">
            <Link to="/about">
                <img id='logo' src='../images/imagesLogo/SeguridadManrique.jpg' alt="Logo Seguridad Manrique" />
            </Link>
            <img id='name-marca' src='../images/imagesLogo/logo-texto.svg' alt='nombre de la marca'>
            </img>
            
        </div>

        );
}

export default Branding;