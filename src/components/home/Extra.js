import React from "react";
import '../../styles/home/extra.css'
import fondoExtra from '../../assets/images/nuestras/fondo-inicio.webp'



function Extra() {
    return (
        <div className="main-extra">
            <div className="img-extra">
                <img src={fondoExtra} alt=""></img>
            </div>
            <div className="contenedor-info-extra">
                <div>
                    <div className="info-extra">
                        <img src="" className="img-info-extra" alt=""></img>
                        <p className="text-info-extra"></p>
                    </div>
                    <div className="info-extra">
                        <img src="" className="img-info-extra" alt=""></img>
                        <p className="text-info-extra"></p>
                    </div>
                    <div className="info-extra">
                        <img src="" className="img-info-extra" alt=""></img>
                        <p className="text-info-extra"></p>
                    </div>
                    <div className="info-extra">
                        <img src="" className="img-info-extra" alt=""></img>
                        <p className="text-info-extra"></p>
                    </div>
                </div>
            </div>
        </div>
    )

}


export default Extra;