import React from "react";
import '../../styles/home/extra.css'
import fondoExtra from '../../assets/images/nuestras/fondo-inicio.webp';
import tecnologia from '../../assets/images/icon/tecnologia.png';
import grabacion from '../../assets/images/icon/grabacion.png';
import monitorizacion from '../../assets/images/icon/monitoreo.svg';
import registros from '../../assets/images/icon/registros.png';



function Extra() {
    return (
        <div className="main-extra">
            <div className="img-extra">
                <img src={fondoExtra} alt=""></img>
            </div>
            <div className="contenedor-info-extra">
                <div className="content-centrado">
                    <div className="info-extra">
                        <img src={tecnologia} className="img-info-extra" alt=""></img>
                        <p className="text-info-extra">Tecnología</p>
                    </div>
                    <div className="info-extra">
                        <img src={grabacion} className="img-info-extra" alt=""></img>
                        <p className="text-info-extra">Grabación</p>
                    </div>
                    <div className="info-extra">
                        <img src={monitorizacion} className="img-info-extra" alt=""></img>
                        <p className="text-info-extra">Monitorización</p>
                    </div>
                    <div className="info-extra">
                        <img src={registros} className="img-info-extra" alt=""></img>
                        <p className="text-info-extra">Registros</p>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Extra;