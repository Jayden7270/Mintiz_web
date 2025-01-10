import React from 'react';

function Home() {
  return (
    <div className="service-intro">
      <h1>서비스 소개</h1>
      <div className="content">
        <h2>우리 회사는...</h2>
        <p>회사에 대한 소개 내용을 여기에 작성하세요.</p>
        
        <div className="features">
          <div className="feature">
            <h3>주요 서비스 1</h3>
            <p>서비스 설명</p>
          </div>
          <div className="feature">
            <h3>주요 서비스 2</h3>
            <p>서비스 설명</p>
          </div>
          <div className="feature">
            <h3>주요 서비스 3</h3>
            <p>서비스 설명</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 