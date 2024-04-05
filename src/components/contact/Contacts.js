import React from 'react';
import Map from './Map'
import FormEmail from './FormEmail'
import '../../styles/contact/contact.css'

function Contacts() {

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
    <div className='main-contact'>
      <div className='contactos'>

        {persona.map((item, index) => (
          <div className='datos-contactos'>
            <h2 className='dato-cargo'>{item.cargo}</h2>
            <h3 className='dato-nombre'>{item.nombre}</h3>
            <div className='datos-info'>
              <div className='info-numero'>
                <img className='icono-contacto' src='/images/iconos-png/telefono.png' alt='icon de teléfono'></img>
                <p className='info-numero'>{item.numero}</p>
              </div>
              <div className='info-email'>
                <img className='icono-contacto' src='/images/iconos-png/email.png' alt='icon de correo'></img>
                <p className='info-correo'>{item.correo}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      <Map />
      <FormEmail />
    </div>
  );
}

export default Contacts;