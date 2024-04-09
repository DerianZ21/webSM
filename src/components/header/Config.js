import React, { useState } from "react";


function Config() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <div>
            <ul className={`menu-config ${isMenuOpen ? 'open' : 'close'}`}>
                <li id="btn-config" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                    <img className="icono-config" src="/images/iconos-png/configuracion.png" alt="icono de configuración"></img>
                    <img className="icono-despliegue" src="/images/iconos-png/despliegue.png" alt="icono de despliegue"></img>
                </li>
                <li>
                    <h4>Tema</h4>
                </li>
                <li>
                    <h4>Idioma</h4>
                </li>
            </ul>
        </div>
    );
}

export default Config;