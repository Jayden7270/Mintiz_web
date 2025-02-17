import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import HowToUse from './pages/HowToUse';
import Export from './pages/Export';
import Footer from './components/Footer';
import Terms from './pages/Terms';

function App() {
  return (
    <HelmetProvider>
      <div className="App">
        <div className="floating-sphere"></div>
        <div className="floating-sphere"></div>
        <div className="floating-sphere"></div>
        <div className="floating-sphere"></div>
        
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/how-to-use" element={<HowToUse />} />
            <Route path="/export" element={<Export />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </HelmetProvider>
  );
}

export default App; 