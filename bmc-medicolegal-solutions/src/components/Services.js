import React from 'react';
import { FaBriefcase } from 'react-icons/fa';

const Services = () => {
    return (
        <div className="card">
            <FaBriefcase className="icon" />
            <div className="card-content">
                <h2>Specialized Services</h2>
                <ul>
                    <li>
                        <h3>Pre-Health Insurance Verification</h3>
                        <p>Comprehensive video verification services before underwriting to ensure accurate risk assessment.</p>
                    </li>
                    <li>
                        <h3>Medicolegal Consulting</h3>
                        <p>Expert consultation for hospitals, insurance companies, and individuals with full case defense rights.</p>
                    </li>
                    <li>
                        <h3>Digital Claim Investigation</h3>
                        <p>Advanced digital investigation techniques for thorough claim verification and fraud prevention.</p>
                    </li>
                </ul>
            </div>
        </div>
    );
};

export default Services;