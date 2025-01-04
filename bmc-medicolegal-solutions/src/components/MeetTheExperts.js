import React from 'react';
import profilePhoto from '../assets/profile-photo.jpg'; // Ensure you have a profile photo in the assets folder

const MeetTheExperts = () => {
  return (
    <div className="expert-card">
      <h2>Meet the Experts</h2>
      <div className="expert-details">
        <div className="expert-info">
          <h3>Dr. Bakul Chachra</h3>
          <p><strong>Experience:</strong></p>
          <ul>
            <li>Senior Manager - Claim Operations at SBI General Insurance</li>
            <li>Senior Manager - Medical Investigation at Fourth Force Investigation Services</li>
            <li>Provider Manager at NIVA (Max) BUPA Health Insurance</li>
            <li>Provider Networking Manager at MD India Health Insurance TPA PVT LTD</li>
          </ul>
          <p><strong>Education:</strong></p>
          <ul>
            <li>Post Graduate Diploma in Medico Legal Systems (PGDLMS) - Symbiosis College</li>
            <li>Bachelor in Homeopathic Medicine and Surgery (BHMS) - DKMM (Dakshin Kesari Muni Mishrilalji) Homeopathic Medical College</li>
          </ul>
          <p><strong>Skills:</strong> Healthcare Management, Insurance Operations, Legal and Regulatory</p>
          <p><strong>Certifications:</strong> Certified Business Analysis Professional (CBAP)</p>
        </div>
        <img src={profilePhoto} alt="Dr. Bakul Chachra" className="profile-photo" />
      </div>
    </div>
  );
};

export default MeetTheExperts;