import React from 'react';
import '../../styles/services/sections.css'

function Sections() {

  const section = [ 
    {
      url: "../images/imagesServicios/sistemas-cctv.webp",
      descripcion: "SISTEMA CCTV",
      info: <p>El Sistema CCTV (Circuito cerrado de televisión) es una
      de las ramas de la seguridad electrónica, el cual te
      permite visualizar a través de cámaras, las imágenes
      reales de lo que acontece en tu hogar, empresa o
      
      industria.</p>
    },
     
    {
      url: "../images/imagesServicios/monitoreo-cctv.webp",
      descripcion: "MONITOREO CCTV",
      info: <ul>
              <li>Opera las 24 horas del día, los 365 días del año.</li>
              <li>centralistas durante el día y la noche.</li>
              <li>Implementación de equipos tecnológicos.</li>
              <li>La central mantiene comunicación directa con todo el personal de seguridad.</li>
              <li>Control absoluto de todos los sistemas electrónicos, en este caso CAMARAS Y ALARMAS.</li>
              <li>Uso de bitácora virtual para registrar todas las novedades ocurridas en suturno.</li>
            </ul>
    },
    
     
    {
      url: "../images/imagesServicios/sistemas-alarmas.webp",
      descripcion: "SISTEMA DE ALARMAS",
      info: <p>Un sistema de alarma es un elemento de
      seguridad pasiva, esto significa que no
      evitan una situación anormal, pero sí son
      capaces de advertir de ella, cumpliendo
      así, una función disuasoria frente a
      posibles problemas.</p>
    },
     
    {
      url: "../images/imagesServicios/monitoreo-alarmas.webp",
      descripcion: "MONITOREO DE ALARMAS",
      info: <ul>
              <li>Agregamos valor a los sistemas de alarma instalados.</li>
              <li>Gestionamos las señales recibidas desde los dispositivos que llegan a nuestra Central de monitoreo.</li>
              <li>Implementación de acciones o el despliegue de protocolos previamente acordados con nuestros cliente.</li>
            </ul>
    },
     
    {
      url: "../images/imagesServicios/cerco-electrico.webp",
      descripcion: "CERCO ELÉCTRICO",
      info: <p>El cerco eléctrico está diseñado y
      fabricado para estar encendido las 24
      horas, resguardando la seguridad de una
      propiedad los 365 días del año. Siendo un
      producto de alto poder disuasivo porque
      trabaja con descargas no letales, de alto
      voltaje, pero de bajo amperaje.</p>
    },
     
    {
      url: "../images/imagesServicios/bitacora-electronica.webp",
      descripcion: "BITÁCORA ELECTRÓNICA",
      info: <ul>
              <li>Registro digital</li>
              <li>Consulta de historial de visitantes</li>
              <li>Descarga de información disponible 24/7</li>
              <li>Eliminación de uso de papel</li>
              <li>Optimiza el tiempo del personal</li>
              <li>Búsqueda inteligente: Por cédula, nombres, placas o usuario</li>
              <li>Software controlado por administración</li>

            </ul>
    },
     
    {
      url: "../images/imagesServicios/control-acceso.webp",
      descripcion: "CONTROL DE ACCESO",
      info: <p>Los sistemas de control de accesos son
      dispositivos que permiten o restringen la
      entrada a un trabajador mediante una
      identificación que puede ser una tarjeta,
      llavero, contraseña, su propia huella
      dactilar o los puntos biométricos de la
      cara.</p>
    },
     
    {
      url: "../images/imagesServicios/codigo-qr.webp",
      descripcion: "CÓDIGO QR",
      info: <ul>
              <li>Altos estándares de seguridad (códigos únicos y dinámicos)</li>
              <li>Notificaciones de acceso</li>
              <li>Trazabilidad de los invitados</li>
              <li>Residentes administran a sus invitados</li>
              <li>Eliminación de fila de visitantes</li>
              <li>Agilidad de entrada de visitantes</li>
            </ul>
    },
     
    {
      url: "../images/imagesServicios/control-vehicular.webp",
      descripcion: "SISTEMA DE CONTROL VEHICULAR",
      info: <p>Contamos con un sistema automatizado
      que mantiene un control de vehículos
      que entran y salen de un espacio público o
      privado (generalmente un estacionamiento).
      Con el control de acceso usted puede saber
      qué vehículos son residentes o visitantes, y
      permitirles el acceso bajo algunas
      condiciones.</p>
    },
     
    {
      url: "../images/imagesServicios/",
      descripcion: "Descripción específica 1",
      info: <p></p>
    },
     
    {
      url: "../images/imagesServicios/",
      descripcion: "Descripción específica 1",
      info: <p></p>
    },
  ]


  return (
    <div className="main-sections">
        {section.map((item, index) => (
            <div key={index} className={`section ${index % 2 === 0 ? 'section-color1' : 'section-color2'}`}>
                <div className={`card-section ${index % 2 === 0 ? 'card-section1' : 'card-section2'}`}>
                    <img src={item.url} alt={item.descripcion} />
                    <div className='text'>
                        <h1>{item.descripcion}</h1>
                        {item.info}
                    </div>
                </div>
            </div>
        ))}
    </div>
);
}

export default Sections;