import React, { useState } from 'react';
import Logo from '../../Images/Logo.svg';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);
    return (
        <header>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <figure className='logo'>
                        <a href="/" className='logo'>
                            <img src={Logo} alt="Logo Lumi"/>
                        </a>
                    </figure>
                    <button className='btn btn-primary btn-medium mobile'>Sign In or Register</button>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <a href="#smart-sleep" className='nav-links'>
                                Smart Sleep Coach
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#pro" className='nav-links'>
                                Upgrade to Pro
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#plan" className='nav-links'> 
                                Sleep Plans
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#reviews" className='nav-links'>                                
                                Reviews
                            </a>
                        </li>
                        <li className='nav-item'>
                            <a href="#faqs" className='nav-links'>
                                FAQs
                            </a>
                        </li>
                    </ul>
                    <button className='btn btn-topbar btn-medium laptop'>SIGN IN or REGISTER</button>
                </div>
            </nav>
        </header>
    )
}

export default Navbar;