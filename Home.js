import React from 'react';

const Home = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">천연 vs 화학 합성 항균제 연구</h1>
      
      <div className="page-text">
        본 연구는 천연 항균제와 화학 합성 항균제의 효과와 환경 영향을 비교 분석하여, 
        지속 가능한 항균제 사용 방안을 모색하는 것을 목표로 합니다.
      </div>

      <h2 className="page-subtitle">연구 개요</h2>
      <div className="page-text">
        현대 사회에서 항균제의 사용은 필수적이지만, 화학 합성 항균제의 환경 부작용과 
        내성균 문제가 대두되고 있습니다. 이에 따라 천연 항균제에 대한 관심이 높아지고 있으며, 
        본 연구에서는 생강을 중심으로 한 천연 항균제의 효과를 검증하고자 합니다.
      </div>

      <h2 className="page-subtitle">연구 목표</h2>
      <div className="page-text">
        <ul style={{paddingLeft: '2rem', marginBottom: '1.5rem'}}>
          <li>천연 항균제(생강)와 화학 합성 항균제의 항균 효과 비교</li>
          <li>각 항균제가 환경에 미치는 영향 분석</li>
          <li>구강 청결제로서의 생강의 활용 가능성 검토</li>
          <li>지속 가능한 항균제 사용 방안 제시</li>
        </ul>
      </div>

      <div className="formula">
        <strong>핵심 연구 질문:</strong><br/>
        "천연 항균제가 화학 합성 항균제를 대체할 수 있는 효과적이고 친환경적인 대안이 될 수 있는가?"
      </div>

      <h2 className="page-subtitle">연구 진행 과정</h2>
      <div className="page-text">
        본 연구는 다음과 같은 단계로 진행됩니다:
      </div>
      
      <table className="data-table">
        <thead>
          <tr>
            <th>단계</th>
            <th>내용</th>
            <th>방법</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1단계</td>
            <td>탐구 배경 연구</td>
            <td>문헌 조사, 선행 연구 분석</td>
          </tr>
          <tr>
            <td>2단계</td>
            <td>실험 설계 및 진행</td>
            <td>항균 효과 측정 실험</td>
          </tr>
          <tr>
            <td>3단계</td>
            <td>결과 분석</td>
            <td>데이터 수집 및 통계 분석</td>
          </tr>
          <tr>
            <td>4단계</td>
            <td>환경 영향 평가</td>
            <td>생분해성, 독성 평가</td>
          </tr>
          <tr>
            <td>5단계</td>
            <td>결론 도출</td>
            <td>종합적 분석 및 제언</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Home;
