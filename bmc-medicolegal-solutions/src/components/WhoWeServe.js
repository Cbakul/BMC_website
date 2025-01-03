import React from 'react';
import { FaUsers } from 'react-icons/fa';

const WhoWeServe = () => {
    return (
        <div className="card">
            <FaUsers className="icon" />
            <div className="card-content">
                <h2>Who We Serve</h2>
                <ul>
                    <li><strong>Policy Customers:</strong> Individual and group policy holders seeking expert guidance.</li>
                    <li><strong>Hospitals & Healthcare:</strong> Medical institutions requiring medicolegal support.</li>
                    <li><strong>Insurance Companies:</strong> Insurance providers seeking expert investigation and consultation services.</li>
                    <li><strong>Corporate & Government:</strong> Organizations needing comprehensive insurance solutions.</li>
                </ul>
            </div>
        </div>
    );
};

export default WhoWeServe;