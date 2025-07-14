import React from 'react';

const Experiment = () => {
  return (
    <div className="page-content">
      <h1 className="page-title">실험 진행</h1>
      
      <h2 className="page-subtitle">실험 설계</h2>
      <div className="page-text">
        본 실험은 생강 추출물과 화학 합성 항균제의 항균 효과를 정량적으로 비교하기 위해 
        디스크 확산법(Disk Diffusion Method)과 최소억제농도(MIC) 측정법을 사용하였습니다.
      </div>

      <h2 className="page-subtitle">실험 재료</h2>
      
      <div className="formula">
        <strong>시험 균주:</strong><br/>
        • Staphylococcus aureus (그람 양성균)<br/>
        • Escherichia coli (그람 음성균)<br/>
        • Streptococcus mutans (구강 병원균)<br/>
        • Candida albicans (진균)
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>구분</th>
            <th>재료명</th>
            <th>농도/규격</th>
            <th>용도</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>천연 항균제</td>
            <td>생강 추출물</td>
            <td>10%, 5%, 2.5%, 1.25%</td>
            <td>항균 효과 테스트</td>
          </tr>
          <tr>
            <td>화학 항균제</td>
            <td>Chlorhexidine</td>
            <td>0.2%, 0.1%, 0.05%</td>
            <td>대조군</td>
          </tr>
          <tr>
            <td>배지</td>
            <td>Mueller-Hinton Agar</td>
            <td>표준 규격</td>
            <td>균 배양</td>
          </tr>
          <tr>
            <td>용매</td>
            <td>DMSO, 증류수</td>
            <td>99.9% 순도</td>
            <td>용해 및 희석</td>
          </tr>
        </tbody>
      </table>

      <h2 className="page-subtitle">생강 추출물 제조 과정</h2>
      <div className="page-text">
        생강 추출물은 다음과 같은 단계를 통해 제조하였습니다:
      </div>

      <div className="formula">
        <strong>추출 과정:</strong><br/>
        1. 신선한 생강 100g을 세척 후 얇게 슬라이스<br/>
        2. 60°C에서 24시간 건조<br/>
        3. 분쇄기로 미세 분말화<br/>
        4. 에탄올 70% 용액 500mL에 침지<br/>
        5. 실온에서 72시간 추출<br/>
        6. 여과 후 회전증발기로 농축<br/>
        7. 동결건조로 분말화
      </div>

      <h2 className="page-subtitle">실험 방법</h2>
      
      <h3 className="page-subtitle" style={{fontSize: '1.3rem', margin: '1.5rem 0 1rem 0'}}>1. 디스크 확산법 (Disk Diffusion Method)</h3>
      <div className="page-text">
        항균 효과를 시각적으로 확인하기 위한 정성적 분석 방법입니다.
      </div>

      <table className="data-table">
        <thead>
          <tr>
            <th>단계</th>
            <th>과정</th>
            <th>조건</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1단계</td>
            <td>균액 조제</td>
            <td>McFarland 0.5 표준 (1.5×10⁸ CFU/mL)</td>
          </tr>
          <tr>
            <td>2단계</td>
            <td>배지 접종</td>
            <td>면봉으로 균등하게 도말</td>
          </tr>
          <tr>
            <td>3단계</td>
            <td>디스크 배치</td>
            <td>멸균 디스크에 시료 20μL 흡수</td>
          </tr>
          <tr>
            <td>4단계</td>
            <td>배양</td>
            <td>37°C, 24시간</td>
          </tr>
          <tr>
            <td>5단계</td>
            <td>측정</td>
            <td>억제환 직경 측정 (mm)</td>
          </tr>
        </tbody>
      </table>

      <h3 className="page-subtitle" style={{fontSize: '1.3rem', margin: '1.5rem 0 1rem 0'}}>2. 최소억제농도 (MIC) 측정</h3>
      <div className="page-text">
        미량희석법을 사용하여 균 성장을 억제하는 최소 농도를 정량적으로 측정하였습니다.
      </div>

      <div className="formula">
        <strong>MIC 측정 과정:</strong><br/>
        1. 96-well plate에 연속 희석 시료 준비<br/>
        2. 균액 (5×10⁵ CFU/mL) 100μL 접종<br/>
        3. 37°C에서 18-24시간 배양<br/>
        4. 육안으로 탁도 관찰<br/>
        5. MTT assay로 생존률 정량 측정
      </div>

      <h2 className="page-subtitle">실험 조건 및 대조군</h2>
      
      <table className="data-table">
        <thead>
          <tr>
            <th>실험군</th>
            <th>시료</th>
            <th>농도 범위</th>
            <th>목적</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>실험군 1</td>
            <td>생강 추출물</td>
            <td>0.625 - 10 mg/mL</td>
            <td>천연 항균제 효과 측정</td>
          </tr>
          <tr>
            <td>실험군 2</td>
            <td>Chlorhexidine</td>
            <td>0.025 - 0.4 mg/mL</td>
            <td>화학 항균제 효과 측정</td>
          </tr>
          <tr>
            <td>양성 대조군</td>
            <td>Ampicillin</td>
            <td>표준 농도</td>
            <td>항생제 기준</td>
          </tr>
          <tr>
            <td>음성 대조군</td>
            <td>DMSO, 증류수</td>
            <td>용매만</td>
            <td>용매 효과 확인</td>
          </tr>
        </tbody>
      </table>

      <h2 className="page-subtitle">통계 분석</h2>
      <div className="page-text">
        모든 실험은 3회 반복 수행하였으며, 결과는 평균값 ± 표준편차로 표시하였습니다. 
        통계적 유의성은 SPSS 프로그램을 사용하여 one-way ANOVA와 t-test로 분석하였습니다 (p&lt;0.05).
      </div>

      <div className="formula">
        <strong>데이터 분석 방법:</strong><br/>
        • 억제환 직경: 캘리퍼로 정확히 측정<br/>
        • MIC 값: 연속 희석법으로 결정<br/>
        • 통계 분석: SPSS 26.0 사용<br/>
        • 유의수준: p &lt; 0.05
      </div>
    </div>
  );
};

export default Experiment;
