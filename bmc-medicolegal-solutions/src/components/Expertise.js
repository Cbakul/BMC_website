import React from 'react';
import { FaUserMd } from 'react-icons/fa';

const Expertise = () => {
  return (
    <div className="card">
      <FaUserMd className="icon" />
      <div className="card-content">
        <h2>Areas of Expertise</h2>
        <ul>
          <li>
            <strong>Ombudsman & Consumer Cases:</strong> Expert defense consultation for customers and insurance companies.
          </li>
          <li>
            <strong>Medicolegal Education:</strong> Professional lectures and awareness programs.
          </li>
          <li>
            <strong>Claims File Audit:</strong> Comprehensive medicolegal audit of insurance claims, including health benefit claims analytics and audit.
          </li>
          <li>
            <strong>Corporate Consulting:</strong> Specialized services for corporate and government sectors.
          </li>
          {/* other services  we  offer paragraph centered */}
          <h2>Other services we offer include:</h2>
          <li>
            <strong>Intellectual Property Law:</strong> Trademark and intellectual property consultation services.
          </li>
          <li>
            <strong>Financial Advisory:</strong> Health benefit claims and mutual fund consultation.
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Expertise;