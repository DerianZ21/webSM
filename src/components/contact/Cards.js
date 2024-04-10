import React from "react"
import '../../styles/contact/cards.css'
import telefono from '../../assets/images/icon/telefono.png';
import email from '../../assets/images/icon/email.png';
function Cards() {


    const persona = [
        {
            cargo: "Gerente general",
            nombre: "Xavier Manrique M.",
            numero: "0994765866",
            correo: "xman@manriqueseguridad.com",
        },
        {
            cargo: "Gerente de Láminas",
            nombre: "Angela Ycaza R.",
            numero: "099428226",
            correo: "laminas@manriqueseguridad.com",
        },
    ]
    return (

        <div className="main-cards">
            <div className='contactos'>
                {persona.map((item, index) => (
                    <div className='datos-contact'>
                        <div>
                            <h2 className='dato-cargo'>{item.cargo}</h2>
                            <hr></hr>
                            <h3 className='dato-nombre'>{item.nombre}</h3>
                        </div>
                        <div className='datos-info'>
                            <div className='info-numero'>
                                <img className='icono-contacto' src={telefono} alt='icon de teléfono'></img>
                                <p>{item.numero}</p>
                            </div>
                            <div className='info-email'>
                                <img className='icono-contacto' src={email} alt='icon de correo'></img>
                                <p>{item.correo}</p>
                            </div>
                        </div>
                        <hr></hr>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Cards;