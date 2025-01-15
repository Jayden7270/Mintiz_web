import React from 'react';
import priceImage from '../image/Price.png';
import usageImage from '../image/Usage.png';

function HowToUse() {
  return (
    <div className="howto-page">
      {/* 가격 섹션 */}
      <section className="price-section">
        <h2 className="section-title">매입 단가 안내</h2>
        <div className="price-content card">
          <img 
            src={priceImage} 
            alt="매입 단가표" 
            className="price-image"
            onError={(e) => {
              console.error('Price 이미지 로드 실패');
              console.log('시도한 경로:', e.target.src);
            }}
          />
        </div>
      </section>

      {/* 이용방법 섹션 */}
      <section className="usage-section">
        <h2 className="section-title">이용 방법</h2>
        <div className="usage-steps">
          <div className="step-card card">
            <div className="step-number">01</div>
            <h3>방문 수거 신청</h3>
            <p>원하시는 날짜와 시간에 맞춰 방문하여 수거해 드립니다.</p>
          </div>

          <div className="step-card card">
            <div className="step-number">02</div>
            <h3>택배 수거 신청</h3>
            <p>택배로 간편하게 보내실 수 있습니다.</p>
          </div>

          <div className="step-card card">
            <div className="step-number">03</div>
            <h3>의류 검수</h3>
            <p>전문가가 꼼꼼하게 검수 후 매입가를 산정합니다.</p>
          </div>
        </div>
        <div className="usage-image-container card">
          <img 
            src={usageImage} 
            alt="이용 방법 안내" 
            className="usage-image"
            onError={(e) => {
              console.error('Usage 이미지 로드 실패');
              console.log('시도한 경로:', e.target.src);
            }}
          />
        </div>
      </section>
    </div>
  );
}

export default HowToUse; 