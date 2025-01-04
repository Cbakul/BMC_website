import React from 'react';
import logo from '../assets/logo.png'; // Ensure you have a logo image in the assets folder

const Header = () => {
    return (
        <header className="header-blend">
            <img src={logo} alt="BMC Insurance Solutions Logo" className="logo" />
            <nav>
                <a href="#services">Services</a>
                <a href="#expertise">Expertise</a>
                <a href="#whoweserve">Who We Serve</a>
                <a href="#meettheexperts">Meet the Experts</a>
                <a href="#contact">Contact</a>
            </nav>
        </header>
    );
};

export default Header;