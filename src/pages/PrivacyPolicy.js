import React, { useState, useEffect } from 'react';
import './PrivacyPolicy.css';
import { FaShieldAlt, FaSearch, FaChevronRight } from 'react-icons/fa';

function PrivacyPolicy() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeSection, setActiveSection] = useState('intro');

  const sections = {
    intro: {
      title: '개인정보처리방침 안내',
      content: `"민티지"(이하 '회사')는 "개인정보 보호법", "정보통신망 이용촉진 및 정보보호 등에 관한 법률"에 따라 이용자의 개인정보 보호 및 권익을 보호하고 개인정보와 관련한 이용자의 고충을 원활하게 처리할 수 있도록 다음과 같은 처리방침을 두고 있습니다. 
'회사'는 개인정보취급방침을 개정하는 경우 '회사'가 서비스하는 어플리케이션 및 웹사이트(이하 '서비스'라 합니다)의 공지사항, 
또는 개별 공지를 통하여 해당 내용을 공유합니다.`
    },
  
    purpose: {
      title: '제1조 (개인정보의 처리목적)',
      content: `1. 회사는 개인정보를 다음의 목적을 위해 처리합니다. 처리한 개인정보는 다음의 목적 이외의 용도로는 사용되지 않으며 
이용 목적이 변경될 시에는 사전동의를 구합니다.
1) 서비스 회원 가입 및 관리 : 회원 가입의사 확인, 회원제 서비스 제공에 따른 본인 식별·인증, 회원자격 유지·관리, 제한적 본인 확인 제도 시행에 따른 
본인확인, 서비스 부정이용 방지, 비인가 사용방지, 만14세 미만 아동 개인정보 수집 시 법정대리인 동의 여부 확인, 카카오 및 네이버 서비스를 
이용한 회원가입, 서비스 제공 및 계약의 이행, 약관변경 등의 고지를 위한 연락, 서비스 이용 및 상담, 문의 및 후기 등 원활한 의사소통 경로 확보, 
본인의사 확인 및 민원 등의 고충 처리, 분쟁 조정을 위한 기록 보존, 맞춤형 회원 서비스 제공, 거점 기반 서비스 제공 등을 목적으로 개인정보를 처리합니다.
2) 민원사무 처리 : 민원인의 신원 확인, 민원사항 확인, 사실조사를 위한 연락·통지, 처리결과 통보 등을 목적으로 개인정보를 처리합니다.
3) 재화 또는 서비스 제공 : 서비스 및 기능의 제공, 물품 수거 및 물품 배송 서비스 제공, 상품과 주문 및 선물하기 등의 서비스 제공, 서비스 만족도 조사, 
청구서·영수증·계약서의 발송, 콘텐츠 제공, 맞춤형 상품 및 서비스 제공, 본인인증, 연령인증, 마케팅 활동, 위탁운영업체 정산, 요금 결제· 정산·조정·환불, 
결제 대행사가 별도 동의를 통해 수집하는 정보 등을 목적으로 개인정보를 처리합니다.
4) 마케팅 및 광고의 활용 : 신규 서비스(제품) 개발 및 맞춤 서비스 제공, 이벤트 및 광고성 정보 제공 및 참여기회 제공, 마케팅 목적, 인구통계학적 특성에 따른 
서비스 제공 및 광고 게재, 서비스의 유효성 확인, 접속빈도 파악 또는 회원의 서비스 이용에 대한 통계 등을 목적으로 개인정보를 처리합니다.`
    },
  
    collection: {
      title: '제2조 (수집하는 개인정보의 항목 및 수집방법)',
      content: `1. 회사는 서비스 제공을 위하여 아래와 같은 개인정보를 수집 및 처리하고 있습니다.
1) 필수적으로 수집 및 처리하는 정보
   (1) 회원 가입 시 이름, 아이디(이메일), 비밀번호, 로그인 식별정보, 추천인 아이디, 성별, 휴대전화 번호, 이메일, 주소(신청자 및 수령자), 
       생년월일, 닉네임, 카카오 및 네이버 계정, 카카오톡 채널 추가 상태 및 내역, 접속지 정보, 로그기록 등
   (2) 서비스 이용 및 제공 시 닉네임, 이름, 주소(신청자 및 수령자), 휴대전화 번호, 이메일, 공동현관 비밀번호, 은행 계좌정보, 신용카드 정보, 결제 정보, 
       결제 대행사가 별도 동의를 통해 수집하는 정보(카드번호, 이름, 휴대전화 번호, 이메일 등), 본인인증, 이용자 식별정보(모바일 기기 정보, 모델명, 
       이동통신사 정보, OS 정보, 언어 및 국가정보, 기기 고유 식별번호, 광고 ID), 구매 상품 및 서비스 정보, 서비스 이용기록, 주민등록번호 및 
       사업자등록번호 등
   (3) 본인인증 및 ID·비밀번호 찾기 시 이름, 이메일, 휴대전화 번호, 아이디 등

2) 선택적으로 수집 및 처리하는 개인정보
   (1) 회원의 성별, 키, 몸무게, 상의사이즈, 하의사이즈, 신발 사이즈
   (2) 마케팅 정보 수신 동의 여부, 정보 수신 방식 (문자, 이메일)
   2. 회사의 서비스이용 및 사업처리 과정에서 서비스 이용기록, 방문기록, 불량 이용기록, IP주소, 쿠키, MAC주소, 모바일 기기정보(앱버전, OS버전), 브라우저 정보, ADID/IDFA(광고식별자)등의 정보가 자동으로 생성되어 수집 및 이용될 수 있습니다.
3. 진행하는 이벤트에 따라 수집 항목이 상이할 수 있으므로 응모 시 별도 동의를 받으며, 목적 달성 즉시 파기합니다.
4. 본인인증은 관련 기관을 통해 처리하고 있으며, 동의 받은 수집 항목 외 개인정보는 저장하지 않습니다.
5. 회사는 다음과 같은 방법으로 개인정보를 수집합니다.
1) 서비스의 앱, 홈페이지, 서면양식, 팩스, 전화, 고객센터를 통 한 전화와 온라인 상담, 이메일, 이벤트 응모
2) 서비스의 가입이나 사용 중 이용자의 자발적 제공을 통한 수집
3) 생성정보 수집 툴을 통한 수집
6. 만 14세 미만 회원의 개인정보를 수집하지 않습니다.
   `
    },
    retention: {
        title: '제3조 (개인정보의 처리 및 보유기간)',
        content: `1. 회사는 고객이 서비스 및 서비스 이용자격을 유지하고 있는 동안 수집된 고객의 개인정보를 보유 및 이용할 수 있습니다. 개인정보 수집 및 이용 동의 내용은 아래와 같습니다.
        1) 서비스 회원 가입 시 보유기간 : 회원탈퇴 즉시 파기. 단 부정방지 이용을 방지하기 위해 90일 동안 보관 후 파기(아이디, 휴대폰 번호)하며, 재화 또는 서비스 제공에 해당하는 경우는 관련법령에 의거하여 보유기간동안 보관 후 파기. 단, 관계법령 위반에 따른 수사조사 등이 진행중인 경우에는 해당 수사종료시까지 보관 후 파기. 서비스 이용에 따른 채권채무관계 잔존시에도 해당채무관계 정산시까지도 보관 후 파기.
        2) 서비스 이용 및 제공 시 보유기간 : 회원탈퇴 즉시 파기. 단 부정방지 이용을 방지하기 위해 90일 동안 보관 후 파기(아이디, 휴대폰 번호)하며, 재화 또는 서비스제공에 해당하는 경우는 관련법령에 의거하여 보유기간동안 보관 후 파기. 단, 관계법령 위반에 따른 수사조사 등이 진행중인 경우에는 해당 수사종료시까지 보관 후 파기. 서비스 이용에 따른 채권채무관계 잔존시에도 해당채무관계 정산시까지도 보관 후 파기.
      
      2. 법령에 의하여 수집 및 이용되는 이용자정보의 정보와 보유기간은 아래와 같습니다.
        1) 대금결제 및 재화 등의 공급에 관한 기록, 계약 또는 청약철회 등에 관한 기록 : 전자상거래 등에서의 소비자보호에 관한 법률 제6조에 의거 5년 보유
        2) 소비자의 불만 또는 분쟁 처리에 관한 기록 : 전자상거래 등에서의 소비자보호에 관한 법률 제6조에 의거 3년 보유
        3) 표시 및 광고에 관한 기록 : 전자상거래 등에서의 소비자보호에 관한 법률 제6조에 의거 6개월 보유
        4) 전자금융 거래에 관한 기록 : 전자금융거래법 제22조에 의거 5년 보유
        5) 위치정보취급대장 : 위치정보의 보호 및 이용 등에 관한 법률 제16조에 의거 12개월 보유
        6) 웹사이트 및 앱 방문 기록을 포함한 통신사실확인자 : 통신비밀보호법 제15조의 2에 의거 12개월 보유
        7) 신용정보의 수집 처리 및 이용 등에 관한 기록 : 신용정보의 이용 및 보호에 관한 법률 제20조에 의거 3년 보유
        8) 개인신용정보 : 신용정보의 이용 및 보호에 관한 법률 제20조의 2에 의거 5년 보유
        3. 이용자가 탈퇴하거나 자격을 상실할 경우, 회사는 이용자의 별도 요청이 없더라도 수집된 이용자 정보를 삭제하거나 파기합니다. 단, 이용자의 탈퇴 또는 자격상실에도 불구하고 다음의 정보는 별도의 명시 기간 동안 보존한 후, 삭제 혹은 파기합니다.
1) 회사 내부 방침에 의한 정보 보유
a. 고객의 분쟁 및 문제해결을 위한 기록 및 정보 : 분쟁의 소멸시효 등 그 기록물로 인한 정보 활용의 이유가 없어진 시점
b. 이용 제한 고객 및 부정고객의 재가입 제한을 위한 고객정보 기록 : 각상황별로 내부적으로 보관기간 지정하며 별도 저장할 수 있음
2) 관계법령에 의한 정보 보유
a.「전자상거래 등에서의 소비자보호에 관한 법률」과 관련한 기준 : 표시 및 광고에 관한 기록은 6개월, 계약 또는 청약철회 등에 관한 기록 5년, 대금결제 및 재화 등의 공급에 관한 기록 은 5년 보유.
b.「통신비밀보호법」과 관련한 기준 : 로그인 기록은 6개월 보유.
        `
      },
      thirdPartyProvision: {
        title: '제4조 (개인정보의 제3자 제공)',
        content: `1. 회사는 정보 주체의 개인정보를 처리 목적으로 명시한 범위를 초과하여 제3자에게 제공하지 않습니다. 다만, 다음 각호의 경우에는 제3자에게 제공할 수 있습니다.
      1) 정보 주체로부터 별도의 동의를 받은 경우
      2) 수사 목적에 따라 통신비밀보호법 등 관련 법령에서 규정한 절차와 방법에 따라 수사기관의 개인정보 제공 요청이 있는 경우
      3) 서비스 제공 목적을 위해 위탁∙직영 수거대행업체에 전달이 필요한 경우
         a. 제공 항목 : 성명, 휴대전화 번호, 주소, 공동현관 비밀번호, 수거예약 일자, 상품정보
      4) 서비스 제공 목적을 위해 이동·운반·택배와 관련한 용역·제휴 계약이 체결된 개인 및 사업자에게 전달이 필요한 경우
         a. 제공 항목 : 성명, 휴대전화 번호, 주소, 공동현관 비밀번호, 예약 일자, 상품정보
      5) 서비스 제공 목적을 위해 SNS 및 문자 관련 서비스제공 계약이 체결된 사업자에게 전달이 필요한 경우
         a. 제공 항목 : 성명, 휴대전화 번호`
      },
      
      // 제5조 (개인정보처리 위탁)
      consignment: {
        title: '제5조 (개인정보처리 위탁)',
        content: `1. 회사는 통합 서비스의 제공을 위하여 필요한 업무 중 일부를 외부 업체에 위탁하고 있으며, 위탁 받은 업체가 관련 법령에 따라 개인정보를 안전하게 처리하도록 필요한 사항을 규정하고 관리 감독하고 있습니다. 위탁하는 정보는 당해 목적을 달성하기 위해 필요한 최소한의 정보에 국한됩니다.
      1) 개인정보 국내처리 위탁 현황
       - 위탁 대상자 : 나이스페이, 네이버페이, KCP, KG이니시스, 토스 페이먼츠
         - 위탁 업무 내용 : 결제 및 요금 정산 처리 (a. 결제 및 정산, b. 계좌 확인, c. 본인 확인 및 인증)
       - 위탁 대상자 : Kakao Corp.
         - 위탁 업무 내용 : 서비스관리 서비스 (a. 문자 발송, b. 카카오 알림톡, SNS/LMS/MMS, PUSH 발송)
       - 위탁 대상자 : CJ대한통운
         - 위탁 업무 내용 : 서비스배송 서비스 (a. 수거키트 및 수거상품 배송, b. 구매 상품 배송)
       - 위탁 대상자 : AMAZON WEB SERVICE INC.
       - 위탁 대상자 : 나이스평가정보
         - 위탁 업무 내용 : 본인계좌인증 (a. 비대면 본인계좌확인)
      
      2) 개인정보 국외 처리 위탁 현황
       - 수탁 업체 : AMAZON(아마존)
       - 수탁 업체 위치 : 미국
       - 위탁 업무 내용 : 서비스 및 고객신청 정보의 효율적 운영을 위한 가상서버 제공 (제2조 1항에 따른 정보 일체)
       - 개인정보 보유 및 이용 기간 : 제3조 3항에 따라 탈퇴 시 또는 법정 의무보관 기간에 따라 보관 및 파기
      
      2. 회사는 위탁계약 체결 시, 개인정보 처리법 제26조에 따라 위탁업무 수행 목적과 개인정보 처리 금지, 기술적·관리적 보호조치, 재위탁 제한, 수탁자에 대한 관리·감독, 손해배상 등 책임에 관한 사항을 계약서 등 문서에 명시하고, 수탁자가 개인정보를 안전하게 처리하는지를 감독합니다.
      3. 위탁 업무의 내용이나 수탁자가 변경될 경우에는 지체없이 본 개인정보 처리방침을 통하여 공개하도록 합니다.
4. 이용자는 아래 10.조의 회사의 개인정보보호책임자 및 담당 부서를 통해 상기 개인정보의 국외 처리위탁을 거부할 수 있습니다. 이용자가 개인정보의 국외 처리위탁을 거부하는 경우 회사는 해당 애용자의 개인정보를 국외 처리위탁 대상에서 제외합니다. 다만, 이 경우 회사의 서비스 중 개인정보 국외 처리위탁이 필수적으로 수반되는 서비스의 이용이 제한될 수 있습니다.
`
      },
      rights: {
        title: '제6조 (정보주체의 권리, 의무 및 행사방법)',
        content: `1. 고객은 개인정보주체로서, 다름과 같은 권리를 행사할 수 있습니다.
      1) 정보주체는 회사에 개인정보 열람, 정정, 삭제, 처리정지 요구 등의 권리를 행사할 수 있습니다.
         a. 정보주체는 개인정보 보호법 제35조에 따른 개인정보의 열람 청구를 아래의 부서에 할 수 있습니다.
         b. 개인정보 열람청구 접수 및 처리 담당자 : 박정진(CEO), 010-4827-0940, mintizdev@naver.com
      2) 제1항에 따른 권리 행사는 회사에 대해 개인정보 보호법 시행령 제41조제1항에 따라 서면, 전화, 전자우편, 
         모사전송(FAX) 등을 통하여 하실 수 있으며 회사는 이에 대해 최대한 빠른 시일 내 조치를 완료합니다.
      3) 제2항에 따른 권리 행사는 정보주체의 법정대리인이나 위임을 받은 자 등 대리인을 통하여 수행할 수 있습니다. 
         이 경우 “개인정보 처리 방법에 관한 법령(제2020-7호)” 별지 제11호 서식에 따른 위임장을 제출하여야 합니다.
      4) 개인정보 열람 및 처리정지 요구는 개인정보보호법 제35조 제4항, 제37조 제2항에 의하여 정보주체의 권리가 제한 될 수 있습니다.
      5) 정보주체가 개인정보의 오류 등에 대한 정정 또는 삭제를 요구한 경우에는 회사는 정정 또는 삭제를 완료할 때까지 당해 개인정보를 이용하거나 제공하지 않습니다.
      6) 개인정보의 정정 및 삭제 요구는 다른 법령에서 그 개인정보가 수집 대상으로 명시되어 있는 경우에는 그 삭제를 요구할 수 없습니다.
      7) 회사는 정보주체 권리에 따른 열람의 요구, 정정·삭제의 요구, 처리 정지의 요구 시 열람 등 요구를 한 자가 본인이거나 
         정당한 대리인인지를 확인할 수 있습니다.
      8) 정보주체는 개인정보 보호법 등 관계 법령을 위반하여 회사가 처리하고 있는 정보주체 본인이나 타인의 개인정보 및 
         사생활을 침해하여서는 아니 됩니다.
      9) 이용자는 자신의 개인정보를 최신의 상태로 유지해야 하며, 이용자의 부정확한 정보 입력으로 발생하는 문제의 책임은 
         이용자 자신에게 있습니다.
      10) 이용자는 전자우편주소, 비밀번호 등에 대한 보안을 유지할 책임이 있으며 제3자에게 이를 양도하거나 대여 할 수 없습니다.`
      },
      
      // 제7조 (처리하는 개인정보 항목)
      items: {
        title: '제7조 (처리하는 개인정보 항목)',
        content: `1. 회사는 다름의 개인정보 항목을 처리하고 있습니다.
      1) 서비스 가입 및 관리 : 이름, 이메일, 휴대폰번호, 자택주소, 지역, 비밀번호, 로그인 식별정보, 성별, 생년월일, 
         주민등록번호 및 사업자등록번호, 신용카드정보, 서비스 이용기록
      2) 마케팅 및 광고의 활용 : 이름, 닉네임, 이메일, 휴대폰번호, 자택주소 및 지역, 성별, 생년월일, 서비스 이용기록, 검색기록
      3) 민원사무 처리 : 이름, 이메일, 휴대폰번호, 자택주소, 지역, 로그인 식별정보, 성별, 생년월일, 서비스 이용기록, 
         구매 상품 및 서비스 정보, 사업자등록번호, 신용카드정보, 은행계좌정보`
      },
      
      // 제8조 (개인정보의 파기)
      destruction: {
        title: '제8조 (개인정보의 파기)',
        content: `1. 회사는 원칙적으로 개인정보 처리목적이 달성된 경우에는 지체없이 해당 개인정보를 파기합니다.
      2. 정보주체로부터 동의받은 개인정보 보유 기간이 경과하거나 처리목적이 달성되었음에도 불구하고 다른 법령에 따라 
         개인정보를 계속 보존하여야 하는 경우에는, 해당 개인정보를 별도의 데이터베이스(DB)로 옮기거나 보관장소를 달리하여 보존합니다.
      3. 파기의 절차, 기한 및 방법은 다음과 같습니다.
         1) 파기 절차 : 회사는 파기 사유가 발생한 개인정보를 선정하고, 회사의 개인정보 보호책임자의 승인을 받아 개인정보를 파기합니다.
         2) 파기 방법 : 회사는 전자적 파일 형태로 기록·저장된 개인정보는 기록을 재생할 수 없도록 로우레벨포맷(Low Level Format) 등의 
            방법을 이용하여 파기하며, 종이 문서에 기록·저장된 개인정보는 분쇄기로 분쇄하거나 소각하여 파기합니다.`
      },
      
      // 제9조 (개인정보 자동 수집 장치의 설치, 운영 및 거부에 관한 사항)
      autoCollection: {
        title: '제9조 (개인정보 자동 수집 장치의 설치, 운영 및 거부에 관한 사항)',
        content: `1. 회사는 고객에게 개별적인 맞춤 서비스를 제공하기 위하여 이용정보를 저장하고 수시로 불러오는 
         “쿠키(COOKIE)”와 “온라인 맞춤형 광고 서비스”를 사용합니다. 
         그러나 회원은 언제든지 이러한 쿠키의 저장을 거부하거나 삭제할 수 있으며, 온라인 맞춤 서비스의 제공을 거부할 수 있습니다. 
         이에 대한 자세한 내용은 아래와 같습니다.
         2. 쿠키(COOKIE)
1) 회사는 개인화되고 맞춤화된 서비스를 제공하기 위해서 고객의 정보를 저장하고 수시로 불러오는 '쿠키(COOKIE)'를 사용합니다.
2) 쿠키는 웹사이트를 운영하는데 이용되는 서버가 고객의 브라우저에게 보내는 아주 작은 텍스트 파일로 회원 컴퓨터의 하드디스크에 저장됩니다. 이후 고객이 웹 사이트에 방문할 경우 웹 사이트 서버는 회원의 하드 디스크에 저장되어 있는 쿠키의 내용을 읽어 고객의 환경설정을 유지하고 맞춤화된 서비스를 제공하기 위해 이용됩니다.
3) 쿠키는 개인을 식별하는 정보를 자동적·능동적으로 수집하지 않으며, 고객은 언제든지 이러한 쿠키의 저장을 거부하거나 삭제할 수 있습니다.
4) 고객이 서비스의 PC 또는 모바일 웹 사이트를 방문할 때 쿠키의 정보를 활용하여 웹사이트 사용을 설정한대로 접속하고 편리하게 사용할 수 있도록 돕습니다. 또 고객의 웹사이트 방문 기록, 이용 형태, 보안접속 여부를 통해서 최적화된 광고 등 맞춤형 정보를 제공하기 위해 사용합니다. 고객과 비고객의 접속 빈도, 방문 시간, 인기 검색어 등을 분석, 회원의 취향과 관심분야를 파악 및 자취 추적, 각종 이벤트 참여 정도 및 방문 회수 파악 등을 통한 타겟 마케팅 및 개인 맞춤 서비스를 제공하기 위해 사용합니다.
5) 고객은 쿠키 설치에 대한 선택권을 가지고 있습니다. 따라서 고객은 웹브라우저에서 옵션을 설정함으로써 모든 쿠키를 허용하거나, 쿠키가 저장될 때마다 확인을 거치거나, 아니면 모든 쿠키의 저장을 거부할 수도 있습니다. 쿠키 설치 허용여부를 지정하는 방법은 다음과 같습니다.
a. Internet Explorer : 도구 메뉴 > 인터넷 옵션 > 개인정보 탭 > 개인정보처리 수준 설정
b. Chrome : 메뉴 설정 > 고급 설정 표시 선택 > 개인정보-콘텐츠 설정 > 쿠키 수준 설정
c. Firefox : 옵션 메뉴 > 개인정보 > 방문기록-사용자 정의 설정 > 쿠키 수준 설정
d. Safari : 환경설정 메뉴 > 개인정보 탭 > 쿠키 및 웹 사이트 데이터 수준 설정
6) 다만, 쿠키의 저장을 거부할 경우에는 기술 지원 및 서비스 제공에 어려움이 있을 수 있으며, 이 경우 회사는 책임을 지지 않습니다.
3. 모바일 앱 사용 시 광고 식별자(ADID/IDFA) 수집
1) 회사는 고객의 ADID/IDFA를 수집할 수 있습니다. ADID/IDFA란 모바일 앱 이용자의 광고 식별 값으로서, 사용자의 맞춤 서비스 제공이나 더 나은 환경의 광고를 제공하기 위한 측정을 위해 수집할 수 있습니다.
2) ADID/IDFA를 수집 허용여부를 지정하는 방법은 다음과 같습니다.
a. Android : 설정 > 구글(구글설정) > 광고 > 광고 맞춤설정 선택 해제
b. iOS : 설정 > 개인정보보호 > 광고 > 광고 추적 제한
4. 온라인 맞춤형 광고 서비스
1) 회사는 다음과 같이 온라인 맞춤형 광고 사업자가 광고식별자 및 행태정보를 수집하도록 허용하고 있습니다.
a. 행태정보를 수집 및 처리하는 광고 사업자 : GOOGLE, FIREBASE, META, NAVER, KAKAOTALK
b. 행태정보 수집 방법 : 이용자가 서비스를 실행할 때 자동 수집 및 전송됨`
         
      },
      infoManager: {
        title: '제10조 (개인정보 보호책임자 및 민원의 처리)',
        content: `1. 회사는 개인정보 처리에 관한 업무를 총괄해서 책임지고, 개인정보 처리와 관련한 정보주체의 불만 처리 및 피해구제 등을 위하여 
      다음과 같이 개인정보 보호책임자를 지정합니다.
        1) 개인정보 보호 책임자
          a. 성명 : 박정진
          b. 직책 : CEO
          c. 연락처 : 010-4827-0940
          d. 이메일 : mintizdev@naver.com
        2) 개인정보 보호 담당부서
          a. 성명 : 박정진
          b. 직책 : CTO
          c. 연락처 : 010-4827-0940
          d. 이메일 : mintizdev@naver.com
      
      2. 정보주체자는 회사의 서비스를 이용하면서 발생한 모든 개인정보 보호 관련 문의, 불만처리, 피해구제 등에 관한 사항을 
      개인정보 보호 책임자 및 담당부서로 문의할 수 있습니다. 회사는 정보주체자 문의에 대해 되도록 빠른 시일 내 처리하는 것을 원칙으로 합니다.`
      },
      
      // 제11조 (개인정보 처리방침 변경)
      policyChange: {
        title: '제11조 (개인정보 처리방침 변경)',
        content: `1. 이 개인정보처리방침은 시행일로부터 적용되며, 법령 및 방침에 따른 변경내용의 추가, 삭제 및 정정이 있는 경우에는 
      변경사항의 시행 7일 전부터 서비스의 게시판 및 공지사항 등의 전자적 방법을 활용하여 공지, 고지합니다.`
      },
      
      // 제12조 (개인정보의 안전성 확보조치)
      securityMeasures: {
        title: '제12조 (개인정보의 안전성 확보조치)',
        content: `1. 회사는 개인정보보호법 제29조에 따라 다음과 같이 안전성 확보에 필요한 기술적·관리적 및 물리적 조치를 시행합니다.
        1) 관리적 조치 : 내부관리계획 수립 및 시행, 정기적 직원 교육 등
        2) 기술적 조치 : 개인정보처리시스템 등의 접근 권한 관리, 접근통제시스템 설치, 고유 식별정보 등의 암호화, 보안프로그램 설치
        3) 물리적 조치 : 전산실, 자료보관실 등의 접근통제`
      },
      
      // 제13조 (권익침해 구제방법)
      legalRemedies: {
        title: '제13조 (권익침해 구제방법)',
        content: `1. 정보주체는 아래의 기관을 통하여 개인정보 침해에 대한 피해구제, 상담 등을 문의할 수 있습니다.
        1) 개인정보침해센터 : 118, http://www.118.or.kr
        2) 개인정보분쟁조정위원회 : 1833-6972, http://www.kopico.go.kr
        3) 대검찰청 사이버범죄수사단 : 02-3480-2000, http://www.spo.go.kr
        4) 경찰청 사이버테러대응센터 : 182, http://cyberbureau.police.go.kr`
      },
      
      // 제14조 (부칙)
      addendum: {
        title: '제14조 (부칙)',
        content: `이 방침은 2025년 03월 01일부터 적용됩니다.`
      }

  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value.toLowerCase());
  };

  const filteredSections = Object.entries(sections).filter(([key, section]) =>
    section.title.toLowerCase().includes(searchTerm) ||
    section.content.toLowerCase().includes(searchTerm)
  );

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 100; // 헤더 높이 + 여유 공간
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="privacy-policy-container">
      <div className="privacy-policy-header">
        <div className="header-icon-container">
          <FaShieldAlt className="shield-icon" />
          <div className="pulse-ring"></div>
        </div>
        <h1>개인정보처리방침</h1>
        <p className="header-subtitle">고객님의 개인정보 보호를 최우선으로 생각합니다</p>
      </div>

      <div className="privacy-policy-content">
        <aside className="policy-sidebar">
          <div className="search-container">
            <FaSearch className="search-icon" />
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              onChange={handleSearch}
              className="search-input"
            />
          </div>
          
          <nav className="section-nav">
            {filteredSections.map(([key, section]) => (
              <button
                key={key}
                className={`nav-item ${activeSection === key ? 'active' : ''}`}
                onClick={() => scrollToSection(key)}
              >
                {section.title}
                <FaChevronRight className="nav-arrow" />
              </button>
            ))}
          </nav>
        </aside>

        <main className="policy-main">
          {Object.entries(sections).map(([key, section]) => (
            <section
              key={key}
              id={key}
              className={`policy-section ${activeSection === key ? 'active' : ''}`}
            >
              <h2>{section.title}</h2>
              <div className="section-content">
                {section.content.split('\n').map((paragraph, index) => (
                  <p key={index}>{paragraph}</p>
                ))}
              </div>
            </section>
          ))}
        </main>
      </div>
    </div>
  );
}

export default PrivacyPolicy; 