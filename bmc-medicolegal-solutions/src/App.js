import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Expertise from './components/Expertise';
import WhoWeServe from './components/WhoWeServe';
import Contact from './components/Contact';
import './styles/main.css';
import heroImage from './assets/hero-image.png'; // Ensure you have a hero image in the assets folder

function App() {
  return (
    <div className="App">
      <Header />
      <div className="hero">
        <h1>Welcome to BMC Insurance Solutions</h1>
        <p>Your trusted partner in medicolegal expertise</p>
        <a href="#contact" className="cta-button">Contact Us</a>
      </div>
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
        <div className="card" id="contact">
          <Contact />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default App;