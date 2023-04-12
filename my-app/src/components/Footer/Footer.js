import React from "react";
import './Footer.css';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="block-logo">
                    <figure className='logo'>
                        <img src='../Logo.svg' alt="Logo Lumi"/>
                    </figure>
                </div>
                <div className="block-copyright">
                    <p className="copyright">© 2023 Lumi by Pampers</p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;