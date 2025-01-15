import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div className="home-page">
      <div className="floating-sphere"></div>
      <div className="floating-sphere"></div>
      <div className="floating-sphere"></div>

      <section className="hero">
        <div className="hero-content">
          <h1 className="hero-title">Mintiz에 오신 것을 환영합니다!</h1>
          <p className="hero-description">
            지구를 위한 의류 수거 플랫폼으로, 지속 가능한 미래를 함께 만들어갑니다.
          </p>
          <Link to="/contact" className="button-primary">지금 시작하기</Link>
        </div>
      </section>

      <section className="features">
        <h2 className="section-title">우리의 특징</h2>
        <div className="features-grid">
          <div className="feature-card">
            <h3>편리한 수거 서비스</h3>
            <p>간편한 신청으로 집 앞에서 의류를 수거합니다.</p>
          </div>
          <div className="feature-card">
            <h3>지속 가능한 패션</h3>
            <p>재활용과 재사용을 통해 환경을 보호합니다.</p>
          </div>
          <div className="feature-card">
            <h3>커뮤니티 참여</h3>
            <p>지속 가능한 패션을 위한 다양한 이벤트에 참여하세요.</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 