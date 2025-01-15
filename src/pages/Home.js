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
          <h1 className="hero-title">
            <span className="gradient-text">지구를 위한</span><br />
            의류수거 플랫폼
          </h1>
          <p className="hero-subtitle">
            더 나은 미래를 위한 첫걸음,<br />
            Mintiz와 함께 시작하세요.
          </p>
          <div className="hero-buttons">
            <Link to="/contact" className="button-primary">시작하기</Link>
            <a href="#features" className="button-secondary">더 알아보기</a>
          </div>
        </div>
        <div className="hero-image">
          <div className="image-container">
            <img src="/images/hero-image.png" alt="Mintiz Service" />
          </div>
        </div>
      </section>

      <section id="features" className="features">
        <h2 className="section-title">Why Mintiz?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">🌱</div>
            <h3>환경 보호</h3>
            <p>의류 재활용을 통한<br />지속 가능한 미래 창출</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">🚚</div>
            <h3>편리한 수거</h3>
            <p>원하는 시간과 장소에서<br />간편한 수거 서비스</p>
          </div>
          <div className="feature-card">
            <div className="feature-icon">💝</div>
            <h3>나눔의 가치</h3>
            <p>의미 있는 기부로<br />따뜻한 마음 전달</p>
          </div>
        </div>
      </section>

      <section className="impact">
        <div className="impact-content">
          <h2 className="section-title">Our Impact</h2>
          <div className="impact-stats">
            <div className="stat-card">
              <h3>1,234kg</h3>
              <p>수거된 의류</p>
            </div>
            <div className="stat-card">
              <h3>567명</h3>
              <p>참여 회원</p>
            </div>
            <div className="stat-card">
              <h3>89톤</h3>
              <p>감소된 탄소</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <div className="cta-content">
          <h2>지금 바로 시작하세요</h2>
          <p>더 나은 미래를 위한 작은 실천이 큰 변화를 만듭니다.</p>
          <Link to="/contact" className="button-primary">문의하기</Link>
        </div>
      </section>
    </div>
  );
}

export default Home; 