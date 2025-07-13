// 전역 변수
let exchangeRates = {};
let chart = null;
let lastUpdateTime = null;

// API 키 (무료 ExchangeRate-API 사용)
const API_BASE_URL = 'https://api.exchangerate-api.com/v4/latest';

// 통화 정보
const currencies = {
    USD: { name: '미국 달러', symbol: '$' },
    EUR: { name: '유로', symbol: '€' },
    JPY: { name: '일본 엔', symbol: '¥' },
    CNY: { name: '중국 위안', symbol: '¥' },
    KRW: { name: '한국 원', symbol: '₩' },
    GBP: { name: '영국 파운드', symbol: '£' },
    AUD: { name: '호주 달러', symbol: 'A$' },
    CAD: { name: '캐나다 달러', symbol: 'C$' },
    CHF: { name: '스위스 프랑', symbol: 'CHF' },
    SEK: { name: '스웨덴 크로나', symbol: 'kr' }
};

// 주요 통화 목록 (KRW 기준)
const majorCurrencies = ['USD', 'EUR', 'JPY', 'CNY', 'GBP', 'AUD', 'CAD', 'CHF', 'SEK'];

// 페이지 로드 시 초기화
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

// 앱 초기화
async function initializeApp() {
    showLoading(true);
    
    try {
        // 환율 데이터 로드
        await loadExchangeRates();
        
        // UI 초기화
        initializeUI();
        
        // 이벤트 리스너 설정
        setupEventListeners();
        
        // 차트 초기화
        initializeChart();
        
        // 환율 계산기 초기화
        initializeConverter();
        
    } catch (error) {
        console.error('초기화 오류:', error);
        showError('데이터를 불러오는 중 오류가 발생했습니다.');
    } finally {
        showLoading(false);
    }
}

// 환율 데이터 로드
async function loadExchangeRates() {
    try {
        const response = await fetch(`${API_BASE_URL}/KRW`);
        if (!response.ok) {
            throw new Error('API 응답 오류');
        }
        
        const data = await response.json();
        exchangeRates = data.rates;
        lastUpdateTime = new Date(data.time_last_updated * 1000);
        
        // 마지막 업데이트 시간 표시
        updateLastUpdateTime();
        
    } catch (error) {
        console.error('환율 데이터 로드 오류:', error);
        // 오류 시 더미 데이터 사용
        exchangeRates = {
            USD: 0.00074,
            EUR: 0.00068,
            JPY: 0.108,
            CNY: 0.0054,
            GBP: 0.00058,
            AUD: 0.0011,
            CAD: 0.0010,
            CHF: 0.00067,
            SEK: 0.0078
        };
        lastUpdateTime = new Date();
    }
}

// UI 초기화
function initializeUI() {
    // 실시간 환율 카드 생성
    createRateCards();
    
    // 히어로 섹션 환율 카드 업데이트
    updateHeroRates();
    
    // 환율 계산기 업데이트
    updateConverter();
}

// 실시간 환율 카드 생성
function createRateCards() {
    const ratesGrid = document.getElementById('ratesGrid');
    ratesGrid.innerHTML = '';
    
    majorCurrencies.forEach(currency => {
        if (currency !== 'KRW' && exchangeRates[currency]) {
            const rate = exchangeRates[currency];
            const krwRate = 1 / rate;
            
            const card = document.createElement('div');
            card.className = 'rate-card';
            card.innerHTML = `
                <div class="rate-card-header">
                    <div class="rate-card-title">
                        <strong>${currency}</strong> - ${currencies[currency]?.name || currency}
                    </div>
                    <div class="rate-card-change">
                        <span class="rate-change positive">+0.12%</span>
                    </div>
                </div>
                <div class="rate-card-value">${krwRate.toFixed(2)}</div>
                <div class="rate-card-change">
                    <span>1 ${currency} = ${krwRate.toFixed(2)} KRW</span>
                </div>
            `;
            
            ratesGrid.appendChild(card);
        }
    });
}

// 히어로 섹션 환율 업데이트
function updateHeroRates() {
    const heroCards = document.querySelectorAll('.currency-card');
    
    heroCards.forEach((card, index) => {
        const currencies = ['USD', 'EUR', 'JPY'];
        const currency = currencies[index];
        
        if (exchangeRates[currency]) {
            const rate = exchangeRates[currency];
            const krwRate = 1 / rate;
            
            const rateValue = card.querySelector('.rate-value');
            const rateChange = card.querySelector('.rate-change');
            
            if (rateValue) {
                rateValue.textContent = krwRate.toFixed(2);
            }
            
            if (rateChange) {
                // 랜덤 변화율 생성 (데모용)
                const change = (Math.random() - 0.5) * 10;
                const isPositive = change > 0;
                rateChange.textContent = `${isPositive ? '+' : ''}${change.toFixed(2)}`;
                rateChange.className = `rate-change ${isPositive ? 'positive' : 'negative'}`;
            }
        }
    });
}

// 환율 계산기 초기화
function initializeConverter() {
    const fromAmount = document.getElementById('fromAmount');
    const fromCurrency = document.getElementById('fromCurrency');
    const toCurrency = document.getElementById('toCurrency');
    const toAmount = document.getElementById('toAmount');
    
    // 이벤트 리스너 설정
    fromAmount.addEventListener('input', calculateConversion);
    fromCurrency.addEventListener('change', calculateConversion);
    toCurrency.addEventListener('change', calculateConversion);
    
    // 초기 계산
    calculateConversion();
}

// 환율 계산
function calculateConversion() {
    const fromAmount = parseFloat(document.getElementById('fromAmount').value) || 0;
    const fromCurrency = document.getElementById('fromCurrency').value;
    const toCurrency = document.getElementById('toCurrency').value;
    
    if (fromCurrency === toCurrency) {
        document.getElementById('toAmount').value = fromAmount.toFixed(2);
        updateCurrentRate(fromCurrency, toCurrency, 1);
        return;
    }
    
    let rate;
    if (fromCurrency === 'KRW') {
        rate = exchangeRates[toCurrency] || 1;
    } else if (toCurrency === 'KRW') {
        rate = 1 / (exchangeRates[fromCurrency] || 1);
    } else {
        // KRW를 통한 교차 환율 계산
        const fromToKRW = 1 / (exchangeRates[fromCurrency] || 1);
        const krwToTo = exchangeRates[toCurrency] || 1;
        rate = fromToKRW * krwToTo;
    }
    
    const result = fromAmount * rate;
    document.getElementById('toAmount').value = result.toFixed(2);
    
    updateCurrentRate(fromCurrency, toCurrency, rate);
}

// 현재 환율 표시 업데이트
function updateCurrentRate(from, to, rate) {
    const currentRateElement = document.getElementById('currentRate');
    if (currentRateElement) {
        currentRateElement.textContent = `1 ${from} = ${rate.toFixed(4)} ${to}`;
    }
}

// 환율 계산기 업데이트
function updateConverter() {
    // 자주 사용하는 환율 업데이트
    const popularRates = {
        'usdKrw': 'USD',
        'eurKrw': 'EUR',
        'jpyKrw': 'JPY',
        'cnyKrw': 'CNY'
    };
    
    Object.entries(popularRates).forEach(([elementId, currency]) => {
        const element = document.getElementById(elementId);
        if (element && exchangeRates[currency]) {
            const rate = 1 / exchangeRates[currency];
            element.textContent = rate.toFixed(2);
        }
    });
    
    // 초기 계산 실행
    calculateConversion();
}

// 차트 초기화
function initializeChart() {
    const ctx = document.getElementById('exchangeRateChart').getContext('2d');
    
    // 샘플 데이터 (실제로는 API에서 히스토리 데이터를 가져와야 함)
    const sampleData = generateSampleChartData();
    
    chart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: sampleData.labels,
            datasets: [{
                label: 'USD/KRW',
                data: sampleData.data,
                borderColor: '#2563eb',
                backgroundColor: 'rgba(37, 99, 235, 0.1)',
                borderWidth: 2,
                fill: true,
                tension: 0.4
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    display: true,
                    position: 'top'
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                },
                x: {
                    grid: {
                        color: 'rgba(0, 0, 0, 0.1)'
                    }
                }
            }
        }
    });
}

// 샘플 차트 데이터 생성
function generateSampleChartData() {
    const labels = [];
    const data = [];
    const baseRate = 1350;
    
    for (let i = 30; i >= 0; i--) {
        const date = new Date();
        date.setDate(date.getDate() - i);
        labels.push(date.toLocaleDateString('ko-KR', { month: 'short', day: 'numeric' }));
        
        // 랜덤 변동 생성
        const variation = (Math.random() - 0.5) * 20;
        data.push(baseRate + variation);
    }
    
    return { labels, data };
}

// 이벤트 리스너 설정
function setupEventListeners() {
    // 모바일 네비게이션
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // 네비게이션 링크 클릭 시 모바일 메뉴 닫기
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
    
    // 새로고침 버튼
    const refreshBtn = document.getElementById('refreshBtn');
    refreshBtn.addEventListener('click', async () => {
        showLoading(true);
        try {
            await loadExchangeRates();
            createRateCards();
            updateHeroRates();
            updateConverter();
        } catch (error) {
            console.error('새로고침 오류:', error);
        } finally {
            showLoading(false);
        }
    });
    
    // 통화 교환 버튼
    const swapBtn = document.getElementById('swapCurrencies');
    swapBtn.addEventListener('click', () => {
        const fromCurrency = document.getElementById('fromCurrency');
        const toCurrency = document.getElementById('toCurrency');
        const temp = fromCurrency.value;
        fromCurrency.value = toCurrency.value;
        toCurrency.value = temp;
        calculateConversion();
    });
    
    // 차트 컨트롤 이벤트
    document.getElementById('baseCurrency').addEventListener('change', updateChart);
    document.getElementById('targetCurrency').addEventListener('change', updateChart);
    document.getElementById('chartPeriod').addEventListener('change', updateChart);
    
    // 부드러운 스크롤
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// 차트 업데이트
function updateChart() {
    if (!chart) return;
    
    const baseCurrency = document.getElementById('baseCurrency').value;
    const targetCurrency = document.getElementById('targetCurrency').value;
    const period = document.getElementById('chartPeriod').value;
    
    // 실제로는 API에서 히스토리 데이터를 가져와야 함
    const sampleData = generateSampleChartData();
    
    chart.data.labels = sampleData.labels;
    chart.data.datasets[0].label = `${baseCurrency}/${targetCurrency}`;
    chart.data.datasets[0].data = sampleData.data;
    chart.update();
}

// 마지막 업데이트 시간 표시
function updateLastUpdateTime() {
    const lastUpdateElement = document.getElementById('lastUpdate');
    if (lastUpdateElement && lastUpdateTime) {
        lastUpdateElement.textContent = lastUpdateTime.toLocaleString('ko-KR');
    }
}

// 로딩 스피너 표시/숨김
function showLoading(show) {
    const spinner = document.getElementById('loadingSpinner');
    if (spinner) {
        if (show) {
            spinner.classList.add('show');
        } else {
            spinner.classList.remove('show');
        }
    }
}

// 오류 메시지 표시
function showError(message) {
    // 간단한 알림 표시
    alert(message);
}

// 스크롤 시 네비게이션 배경 변경
window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 100) {
        navbar.style.background = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.15)';
    } else {
        navbar.style.background = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    }
});

// 자동 새로고침 (5분마다)
setInterval(async () => {
    try {
        await loadExchangeRates();
        createRateCards();
        updateHeroRates();
        updateConverter();
    } catch (error) {
        console.error('자동 새로고침 오류:', error);
    }
}, 5 * 60 * 1000);

// 페이지 로드 완료 시 애니메이션
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
}); 