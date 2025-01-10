import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [charCount, setCharCount] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'message') {
      if (value.length <= 500) {
        setCharCount(value.length);
        setFormData(prev => ({ ...prev, [name]: value }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기에 폼 제출 로직 추가
    console.log('Form submitted:', formData);
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>문의하기</h1>
        <p className="contact-description">
          Mintiz에 대해 궁금하신 점이 있으시다면 언제든 문의해주세요.
        </p>
        
        <form onSubmit={handleSubmit} className="contact-form">
          <div className="form-group">
            <label htmlFor="name">이름</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="홍길동"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">이메일</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="example@email.com"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="message">문의내용</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="문의하실 내용을 입력해주세요. (최대 500자)"
              rows="6"
              required
            />
            <div className="char-count">
              {charCount}/500
            </div>
          </div>

          <button type="submit" className="submit-button">
            문의하기
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact; 