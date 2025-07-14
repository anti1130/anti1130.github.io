import React from 'react';

const Background = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">탐구 배경</h1>
      
      <h2 className="page-subtitle">연구의 필요성</h2>
      <div className="page-text">
        현대 사회에서 항균제의 사용은 개인 위생과 공중보건을 위해 필수적입니다. 
        하지만 화학 합성 항균제의 과도한 사용으로 인한 부작용들이 점점 더 심각한 문제로 대두되고 있습니다.
      </div>

      <h2 className="page-subtitle">화학 합성 항균제의 문제점</h2>
      <div className="page-text">
        화학 합성 항균제는 강력한 항균 효과를 보이지만, 다음과 같은 문제점들이 있습니다:
      </div>
      
      <div className="formula">
        <strong>주요 문제점:</strong><br/>
        • 항생제 내성균 증가<br/>
        • 환경 오염 (수질, 토양)<br/>
        • 생태계 교란<br/>
        • 인체 축적으로 인한 건강 위험<br/>
        • 생분해가 어려운 화학적 구조
      </div>

      <h2 className="page-subtitle">천연 항균제의 장점</h2>
      <div className="page-text">
        천연 항균제는 식물에서 추출한 천연 성분으로, 다음과 같은 장점을 가집니다:
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>구분</th>
            <th>천연 항균제</th>
            <th>화학 합성 항균제</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>환경 친화성</td>
            <td>생분해 가능, 친환경적</td>
            <td>생분해 어려움, 환경 오염</td>
          </tr>
          <tr>
            <td>내성균 발생</td>
            <td>복합 성분으로 내성 발생 낮음</td>
            <td>단일 성분으로 내성 발생 높음</td>
          </tr>
          <tr>
            <td>인체 안전성</td>
            <td>상대적으로 안전</td>
            <td>축적 시 독성 우려</td>
          </tr>
          <tr>
            <td>지속가능성</td>
            <td>재생 가능한 자원</td>
            <td>화석연료 기반 합성</td>
          </tr>
        </tbody>
      </table>

      <h2 className="page-subtitle">생강의 항균 성분</h2>
      <div className="page-text">
        생강(Zingiber officinale)은 오랫동안 약용으로 사용되어온 식물로, 
        다양한 생리활성 화합물을 함유하고 있습니다.
      </div>

      <div className="formula">
        <strong>생강의 주요 항균 성분:</strong><br/>
        • Gingerol (진저롤): 생강의 매운맛 성분, 강력한 항균 효과<br/>
        • Shogaol (쇼가올): 가열 시 생성, 항염 및 항균 작용<br/>
        • Zingerone (진저론): 항산화 및 항균 효과<br/>
        • Essential oils: 다양한 테르펜 화합물
      </div>

      <h2 className="page-subtitle">선행 연구 분석</h2>
      <div className="page-text">
        여러 연구에서 생강 추출물의 항균 효과가 입증되었습니다:
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>연구자</th>
            <th>대상 균주</th>
            <th>결과</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Park et al. (2008)</td>
            <td>S. aureus, E. coli</td>
            <td>MIC 값 0.5-2.0 mg/mL</td>
          </tr>
          <tr>
            <td>Singh et al. (2018)</td>
            <td>구강 병원균</td>
            <td>95% 성장 억제</td>
          </tr>
          <tr>
            <td>Lee et al. (2020)</td>
            <td>항생제 내성균</td>
            <td>상당한 억제 효과</td>
          </tr>
        </tbody>
      </table>

      <h2 className="page-subtitle">연구 가설</h2>
      <div className="formula">
        <strong>가설 설정:</strong><br/>
        "생강 추출물은 화학 합성 항균제와 유사한 수준의 항균 효과를 보이면서도, 
        환경에 미치는 부정적 영향은 현저히 낮을 것이다."
      </div>
    </div>
  );
};

export default Background;
