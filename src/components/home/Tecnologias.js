import React from "react";
import '../../styles/home/tecnologia.css'
import biometrico from '../../assets/images/nuestras/sistema-biometricos.webp'
import codigo from '../../assets/images/nuestras/codigo-qr2.webp'
import ojo from '../../assets/images/icon/ojo.png'
import huella from '../../assets/images/icon/huella.png'
import rostro from '../../assets/images/icon/rostro.png'
import qr from '../../assets/images/icon/QR.png'
import contrasena from '../../assets/images/icon/contrasena.png'
import id from '../../assets/images/icon/id.png'


function Tecnologias() {
    return (
        <div className="main-tecnologias">
            <div className="content-tecnologia">
                <img className="img-tecnologia" src={biometrico}></img>
                <div className="info-tecnologia">
                    <div className="iconos-tecnologia iconos-biometricos">
                        <img src={ojo}></img>
                        <hr></hr>
                        <img src={huella}></img>
                        <hr></hr>
                        <img src={rostro}></img>
                    </div>
                    <p>Seguridad biometrica ya sea por escaner
                        <b> ocular</b>, de <b>huella</b> o <b>facial</b>, autentifica tus recursos en base a tus datos genéticos.</p>
                </div>
            </div>
            <div className="content-tecnologia">
                <img className="img-tecnologia" src={codigo}></img>
                <div className="info-tecnologia">
                    <div className="iconos-tecnologia iconos-codigo">
                        <img src={qr}></img>
                        <hr></hr>
                        <img src={contrasena}></img>
                        <hr></hr>
                        <img src={id}></img>
                    </div>
                    <p>Protéjete con tecnologias de autenticación en base a <b>codigos-QR</b>
                    , seguridad por <b>contraseñas</b> o <b>carnets</b> personalidados de identidad.</p>
                </div>
            </div>

        </div>
    )

}

export default Tecnologias;