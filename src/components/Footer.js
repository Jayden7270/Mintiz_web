import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-links">
          <a href="#" className="footer-link">회사 소개</a>
          <a href="#" className="footer-link">개인정보처리방침</a>
          <a href="#" className="footer-link">이용약관</a>
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