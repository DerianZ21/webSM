import React from 'react';
import '../../styles/services/menuscrool.css'

function MenuScrool() {
    return (
        <div className='main-menu-scrool'>
            <button className="boton svg"
                onClick={() => {
                    document.getElementById('monitoreo').scrollIntoView({ behavior: 'smooth' });
                }}>
                <img src="../images/iconosSVG/monitoreo.svg" alt="Descripción de la imagen" />
            </button>
            <button className="boton svg"
                onClick={() => {
                    document.getElementById('sistema-hogar').scrollIntoView({ behavior: 'smooth' });
                }}>
                <img src="../images/iconosSVG/hogar.svg" alt="Descripción de la imagen" />
            </button>
            <button className="boton svg"
                onClick={() => {
                    document.getElementById('sistema-empresa').scrollIntoView({ behavior: 'smooth' });
                }}>
                <img src="../images/iconosSVG/oficina.svg" alt="Descripción de la imagen" />
            </button>
            <button className="boton png"
                onClick={() => {
                    document.getElementById('pinlet').scrollIntoView({ behavior: 'smooth' });
                }}>
                <img src="../images/imagesLogo/pinlet.png" alt="Descripción de la imagen" />
            </button>
        </div>
    );
}

export default MenuScrool;