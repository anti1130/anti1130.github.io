# 실시간 환율 대시보드 💱

전 세계 주요 통화의 실시간 환율 정보와 차트를 제공하는 웹 애플리케이션입니다.

## 🚀 주요 기능

- **실시간 환율 정보**: 150개 이상의 통화 지원
- **인터랙티브 차트**: Chart.js를 활용한 환율 변동 그래프
- **환율 계산기**: 실시간 통화 변환 계산
- **반응형 디자인**: 모든 디바이스에서 완벽 작동
- **자동 업데이트**: 5분마다 자동으로 환율 정보 갱신

## 📊 지원 통화

- **USD** (미국 달러)
- **EUR** (유로)
- **JPY** (일본 엔)
- **CNY** (중국 위안)
- **KRW** (한국 원)
- **GBP** (영국 파운드)
- **AUD** (호주 달러)
- **CAD** (캐나다 달러)
- **CHF** (스위스 프랑)
- **SEK** (스웨덴 크로나)

## 🛠️ 기술 스택

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **차트 라이브러리**: Chart.js
- **API**: ExchangeRate-API
- **아이콘**: Font Awesome
- **폰트**: Google Fonts (Noto Sans KR)

## 📁 파일 구조

```
├── index.html          # 메인 HTML 파일
├── styles.css          # CSS 스타일시트
├── script.js           # JavaScript 기능
└── README.md           # 프로젝트 설명서
```

## 🎯 섹션 구성

1. **히어로 섹션**: 메인 소개와 주요 통화 미리보기
2. **실시간 환율**: 모든 지원 통화의 현재 환율
3. **환율 차트**: 선택한 통화의 변동 추이 그래프
4. **환율 계산기**: 실시간 통화 변환 도구

## 🚀 GitHub Pages 배포 방법

### 1. 저장소 생성
GitHub에서 새 저장소를 생성합니다.

### 2. 파일 업로드
모든 파일을 저장소에 업로드합니다:
- `index.html`
- `styles.css`
- `script.js`
- `README.md`

### 3. GitHub Pages 활성화
1. 저장소 설정(Settings)으로 이동
2. Pages 섹션에서 Source를 "Deploy from a branch"로 설정
3. Branch를 "main"으로 선택
4. Save 클릭

### 4. 배포 확인
몇 분 후 `https://[사용자명].github.io/[저장소명]`에서 웹사이트를 확인할 수 있습니다.

## 🔧 API 설정

현재 프로젝트는 무료 ExchangeRate-API를 사용합니다:

```javascript
const API_BASE_URL = 'https://api.exchangerate-api.com/v4/latest';
```

### API 제한사항
- 무료 플랜: 월 1,500회 요청
- 업데이트 주기: 매일
- 지원 통화: 150개 이상

### 고급 API 사용
더 많은 요청이나 실시간 데이터가 필요한 경우:
1. [ExchangeRate-API](https://exchangerate-api.com/)에서 유료 플랜 가입
2. API 키 발급
3. `script.js`에서 API 키 추가

## 🎨 커스터마이징

### 색상 변경
`styles.css`에서 CSS 변수를 수정하여 색상을 변경할 수 있습니다:

```css
:root {
    --primary-color: #2563eb;
    --secondary-color: #1d4ed8;
    --gradient-start: #667eea;
    --gradient-end: #764ba2;
}
```

### 통화 추가
`script.js`에서 `currencies` 객체와 `majorCurrencies` 배열을 수정하여 지원 통화를 변경할 수 있습니다.

### 차트 스타일 변경
Chart.js 옵션을 수정하여 차트의 외관을 변경할 수 있습니다.

## 📱 반응형 브레이크포인트

- **데스크톱**: 1200px 이상
- **태블릿**: 768px - 1199px
- **모바일**: 767px 이하

## 🔄 자동 업데이트

- **새로고침**: 수동 새로고침 버튼
- **자동 갱신**: 5분마다 자동으로 환율 정보 업데이트
- **실시간 표시**: 마지막 업데이트 시간 표시

## 🎯 사용 예시

### 환율 계산기 사용법
1. 금액 입력
2. 변환할 통화 선택 (From)
3. 변환될 통화 선택 (To)
4. 실시간으로 변환 결과 확인

### 차트 보기
1. 기준 통화 선택
2. 대상 통화 선택
3. 기간 선택 (1일, 1주, 1개월, 3개월, 1년)
4. 차트에서 환율 변동 추이 확인

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다.

## 🤝 기여

버그 리포트나 기능 제안은 이슈를 통해 제출해주세요.

## 📞 지원

문제가 발생하거나 질문이 있으시면:
1. GitHub Issues에서 이슈 생성
2. 프로젝트 설명서 확인
3. API 문서 참조

---

**참고**: 이 웹사이트는 ExchangeRate-API의 무료 플랜을 사용합니다. 상업적 용도로 사용하시려면 유료 플랜을 고려해주세요. 