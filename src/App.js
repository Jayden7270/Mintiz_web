import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  return (
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
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App; 