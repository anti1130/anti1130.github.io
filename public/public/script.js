// Socket.io 연결
const socket = io();

// DOM 요소들
const nicknameInput = document.getElementById('nickname');
const setNicknameBtn = document.getElementById('setNickname');
const messageInput = document.getElementById('messageInput');
const sendButton = document.getElementById('sendButton');
const messagesContainer = document.getElementById('messages');

// 사용자 닉네임
let currentNickname = '';

// 닉네임 설정
setNicknameBtn.addEventListener('click', () => {
    const nickname = nicknameInput.value.trim();
    if (nickname) {
        currentNickname = nickname;
        nicknameInput.value = nickname;
        nicknameInput.disabled = true;
        setNicknameBtn.textContent = '설정됨';
        setNicknameBtn.disabled = true;
        messageInput.focus();
        
        // 환영 메시지 제거
        const welcomeMessage = document.querySelector('.welcome-message');
        if (welcomeMessage) {
            welcomeMessage.remove();
        }
    }
});

// Enter 키로 닉네임 설정
nicknameInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        setNicknameBtn.click();
    }
});

// 메시지 전송
function sendMessage() {
    const message = messageInput.value.trim();
    if (message && currentNickname) {
        socket.emit('sendMessage', {
            nickname: currentNickname,
            message: message
        });
        messageInput.value = '';
    }
}

sendButton.addEventListener('click', sendMessage);

// Enter 키로 메시지 전송
messageInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        sendMessage();
    }
});

// 메시지 표시 함수
function displayMessage(messageData) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${messageData.nickname === currentNickname ? 'own' : 'other'}`;
    
    const messageInfo = document.createElement('div');
    messageInfo.className = 'message-info';
    
    const nicknameSpan = document.createElement('span');
    nicknameSpan.className = 'nickname';
    nicknameSpan.textContent = messageData.nickname;
    
    const timestampSpan = document.createElement('span');
    timestampSpan.className = 'timestamp';
    timestampSpan.textContent = formatTime(messageData.timestamp);
    
    messageInfo.appendChild(nicknameSpan);
    messageInfo.appendChild(timestampSpan);
    
    const messageContent = document.createElement('div');
    messageContent.className = 'message-content';
    messageContent.textContent = messageData.message;
    
    messageDiv.appendChild(messageInfo);
    messageDiv.appendChild(messageContent);
    
    messagesContainer.appendChild(messageDiv);
    
    // 스크롤을 맨 아래로
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

// 시간 포맷팅
function formatTime(timestamp) {
    const date = new Date(timestamp);
    const now = new Date();
    const diff = now - date;
    
    // 오늘인 경우 시간만 표시
    if (diff < 24 * 60 * 60 * 1000 && date.toDateString() === now.toDateString()) {
        return date.toLocaleTimeString('ko-KR', { 
            hour: '2-digit', 
            minute: '2-digit' 
        });
    }
    
    // 다른 날인 경우 날짜와 시간 표시
    return date.toLocaleDateString('ko-KR', { 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit', 
        minute: '2-digit' 
    });
}

// 기존 메시지 로드
socket.on('loadMessages', (messages) => {
    messages.forEach(message => {
        displayMessage(message);
    });
});

// 새 메시지 수신
socket.on('newMessage', (messageData) => {
    displayMessage(messageData);
});

// 연결 상태 표시
socket.on('connect', () => {
    console.log('서버에 연결되었습니다.');
});

socket.on('disconnect', () => {
    console.log('서버와의 연결이 끊어졌습니다.');
});

// 입력 필드 활성화/비활성화
messageInput.addEventListener('input', () => {
    sendButton.disabled = !messageInput.value.trim() || !currentNickname;
});

// 페이지 로드 시 초기 상태 설정
sendButton.disabled = true;
