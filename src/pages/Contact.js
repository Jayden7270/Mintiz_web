import React, { useState } from 'react';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [charCount, setCharCount] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

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

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    const templateParams = {
      to_name: 'Mintiz',
      from_name: formData.name,
      from_email: formData.email,
      message: formData.message,
      reply_to: formData.email,
      subject: `[Mintiz 문의] ${formData.name}님의 문의사항`
    };

    try {
      const result = await window.emailjs.send(
'service_xhxqcoo',    // Email Services에서 확인한 Service ID
        'template_ejyl5vc',   // Email Templates에서 확인한 Template ID
        templateParams,
        'j1DLk5TITaqvskJbQ'
      );

      if (result.text === 'OK') {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setCharCount(0);
      } else {
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Email send error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>문의하기</h1>
        <p className="contact-description">
          Mintiz에 대해 궁금하신 점이 있으시다면 언제든 문의해주세요.
        </p>
        
        {submitStatus === 'success' && (
          <div className="alert success">
            문의가 성공적으로 전송되었습니다. 감사합니다!
          </div>
        )}
        
        {submitStatus === 'error' && (
          <div className="alert error">
            문의 전송 중 오류가 발생했습니다. 잠시 후 다시 시도해주세요.
          </div>
        )}

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

          <button 
            type="submit" 
            className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
            disabled={isSubmitting}
          >
            {isSubmitting ? '전송 중...' : '문의하기'}
          </button>
        </form>
      </div>
    </div>
  );
}

export default Contact; 