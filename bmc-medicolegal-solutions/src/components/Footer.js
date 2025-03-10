import React from 'react';
import logo from '../assets/logo.png'; // Ensure you have a logo image in the assets folder

const Footer = () => {
    return (
        <footer>
            <div className="footer-content">
                <img src={logo} alt="Venetus Mirror Logo" className="logo" />
                <h3>VENETUS MIRROR HEALTH TECH</h3>
                <p>Where Medical Expertise Meets Legal Excellence</p>
                <div className="contact-info">
                    <p>Pune, Maharashtra, India</p>
                    <p>Phone: +91-9881409217</p>
                    <p>Email: bmcmedicolegalservices@gmail.com</p>
                </div>
                <div className="copyright">
                    <p>&copy; {new Date().getFullYear()} Venetus Mirror Health Tech. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;