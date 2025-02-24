import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo">
          <Link
            to="/"
            onClick={(e) => {
              // 홈 페이지라면 이동 막고 최상단으로
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            Mintiz
          </Link>
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
          {/* 홈 */}
          <Link
            to="/"
            className="nav-link"
            onClick={(e) => {
              setMenuOpen(false);
              if (window.location.pathname === '/') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            홈
          </Link>

          {/* 이용약관 */}
          <Link
            to="/terms"
            className="nav-link"
            onClick={(e) => {
              setMenuOpen(false);
              if (window.location.pathname === '/terms') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            이용약관
          </Link>

          {/* 이용방법 */}
          <Link
            to="/how-to-use"
            className="nav-link"
            onClick={(e) => {
              setMenuOpen(false);
              if (window.location.pathname === '/how-to-use') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            이용방법
          </Link>

          {/* 문의하기 */}
          <Link
            to="/contact"
            className="nav-link"
            onClick={(e) => {
              setMenuOpen(false);
              if (window.location.pathname === '/contact') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            문의하기
          </Link>

          {/* 수거 신청 */}
          <Link
            to="/pickup-request"
            className="nav-button primary"
            onClick={(e) => {
              setMenuOpen(false);
              if (window.location.pathname === '/pickup-request') {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: 'smooth' });
              }
            }}
          >
            수거 신청
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;