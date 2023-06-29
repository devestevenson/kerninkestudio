import { useState } from 'react'

import Logo from '/src/assets/images/Logo.png';
import { List, X } from "@phosphor-icons/react";

import '../navbar/Nav.css';

const Nav = () => {

    //Para abrir el menú
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen)
    };
    
    //Activar cada link
    const [selectedOption, setSelectedOption] = useState('');
    const handleOptionClick = (option) => {
    setSelectedOption(option);
    };

  return (
    <>

        <nav className="nav">
            <a href='/' className="navLogo"><img src={Logo} alt={Logo} /></a>
            <ul className="navBox">
                <li><a href="#" className={selectedOption === 'nosotros' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('nosotros')}>Nosotros</a></li>
                <li><a href="#" className={selectedOption === 'portafolio' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('portafolio')}>Portafolio</a></li>
                <li><a href="#" className={selectedOption === 'servicios' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('servicios')}>Servicios</a></li>
                <li><a href="#" className={selectedOption === 'contacto' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('contacto')}>Contacto</a></li>
            </ul>
            <a href="/" className="navButtonHireServices">Contratar</a>
            <button className="navButtonHamburger" onClick={toggleDropdown}>
                {isDropdownOpen ? (
                    <X className='closeIcon' color='#FFFFFF'/>
                ) : (
                    <List className='openIcon' color='#FFFFFF' />
                )}
            </button>
        </nav>
        <ul className={`navDropdown ${isDropdownOpen ? 'openNav' : ''}`}>
            <li><a href="#" className={selectedOption === 'nosotros' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('nosotros')}>Nosotros</a></li>
            <li><a href="#" className={selectedOption === 'portafolio' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('portafolio')}>Portafolio</a></li>
            <li><a href="#" className={selectedOption === 'servicios' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('servicios')}>Servicios</a></li>
            <li><a href="#" className={selectedOption === 'contacto' ? 'navBoxLink active' : 'navBoxLink'} onClick={() => handleOptionClick('contacto')}>Contacto</a></li>
            <li><a href="#" className="navButtonHireServices">Contratar</a></li>
        </ul>

    </>
  )
}

export default Nav