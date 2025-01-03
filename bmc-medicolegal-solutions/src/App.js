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
          <Services />
        </div>
        <div className="card">
          <Expertise />
        </div>
        <div className="card">
          <WhoWeServe />
        </div>
        <div className="card">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;