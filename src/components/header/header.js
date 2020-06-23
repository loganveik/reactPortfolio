import React from 'react';
import './header.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from "react-router-dom";

function Header(props) {
    return (
        <Navbar className="navColor" variant="dark">
            <Nav className="mr-auto">
                <Link className={props.about} to="/">About</Link>
                <Link className={props.portfolio} to="/portfolio">Portfolio</Link>
            </Nav>
            <Nav>
                <a className="resources" href="mailto:jumpswervelogan@gmail.com">
                    <i className="far fa-envelope email"></i>
                </a>
            </Nav >
        </Navbar>
    );
}

export default Header;