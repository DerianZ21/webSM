import React from "react";
import '../../styles/home/extra.css'
import fondoExtra from '../../assets/images/nuestras/fondo-inicio.webp';
import tecnologia from '../../assets/images/icon/tecnologia.svg';
import grabacion from '../../assets/images/icon/grabacion.svg';
import monitorizacion from '../../assets/images/icon/seguro.svg';
import registros from '../../assets/images/icon/informacion.svg';



function Extra() {
    return (
        <div className="main-extra">
            <div className="img-extra">
                <img className="img-fondo-extra img1" src={fondoExtra} alt="imagen de monitoreo"></img>
                <img className="img-fondo-extra img2" src={fondoExtra} alt="imagen de monitoreo"></img>
            </div>
            <div className="contenedor-info-extra">
                <div className="content-centrado">
                    <div className="info-extra">
                        <img src={tecnologia} className="img-info-extra" alt=""></img>
                        <h3>TECNOLOGÍA</h3>
                        <p>de alta calidad para detectar cualquier amenaza posible</p>
                    </div>
                    <div className="info-extra">
                        <img src={grabacion} className="img-info-extra" alt=""></img>
                        <h3>GRABACIÓN</h3>
                        <p>y monitoreo constante desde donde desees acceder</p>
                    </div>
                    <div className="info-extra">
                        <img src={monitorizacion} className="img-info-extra" alt=""></img>
                        <h3>SEGURO</h3>
                        <p>y confiable para el cuidado de tu familia</p>
                    </div>
                    <div className="info-extra">
                        <img src={registros} className="img-info-extra" alt=""></img>
                        <h3>INFORMES</h3>
                        <p>presisos en bitácoras electrónicas</p>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Extra;