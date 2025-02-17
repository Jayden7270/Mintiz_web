import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate(); // useNavigate hook for programmatic navigation

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTermsClick = () => {
    window.open('/terms');
    setMenuOpen(false);
  };

  const handleHowToUseClick = () => {
    navigate('/how-to-use'); // Navigate to the HowToUse page
    setMenuOpen(false);
  };

  const handleContactClick = () => {
    navigate('/contact'); // Navigate to the Contact page
    setMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link to="/">Mintiz</Link>
        </div>
        <button 
          className={`mobile-menu-btn ${menuOpen ? 'active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" className="nav-link" onClick={() => setMenuOpen(false)}>홈</Link>
          <button onClick={handleTermsClick} className="nav-link">이용약관</button>
          <button onClick={handleHowToUseClick} className="nav-link">이용방법</button>
          <button onClick={handleContactClick} className="nav-link">문의하기</button>
          <Link to="/pickup-request" className="nav-button primary" onClick={() => setMenuOpen(false)}>수거 신청</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;