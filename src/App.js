import React, { useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Contact from './pages/Contact';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    const createBubbles = () => {
      const bubblesContainer = document.createElement('div');
      bubblesContainer.className = 'floating-bubbles';
      
      for (let i = 0; i < 15; i++) {
        const bubble = document.createElement('div');
        bubble.className = 'bubble';
        const size = Math.random() * 70 + 30;
        bubble.style.width = `${size}px`;
        bubble.style.height = `${size}px`;
        bubble.style.left = `${Math.random() * 100}vw`;
        bubble.style.top = `${Math.random() * 100}vh`;
        bubble.style.animationDelay = `${Math.random() * 20}s`;
        bubble.style.animationDuration = `${Math.random() * 10 + 15}s`;
        bubblesContainer.appendChild(bubble);
      }
      
      document.body.appendChild(bubblesContainer);
    };

    createBubbles();

    return () => {
      const bubbles = document.querySelector('.floating-bubbles');
      if (bubbles) {
        bubbles.remove();
      }
    };
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 