import React from 'react';
import logo from '../assets/logo.png'; // Ensure you have a logo image in the assets folder

const Header = () => {
    return (
        <header>
            <img src={logo} alt="BMC Logo" className="logo" />
            <h1>BMC MEDICOLEGAL SOLUTIONS</h1>
            <p>Where Medical Expertise Meets Legal Excellence</p>
        </header>
    );
};

export default Header;