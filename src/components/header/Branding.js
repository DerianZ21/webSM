import React from 'react';
import { Link } from 'react-router-dom';
import logoSM from '../../assets/images/logo/SeguridadManrique-sinfondo.png';
import nameSM from '../../assets/images/logo/ms-logo-texto.svg';


function Branding() {
    return (
        <div className="branding">
            <Link to="/about">
                <img className='logo' src={logoSM} alt="Logo Seguridad Manrique" />
            </Link>
            <img className='name-marca' src={nameSM} alt='nombre de la marca'>
            </img>
            
        </div>

        );
}

export default Branding;