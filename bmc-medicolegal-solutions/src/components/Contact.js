import React from 'react';
import { FaEnvelope } from 'react-icons/fa';

const Contact = () => {
    return (
        <div className="card">
            <FaEnvelope className="icon" />
            <div className="contact">
                <h2>Contact Us</h2>
                <p>BMC MEDICOLEGAL SOLUTIONS</p>
                <p>Pune, Maharashtra, India</p>
                <p>Phone: +91-9881409217</p>
                <p>Email: <a href="mailto:cbakul@gmail.com">cbakul@gmail.com</a></p>
            </div>
        </div>
    );
};

export default Contact;