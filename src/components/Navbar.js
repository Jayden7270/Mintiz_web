import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleTermsClick = () => {
    window.open('https://hyperhire.notion.site/Mintiz-1777ac1c0f2f800eb895f27106ac857f?pvs=4', '_blank');
    setMenuOpen(false);
  };

  const handleContactClick = () => {
    navigate('/contact');
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
          <button onClick={handleContactClick} className="nav-link">문의하기</button>
          <button className="nav-button primary">수거 신청</button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 