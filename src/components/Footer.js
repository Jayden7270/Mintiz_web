import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
        <a 
      href="https://hyperhire.notion.site/Mintiz-1777ac1c0f2f800eb895f27106ac857f?pvs=4" 
      className="footer-link" 
      target="_blank" 
      rel="noopener noreferrer">
      이용약관
</a>    </div>
<div className="footer-links">
          <Link 
            to="/privacy-policy" 
            className="footer-link">
            개인정보처리방침
          </Link>    
        </div>
        <p className="copyright">
          © 2024 Mintiz. All rights reserved.<br />
          <small>환경을 생각하는 의류수거 플랫폼</small>
        </p>
      </div>
    </footer>
  );
}

export default Footer; 