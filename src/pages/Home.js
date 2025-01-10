import React from 'react';
import Logo from "../image/Logo.png"

function Home() {
  return (
    <div className="home">
      <section className="hero-section">
        <div className="hero-content">
          <h1>지구를 위한 작은 실천</h1>
          <p className="hero-subtitle">더 이상 버리지 마세요, 새로운 가치를 만들어요</p>
          <button className="cta-button">지금 시작하기</button>
        </div>
      </section>

      <section className="mission-section">
        <div className="container">
          <h2 className="section-title">Why MintiZ?</h2>
          <div className="mission-grid">
            <div className="mission-card">
              <span className="emoji">🌱</span>
              <h3>환경을 생각하는 방식</h3>
              <p>의류 폐기물로 인한 환경 오염을 줄이고, 지속 가능한 미래를 만듭니다</p>
            </div>
            <div className="mission-card">
              <span className="emoji">🚛</span>
              <h3>간편한 수거 서비스</h3>
              <p>원하는 날짜에 방문하여 소중한 의류를 수거합니다</p>
            </div>
            <div className="mission-card">
              <span className="emoji">💝</span>
              <h3>나눔의 가치</h3>
              <p>수거된 의류는 필요한 곳에 전달되어 새로운 가치를 만듭니다</p>
            </div>
          </div>
        </div>
      </section>

      <section className="process-section">
        <div className="container">
          <h2 className="section-title">이용 방법</h2>
          <div className="process-steps">
            <div className="step">
              <div className="step-number">01</div>
              <div className="step-emoji">📱</div>
              <h3>수거 신청</h3>
              <p>앱에서 간편하게 수거를 신청하세요</p>
            </div>
            <div className="step">
              <div className="step-number">02</div>
              <div className="step-emoji">🚛</div>
              <h3>방문 수거</h3>
              <p>전문 수거팀이 지정된 시간에 방문합니다</p>
            </div>
            <div className="step">
              <div className="step-number">03</div>
              <div className="step-emoji">💰</div>
              <h3>금액 적립</h3>
              <p>수거된 의류의 양에 따라 현금을 드립니다</p>
            </div>
          </div>
        </div>
      </section>

      <section className="impact-section">
        <div className="container">
          <h2 className="section-title">Environmental Impact</h2>
          <div className="impact-content">
            <div className="impact-text">
              <h3>함께 만드는 변화</h3>
              <p>MintiZ와 함께하는 모든 순간이<br/>지구를 위한 소중한 발걸음이 됩니다</p>
              <img src={Logo} alt="MintiZ Logo" className="logo-home-image" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home; 