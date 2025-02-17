import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { ko } from 'date-fns/locale'; // 한국어 지원
import { FaCalendarAlt, FaKey, FaDownload, FaSearch, FaExclamationCircle } from 'react-icons/fa'; // 아이콘 추가
import { format } from 'date-fns';

function Export() {
  const [apiKey, setApiKey] = useState('');
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [status, setStatus] = useState('reqcomp'); // 'reqcomp'로 초기값 변경
  const [isDataReady, setIsDataReady] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  
  // 에러 상태 추가
  const [errors, setErrors] = useState({
    apiKey: '',
    startDate: '',
    endDate: '',
    status: ''
  });

  const API_ENDPOINT = 'https://www.mintizapp.com/api/export';

  const validateForm = () => {
    let isValid = true;
    const newErrors = {
      apiKey: '',
      startDate: '',
      endDate: '',
      status: ''
    };

    // API Key 검증
    if (!apiKey.trim()) {
      newErrors.apiKey = 'API Key를 입력해주세요';
      isValid = false;
    }

    // 시작일 검증
    if (!startDate) {
      newErrors.startDate = '시작일을 선택해주세요';
      isValid = false;
    }

    // 종료일 검증
    if (!endDate) {
      newErrors.endDate = '종료일을 선택해주세요';
      isValid = false;
    }

    // 상태 선택 검증
    if (!status) {
      newErrors.status = '상태를 선택해주세요';
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const handleStartDateChange = (date) => {
    setStartDate(date);
    setErrors(prev => ({...prev, startDate: ''}));
    if (endDate && date > endDate) {
      setEndDate(date);
    }
  };

  const handleEndDateChange = (date) => {
    setEndDate(date);
    setErrors(prev => ({...prev, endDate: ''}));
  };

  const handleApiKeyChange = (e) => {
    setApiKey(e.target.value);
    setErrors(prev => ({...prev, apiKey: ''}));
  };

  const handleStatusChange = (e) => {
    setStatus(e.target.value);
    setErrors(prev => ({...prev, status: ''}));
  };

  const handleExport = async () => {
    if (!validateForm()) return;

    setIsLoading(true);
    
    try {
      // status 값에 따라 올바른 백엔드 코드로 매핑
      const statusMapping = {
        'reqcomp': 'sts_reqcomp',       // 수거신청완료
        'kitdisp': 'sts_kitdisp',       // 키트배송완료
        'pkdtfix': 'sts_pkdtfix',       // 픽업일 확정
        'rtnrqst': 'sts_rtnrqst',       // 회수신청완료
        'colcomp': 'sts_colcomp',       // 입고완료
        'inscomp': 'sts_inscomp',       // 검수완료
        'paycomp': 'sts_paycomp',       // 입금완료
        'lastcollection': 'sts_lastcollection', // 지난수거
        'reqcncl': 'sts_reqcncl',       // 취소요청
  
    };
      const requestBody = {
        key: apiKey,
        startDate: format(startDate, 'yyyy-MM-dd'),
        endDate: format(endDate, 'yyyy-MM-dd'),
        searchStatus: statusMapping[status]
      };

      console.log('Request Body:', requestBody);

      const response = await fetch(API_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'text/csv'
        },
        body: JSON.stringify(requestBody)
      });

      console.log('Response Status:', response.status);
      console.log('Response Headers:', Object.fromEntries(response.headers.entries()));

      if (!response.ok) {
        const errorText = await response.text();
        console.error('Error Response:', errorText);
        throw new Error(`API 요청 실패: ${response.status} ${errorText}`);
      }

      const responseText = await response.text();
      console.log('Response Data (first 1000 chars):', responseText.substring(0, 1000));

      if (!responseText.trim()) {
        throw new Error('데이터가 없습니다.');
      }

      const blob = new Blob(["\ufeff", responseText], { type: 'text/csv;charset=utf-8' });
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `mintiz_export_${format(new Date(), 'yyyyMMdd_HHmmss')}.csv`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      setIsDataReady(true);
    } catch (error) {
      console.error('Export error:', error);
      alert(error.message || '데이터 내보내기 중 오류가 발생했습니다.');
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleExport();
  };

  const CustomInput = React.forwardRef(({ value, onClick }, ref) => (
    <button type="button" className="custom-datepicker-input" onClick={onClick} ref={ref}>
      <FaCalendarAlt className="calendar-icon" />
      <span>{value || '날짜 선택'}</span>
    </button>
  ));

  return (
    <div className="export-page">
      <div className="export-container">
        <div className="export-header">
          <h1>데이터 내보내기</h1>
          <p>원하는 기간의 데이터를 조회하고<br /> 다운로드하세요</p>
        </div>
        
        <form onSubmit={handleSubmit} className="export-form">
          <div className="form-section">
            <div className="form-group">
              <label htmlFor="apiKey">
                <FaKey className="input-icon" />
                API Key
              </label>
              <input
                type="password"
                id="apiKey"
                value={apiKey}
                onChange={handleApiKeyChange}
                placeholder="API Key를 입력하세요"
                className={`styled-input ${errors.apiKey ? 'error' : ''}`}
              />
              {errors.apiKey && (
                <div className="error-message">
                  <FaExclamationCircle /> {errors.apiKey}
                </div>
              )}
            </div>
          </div>

          <div className="form-section date-section">
            <div className="form-group">
              <label>시작일</label>
              <DatePicker
                selected={startDate}
                onChange={handleStartDateChange}
                selectsStart
                startDate={startDate}
                endDate={endDate}
                dateFormat="yyyy년 MM월 dd일"
                locale={ko}
                customInput={<CustomInput />}
                placeholderText="시작일 선택"
                className={`styled-datepicker ${errors.startDate ? 'error' : ''}`}
              />
              {errors.startDate && (
                <div className="error-message">
                  <FaExclamationCircle /> {errors.startDate}
                </div>
              )}
            </div>

            <div className="form-group">
              <label>종료일</label>
              <DatePicker
                selected={endDate}
                onChange={handleEndDateChange}
                selectsEnd
                startDate={startDate}
                endDate={endDate}
                minDate={startDate}
                dateFormat="yyyy년 MM월 dd일"
                locale={ko}
                customInput={<CustomInput />}
                placeholderText="종료일 선택"
                className={`styled-datepicker ${errors.endDate ? 'error' : ''}`}
              />
              {errors.endDate && (
                <div className="error-message">
                  <FaExclamationCircle /> {errors.endDate}
                </div>
              )}
            </div>
          </div>

          <div className="form-section">
            <div className="form-group">
              <label htmlFor="status">상태 선택</label>
              <select
                id="status"
                value={status}
                onChange={(e) => setStatus(e.target.value)}
                className={`styled-select ${errors.status ? 'error' : ''}`}
              >
                <option value="reqcomp">수거신청완료</option>
                <option value="kitdisp">키트배송완료</option>
                <option value="pkdtfix">픽업일 확정</option>
                <option value="rtnrqst">회수신청완료</option>
                <option value="colcomp">입고완료</option>
                <option value="inscomp">검수완료</option>
                <option value="paycomp">입금완료</option>
                <option value="lastcollection">지난수거</option>
                <option value="reqcncl">취소요청</option>
              </select>
              {errors.status && (
                <div className="error-message">
                  <FaExclamationCircle /> {errors.status}
                </div>
              )}
            </div>
          </div>

          <div className="button-section">
            <button 
              type="submit" 
              className={`submit-button ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? (
                <>
                  <span className="loading-spinner"></span>
                  <span>처리 중...</span>
                </>
              ) : (
                <>
                  <FaSearch className="button-icon" />
                  <span>내보내기</span>
                </>
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Export; 