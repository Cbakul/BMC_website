import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Services from './components/Services';
import Expertise from './components/Expertise';
import WhoWeServe from './components/WhoWeServe';
import Contact from './components/Contact';
import './styles/main.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Services />
        <Expertise />
        <WhoWeServe />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;