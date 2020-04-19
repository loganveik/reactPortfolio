import React from 'react';
import './header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link} from "react-router-dom";

function Header(props) {
    return (
        <Navbar className="navColor" variant="dark">
            <Nav className="mr-auto">
                <Link className="linkText mx-3" to="/">About</Link>
                <Link className="linkText mx-3" to="/portfolio">Portfolio</Link>
            </Nav>
            <Nav>
                <Navbar.Brand style={{fontSize: 30}}>{props.aboutORportfolio}</Navbar.Brand>
            </Nav >
        </Navbar>
    );
}

export default Header;