import React from 'react';
import ReactSwitch from 'react-switch';
import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import menu from '../../assets/images/icon/menu.png'

function Navigation() {

  const [temaOscuro, setTemaOscuro] = useState(false);

  // Efecto para aplicar el tema al cargar el componente
  useEffect(() => {
    aplicarTema(temaOscuro);
  }, [temaOscuro]);


  const toggleTema = (checked) => {
    setTemaOscuro(checked);
  };

  const aplicarTema = (oscuro) => {
    if (oscuro) {
      document.documentElement.style.setProperty('--color-fondo', '#1d1e29');
      document.documentElement.style.setProperty('--color-fuente', '#fff');
      document.documentElement.style.setProperty('--color-icono', 'brightness(0) invert(1)');
    } else {
      document.documentElement.style.setProperty('--color-fondo', '#fff');
      document.documentElement.style.setProperty('--color-fuente', '#000');
      document.documentElement.style.setProperty('--color-icono', 'brightness(0) invert(0)');
    }
  };

  const navigate = useNavigate();

  const goToAboutSection = () => {
    navigate("/#main-about");
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='main-navegation'>

      <ul className={`menu ${isMenuOpen ? 'open' : 'close'}`}>
        <li id="menu-toggle" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img className='icon-menu' src={menu} alt='icon-menu'></img>
        </li>
        <li ><Link to="/">Home</Link></li>
        <li ><Link to="/services">Services</Link></li>
        <li ><Link to="/contacts">Contacts</Link></li>
        <li className='contenedor-temas'>
          <div>
            <label>
              <span>{temaOscuro ? '' : ''}</span>
              <ReactSwitch
                onChange={toggleTema}
                checked={temaOscuro} height={15}
                width={30}
                handleDiameter={15}
                uncheckedIcon={false}
                checkedIcon={false}
                onColor="#cccccc"
                offColor="#333"
                onHandleColor="#fff"
                offHandleColor="#fff" />
            </label>
          </div>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;