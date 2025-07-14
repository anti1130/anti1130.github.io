import React from 'react';

const Ginger = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">생강과 구강 청결제</h1>
      
      <h2 className="page-subtitle">구강 청결제로서의 생강의 잠재력</h2>
      <div className="page-text">
        본 연구에서 생강 추출물이 구강 병원균인 Streptococcus mutans에 대해 
        뛰어난 항균 효과를 보인 것을 확인하였습니다. 이는 생강이 천연 구강 청결제로서 
        활용될 수 있는 가능성을 시사합니다.
      </div>

      <h2 className="page-subtitle">구강 병원균과 구강 질환</h2>
      <div className="page-text">
        구강 내 병원균은 다양한 구강 질환을 유발합니다. 특히 S. mutans는 치아우식증의 
        주요 원인균으로 알려져 있습니다.
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>병원균</th>
            <th>관련 질환</th>
            <th>특징</th>
            <th>생강 효과</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>S. mutans</td>
            <td>치아우식증 (충치)</td>
            <td>산 생성, 치면세균막 형성</td>
            <td>MIC 1.25 mg/mL</td>
          </tr>
          <tr>
            <td>S. sanguis</td>
            <td>치주염</td>
            <td>잇몸 염증 유발</td>
            <td>강한 억제 효과</td>
          </tr>
          <tr>
            <td>P. gingivalis</td>
            <td>심한 치주염</td>
            <td>잇몸 파괴</td>
            <td>중등도 억제</td>
          </tr>
          <tr>
            <td>C. albicans</td>
            <td>구강 칸디다증</td>
            <td>면역저하 시 발생</td>
            <td>MIC 5.0 mg/mL</td>
          </tr>
        </tbody>
      </table>

      <h2 className="page-subtitle">기존 구강 청결제의 문제점</h2>
      <div className="page-text">
        현재 사용되는 화학 구강 청결제들은 효과적이지만 여러 부작용이 보고되고 있습니다.
      </div>

      <div className="formula">
        <strong>화학 구강 청결제의 부작용:</strong><br/>
        • 치아 착색 (Chlorhexidine)<br/>
        • 미각 변화 및 구강 건조<br/>
        • 구강 내 정상 세균총 파괴<br/>
        • 알코올 성분으로 인한 자극<br/>
        • 장기 사용 시 내성균 발생
      </div>

      <h2 className="page-subtitle">생강 구강 청결제의 장점</h2>
      <div className="page-text">
        생강을 기반으로 한 천연 구강 청결제는 다음과 같은 장점을 가질 수 있습니다.
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>특성</th>
            <th>화학 구강 청결제</th>
            <th>생강 구강 청결제</th>
            <th>개선 효과</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>항균 효과</td>
            <td>강력함</td>
            <td>우수함</td>
            <td>충분한 효과</td>
          </tr>
          <tr>
            <td>부작용</td>
            <td>착색, 자극</td>
            <td>최소화</td>
            <td>안전성 향상</td>
          </tr>
          <tr>
            <td>내성균 발생</td>
            <td>높음</td>
            <td>낮음</td>
            <td>지속 효과</td>
          </tr>
          <tr>
            <td>환경 영향</td>
            <td>오염 우려</td>
            <td>친환경</td>
            <td>생태계 보호</td>
          </tr>
          <tr>
            <td>비용</td>
            <td>중간</td>
            <td>저렴</td>
            <td>경제성</td>
          </tr>
        </tbody>
      </table>

      <h2 className="page-subtitle">생강의 추가 구강 건강 효과</h2>
      <div className="page-text">
        생강은 항균 효과 외에도 구강 건강에 도움이 되는 다양한 효과를 가지고 있습니다.
      </div>

      <div className="formula">
        <strong>생강의 구강 건강 효과:</strong><br/>
        • 항염 작용: 잇몸 염증 완화<br/>
        • 항산화 효과: 구강 조직 보호<br/>
        • 타액 분비 촉진: 자정 작용 강화<br/>
        • 구취 제거: 황 화합물 중화<br/>
        • 구강 궤양 치유 촉진
      </div>

      <h2 className="page-subtitle">생강 구강 청결제 제형 연구</h2>
      <div className="page-text">
        효과적인 생강 구강 청결제 개발을 위한 제형 연구를 진행하였습니다.
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>제형</th>
            <th>생강 농도</th>
            <th>첨가제</th>
            <th>안정성</th>
            <th>효과</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>수용액형</td>
            <td>2.5%</td>
            <td>글리세린, 소르비톨</td>
            <td>양호</td>
            <td>+++</td>
          </tr>
          <tr>
            <td>젤형</td>
            <td>5.0%</td>
            <td>카르복시메틸셀룰로오스</td>
            <td>우수</td>
            <td>++++</td>
          </tr>
          <tr>
            <td>스프레이형</td>
            <td>1.25%</td>
            <td>에탄올 10%</td>
            <td>우수</td>
            <td>++</td>
          </tr>
          <tr>
            <td>정제형</td>
            <td>농축</td>
            <td>구연산, 탄산수소나트륨</td>
            <td>매우 우수</td>
            <td>+++</td>
          </tr>
        </tbody>
      </table>

      <h2 className="page-subtitle">임상 적용 가능성</h2>
      <div className="page-text">
        생강 구강 청결제의 임상 적용을 위한 추가 연구가 필요하지만, 
        현재까지의 결과는 매우 긍정적입니다.
      </div>

      <div className="formula">
        <strong>임상 적용 단계:</strong><br/>
        1단계: 인체 적용 안전성 시험<br/>
        2단계: 소규모 임상 시험<br/>
        3단계: 대규모 효능 검증<br/>
        4단계: 제품화 및 상용화
      </div>

      <h2 className="page-subtitle">시장 전망</h2>
      <div className="page-text">
        천연 구강 관리 제품에 대한 소비자 관심이 증가하고 있어, 
        생강 기반 구강 청결제의 시장 전망은 밝습니다.
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>시장 요인</th>
            <th>현황</th>
            <th>전망</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>천연 제품 선호도</td>
            <td>지속적 증가</td>
            <td>매우 긍정적</td>
          </tr>
          <tr>
            <td>구강 건강 인식</td>
            <td>높아짐</td>
            <td>시장 확대</td>
          </tr>
          <tr>
            <td>환경 친화성</td>
            <td>중요 트렌드</td>
            <td>경쟁 우위</td>
          </tr>
          <tr>
            <td>비용 효율성</td>
            <td>원가 절감 가능</td>
            <td>가격 경쟁력</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Ginger;
