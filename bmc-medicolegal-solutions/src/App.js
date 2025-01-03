import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Expertise from './components/Expertise';
import WhoWeServe from './components/WhoWeServe';
import Contact from './components/Contact';
import './styles/main.css';
import { FaBriefcase, FaUserMd, FaUsers, FaEnvelope } from 'react-icons/fa';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <div className="card">
          <FaBriefcase className="icon" />
          <Services />
        </div>
        <div className="card">
          <FaUserMd className="icon" />
          <Expertise />
        </div>
        <div className="card">
          <FaUsers className="icon" />
          <WhoWeServe />
        </div>
        <div className="card">
          <FaEnvelope className="icon" />
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;