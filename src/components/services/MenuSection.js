import React from 'react';
import '../../styles/services/menuscrool.css'

function MenuSection() {
    return (
        <div className='main-menu-scrool'>
            <button className="boton svg">
                <img src="../images/iconosSVG/monitoreo.svg" alt="Descripción de la imagen" />
            </button>
            <button className="boton svg">
                <img src="../images/iconosSVG/hogar.svg" alt="Descripción de la imagen" />
            </button>
            <button className="boton svg">
                <img src="../images/iconosSVG/oficina.svg" alt="Descripción de la imagen" />
            </button>
            <button className="boton png">
                <img src="../images/imagesLogo/pinlet.png" alt="Descripción de la imagen" />
            </button>
        </div>
        
    );
}

export default MenuSection;