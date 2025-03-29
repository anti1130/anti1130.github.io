<!DOCTYPE html>
<html lang="ko">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>피하기 게임 랜딩페이지</title>
  <style>
    * { box-sizing: border-box; }
    body {
      margin: 0;
      font-family: sans-serif;
      background: #111;
      color: #fff;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: flex-start;
      min-height: 100vh;
    }
    #game-container {
      display: flex;
      align-items: flex-start;
      justify-content: center;
      gap: 30px;
      margin-top: 20px;
      flex-wrap: wrap;
    }
    #game-area {
      position: relative;
      width: 500px;
      height: 500px;
    }
    canvas {
      background: #222;
      border: 2px solid #fff;
      width: 100%;
      height: 100%;
      display: block;
    }
    #overlay {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      z-index: 5;
    }
    #rankingBoard {
      background: #333;
      padding: 15px;
      border-radius: 10px;
      width: 200px;
    }
    #rankingBoard h2 {
      margin-top: 0;
      font-size: 1.2em;
      border-bottom: 1px solid #666;
      padding-bottom: 5px;
    }
    #rankingBoard ol {
      padding-left: 20px;
    }
    #nicknameForm {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0, 0, 0, 0.6);
      z-index: 6;
      display: none;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
    #popup {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: #222;
  border: 2px solid #fff;
  padding: 50px;
  border-radius: 16px;
  display: none;
  z-index: 101;
}
    #popup button {
      margin-top: 10px;
    }
    #popupClose {
      position: absolute;
      top: 5px;
      right: 10px;
      background: transparent;
      border: none;
      color: white;
      font-size: 20px;
      cursor: pointer;
    }
    #restartButton {
      margin-top: 10px;
      display: none;
    }
    input[type="text"], input[type="email"] {
      padding: 10px;
      margin-bottom: 10px;
      font-size: 1em;
      border: none;
      border-radius: 5px;
    }
    button {
      padding: 10px 20px;
      font-size: 1em;
      cursor: pointer;
      border: none;
      background: #28a745;
      color: white;
      border-radius: 5px;
    }
    #timer {
      margin-top: 10px;
      font-size: 1.2em;
    }
    #countdown {
      font-size: 3em;
      margin-top: 20px;
    }
  </style>
</head>
<body>
  <h1>⚡ 피하기 게임! ⚡</h1>
  <div id="timer">시간: 0초</div>
  <div id="game-container">
    <div id="game-area">
      <canvas id="gameCanvas" width="500" height="500"></canvas>
      <div id="overlay">
        <button id="startButton">게임 시작</button>
        <div id="countdown"></div>
      </div>
      <div id="nicknameForm">
        <h2 id="survivalTimeText"></h2>
        <input type="text" id="nicknameInput" placeholder="닉네임 입력" />
        <button type="button" id="submitNickname">등록</button>
        <button type="button" id="nicknameRestartButton" style="display: none;">재시작</button>
      </div>
    </div>
    <div id="rankingBoard">
      <h2>🏆 랭킹</h2>
      <ol id="rankingList"></ol>
      <p id="finalTime"></p>
      <button id="restartButton">재시작</button>
    </div>
  </div>

  <div id="popup">
  <button id="popupClose">✖</button>
  <h3 id="popupMessage"></h3>
  <form id="emailForm" action="https://formsubmit.co/dkshin1130@gmail.com" method="POST" target="_blank">
    <input type="email" name="email" placeholder="이메일 입력 (선택)" required />
    <input type="hidden" name="message" id="formMessage" />
    <button type="submit">확인</button>
  </form>
  </div>

  <audio id="bgm" src="https://cdn.pixabay.com/audio/2022/03/15/audio_5b3a3c3f93.mp3" loop autoplay></audio>

  <script>
    const canvas = document.getElementById("gameCanvas");
    const ctx = canvas.getContext("2d");
    const timerDisplay = document.getElementById("timer");
    const finalTimeDisplay = document.getElementById("finalTime");
    const overlay = document.getElementById("overlay");
    const startButton = document.getElementById("startButton");
    const countdown = document.getElementById("countdown");
    const nicknameForm = document.getElementById("nicknameForm");
    const nicknameInput = document.getElementById("nicknameInput");
    const submitNickname = document.getElementById("submitNickname");
    const nicknameRestartButton = document.getElementById("nicknameRestartButton");
    const rankingList = document.getElementById("rankingList");
    const restartButton = document.getElementById("restartButton");
    const popup = document.getElementById("popup");
    const popupClose = document.getElementById("popupClose");
    const popupMessage = document.getElementById("popupMessage");
    // popupSubmit는 더 이상 사용되지 않음

    let player = { x: 240, y: 450, size: 20, speed: 5 };
    let obstacles = [];
    let keys = {};
    let gameOver = false;
    let time = 0;
    let difficultyInterval = 5000;
    let rankings = [];

    function resetGame() {
      player = { x: 240, y: 450, size: 20, speed: 5 };
      obstacles = Array.from({ length: 5 }, () => ({
        x: Math.random() * 480,
        y: Math.random() * -500,
        size: 20,
        speed: 3
      }));
      keys = {};
      gameOver = false;
      time = 0;
      timerDisplay.textContent = "시간: 0초";
      nicknameForm.style.display = "none";
      restartButton.style.display = "none";
      overlay.style.display = "none";
      popup.style.display = "none";
    }

    function drawPlayer() {
      ctx.fillStyle = "lime";
      ctx.fillRect(player.x, player.y, player.size, player.size);
    }

    function drawObstacles() {
      ctx.fillStyle = "red";
      for (const obs of obstacles) {
        ctx.fillRect(obs.x, obs.y, obs.size, obs.size);
      }
    }

    function updateObstacles() {
      for (const obs of obstacles) {
        obs.y += obs.speed;
        if (obs.y > canvas.height) {
          obs.y = 0;
          obs.x = Math.random() * (canvas.width - obs.size);
        }
        if (
          player.x < obs.x + obs.size &&
          player.x + player.size > obs.x &&
          player.y < obs.y + obs.size &&
          player.y + player.size > obs.y
        ) {
          gameOver = true;
          nicknameForm.style.display = "flex";
          overlay.style.display = "flex";
          finalTimeDisplay.textContent = "";
          document.getElementById("survivalTimeText").textContent = `당신은 ${time}초 동안 버텼습니다.`;
        }
      }
    }

    function update() {
      if (document.activeElement.tagName !== "INPUT") {
        if (keys["ArrowLeft"] && player.x > 0) player.x -= player.speed;
        if (keys["ArrowRight"] && player.x < canvas.width - player.size) player.x += player.speed;
        if (keys["ArrowUp"] && player.y > 0) player.y -= player.speed;
        if (keys["ArrowDown"] && player.y < canvas.height - player.size) player.y += player.speed;
      }
      updateObstacles();
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawPlayer();
      drawObstacles();
    }

    function gameLoop() {
      if (!gameOver) {
        update();
        draw();
        requestAnimationFrame(gameLoop);
      }
    }

    function startTimer() {
      const timer = setInterval(() => {
        if (gameOver) {
          clearInterval(timer);
          return;
        }
        time++;
        timerDisplay.textContent = `시간: ${time}초`;
        if (time % (difficultyInterval / 1000) === 0) {
          obstacles.forEach(obs => obs.speed += 0.5);
        }
      }, 1000);
    }

    function updateRanking(name, score) {
      rankings.push({ name, score });
      rankings.sort((a, b) => b.score - a.score);
      if (rankings.length > 5) rankings.pop();
      rankingList.innerHTML = rankings.map(r => `<li>${r.score}초 - ${r.name}</li>`).join("");
    }

    submitNickname.addEventListener("click", () => {
      const name = nicknameInput.value.trim();
      if (name) {
        updateRanking(name, time);
        document.getElementById("survivalTimeText").textContent = "";
        nicknameInput.style.display = "none";
        submitNickname.style.display = "none";
        nicknameRestartButton.style.display = "inline-block";

        popupMessage.textContent = `${name}님, ${time}초 버티셨습니다.`;
document.getElementById("formMessage").value = `${name}님이 ${time}초 동안 버텼습니다.`;
        popup.style.display = "block";
      }
    });

    popupClose.addEventListener("click", () => {
      popup.style.display = "none";
    });
    

    function startCountdown() {
      let count = 3;
      countdown.textContent = count;
      nicknameForm.style.display = "none";
      startButton.style.display = "none";
      nicknameRestartButton.style.display = "none";
      const interval = setInterval(() => {
        count--;
        if (count === 0) {
          clearInterval(interval);
          countdown.textContent = "";
          overlay.style.display = "none";
          resetGame();
          gameLoop();
          startTimer();
        } else {
          countdown.textContent = count;
        }
      }, 1000);
    }

    startButton.addEventListener("click", startCountdown);
    restartButton.addEventListener("click", () => {
      overlay.style.display = "flex";
      startButton.style.display = "inline-block";
    });
    nicknameRestartButton.addEventListener("click", startCountdown);

    window.addEventListener("keydown", (e) => (keys[e.key] = true));
    window.addEventListener("keyup", (e) => (keys[e.key] = false));
  document.querySelector("#emailForm button[type='submit']").addEventListener("click", () => {
  setTimeout(() => {
    popup.style.display = "none";
  }, 100);
});
</script>
</body>
</html>
