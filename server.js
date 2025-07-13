const express = require('express');
const http = require('http');
const socketIo = require('socket.io');
const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const app = express();
const server = http.createServer(app);
const io = socketIo(server);

// 정적 파일 제공
app.use(express.static('public'));

// SQLite 데이터베이스 설정
const db = new sqlite3.Database('chat.db');

// 메시지 테이블 생성
db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS messages (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    nickname TEXT NOT NULL,
    message TEXT NOT NULL,
    timestamp DATETIME DEFAULT CURRENT_TIMESTAMP
  )`);
});

// 메인 페이지
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Socket.io 연결 처리
io.on('connection', (socket) => {
  console.log('사용자가 연결되었습니다:', socket.id);

  // 기존 메시지 로드
  db.all("SELECT * FROM messages ORDER BY timestamp DESC LIMIT 50", (err, rows) => {
    if (err) {
      console.error('메시지 로드 오류:', err);
    } else {
      socket.emit('loadMessages', rows.reverse());
    }
  });

  // 새 메시지 수신
  socket.on('sendMessage', (data) => {
    const { nickname, message } = data;
    
    // 데이터베이스에 메시지 저장
    db.run("INSERT INTO messages (nickname, message) VALUES (?, ?)", 
      [nickname, message], function(err) {
        if (err) {
          console.error('메시지 저장 오류:', err);
        } else {
          // 모든 클라이언트에게 메시지 전송
          io.emit('newMessage', {
            id: this.lastID,
            nickname: nickname,
            message: message,
            timestamp: new Date().toISOString()
          });
        }
      });
  });

  // 연결 해제
  socket.on('disconnect', () => {
    console.log('사용자가 연결을 해제했습니다:', socket.id);
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
  console.log(`http://localhost:${PORT} 에서 접속하세요.`);
});
