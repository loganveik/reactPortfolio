import React from 'react';
import './footer.css';

function Footer() {
    return (
        <footer className="text-center">
            <p className="footertext mx-1">© Logan Veik</p>
            <p className="footertext mx-1">|</p>
            <a href="https://github.com/loganveik/reactPortfolio">
                <i className="fab fa-github mx-1" style={{ color: "white", fontSize: 25}}></i>
            </a>
        </footer>
    );
}
export default Footer;