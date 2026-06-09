const pages = Array.from(document.querySelectorAll(".page"));
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const modal = document.getElementById("infoModal");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const timelineList = document.getElementById("timelineList");
const redMap = document.getElementById("redMap");
const mapCount = document.getElementById("mapCount");
const questionText = document.getElementById("questionText");
const optionList = document.getElementById("optionList");
const quizIndex = document.getElementById("quizIndex");
const quizScore = document.getElementById("quizScore");
const quizHint = document.getElementById("quizHint");
const quizNext = document.getElementById("quizNext");
const userName = document.getElementById("userName");
const makeDeclaration = document.getElementById("makeDeclaration");
const declarationBox = document.getElementById("declarationBox");
const posterCanvas = document.getElementById("posterCanvas");
const downloadPoster = document.getElementById("downloadPoster");
const shareQr = document.getElementById("shareQr");
const shareUrlInput = document.getElementById("shareUrlInput");
const applyShareUrl = document.getElementById("applyShareUrl");
const restartBtn = document.getElementById("restartBtn");
const musicToggle = document.getElementById("musicToggle");

const timelineData = [
  {
    year: "1921",
    title: "中国共产党成立",
    brief: "开天辟地的大事变",
    body: "1921年7月，中国共产党第一次全国代表大会在上海开幕。会议后期因受到干扰，最后一天转移到浙江嘉兴南湖游船上继续举行。大会通过党的第一个纲领，确定党的名称为“中国共产党”，宣告中国共产党正式成立。这是中国历史上开天辟地的大事变，中国革命面貌从此焕然一新。"
  },
  {
    year: "1949",
    title: "中华人民共和国成立",
    brief: "中国人民从此站起来了",
    body: "1949年10月1日，中华人民共和国中央人民政府成立典礼在北京天安门广场隆重举行。中华人民共和国的成立，结束了旧中国半殖民地半封建社会的历史，实现了中国从几千年封建专制政治向人民民主的伟大飞跃，中国人民从此站起来了。"
  },
  {
    year: "1978",
    title: "党的十一届三中全会",
    brief: "改革开放和社会主义现代化建设新时期",
    body: "1978年12月18日至22日，党的十一届三中全会在北京举行。全会重新确立了解放思想、实事求是的思想路线，作出把党和国家工作中心转移到经济建设上来、实行改革开放的历史性决策，开启了改革开放和社会主义现代化建设新时期。"
  },
  {
    year: "2012",
    title: "党的十八大召开",
    brief: "奋力开创中国特色社会主义新局面",
    body: "2012年11月8日至14日，中国共产党第十八次全国代表大会在北京举行。大会明确全面建成小康社会和全面深化改革开放的目标，对坚持和发展中国特色社会主义作出全面部署，把科学发展观确立为党必须长期坚持的指导思想，激励全党全国各族人民为新的奋斗目标团结前进。"
  },
  {
    year: "2026",
    title: "建党105周年青春接力",
    brief: "在新征程上贡献青春力量",
    body: "2026年是中国共产党成立105周年。站在新的时间坐标上，青年一代回望百年奋斗历程，赓续红色血脉，接过历史接力棒，在强国建设、民族复兴的新征程中坚定理想信念、锤炼过硬本领、贡献青春力量。"
  }
];

const landmarks = [
  {
    name: "上海中共一大会址",
    x: 62,
    y: 54,
    body: "这里见证了中国共产党第一次全国代表大会的召开。小小石库门中，信仰的火种点亮民族复兴的征程，成为中国共产党人的精神原点之一。"
  },
  {
    name: "嘉兴南湖红船",
    x: 76,
    y: 66,
    body: "中共一大最后一天在浙江嘉兴南湖游船上继续举行。红船承载着中国共产党人的初心使命，象征开天辟地、敢为人先的首创精神。"
  },
  {
    name: "井冈山革命根据地",
    x: 48,
    y: 69,
    body: "井冈山是中国革命的重要摇篮。党在这里探索农村包围城市、武装夺取政权的革命道路，形成了坚定信念、艰苦奋斗、实事求是、敢闯新路的宝贵精神。"
  },
  {
    name: "遵义会议会址",
    x: 36,
    y: 63,
    body: "1935年1月，中共中央政治局在贵州遵义召开扩大会议。会议在极端危急的历史关头挽救了党、挽救了红军、挽救了中国革命，是党的历史上一个生死攸关的转折点。"
  },
  {
    name: "延安革命纪念地",
    x: 47,
    y: 38,
    body: "延安是中国革命圣地。党中央在延安领导中国革命走向胜利，形成和培育了延安精神，激励一代代青年坚定理想、服务人民、艰苦奋斗。"
  }
];

const questions = [
  {
    question: "中国共产党第一次全国代表大会于哪一年召开？",
    options: ["1921年", "1935年", "1949年", "1978年"],
    answer: 0,
    explain: "1921年，中共一大召开，宣告中国共产党正式成立。"
  },
  {
    question: "中共一大最后一天转移到哪里继续举行？",
    options: ["浙江嘉兴南湖游船", "江西井冈山", "贵州遵义", "陕西延安"],
    answer: 0,
    explain: "中共一大最后一天转移到浙江嘉兴南湖游船上继续举行。"
  },
  {
    question: "开启改革开放和社会主义现代化建设新时期的重要会议是？",
    options: ["党的十一届三中全会", "遵义会议", "中共七大", "党的十八大"],
    answer: 0,
    explain: "1978年召开的党的十一届三中全会作出实行改革开放的历史性决策。"
  },
  {
    question: "被称为党的历史上生死攸关转折点的是？",
    options: ["遵义会议", "开国大典", "中共一大", "南昌起义"],
    answer: 0,
    explain: "1935年召开的遵义会议，是党的历史上一个生死攸关的转折点。"
  },
  {
    question: "新时代青年赓续红色血脉，最应把个人理想融入哪里？",
    options: ["强国建设、民族复兴的伟大实践", "只追求个人荣誉", "远离集体与社会", "停止学习与奋斗"],
    answer: 0,
    explain: "新时代青年应把个人理想融入强国建设、民族复兴的伟大实践。"
  }
];

let currentPage = 0;
let visitedLandmarks = new Set();
let currentQuestion = 0;
let selectedOption = null;
let score = 0;
let quizFinished = false;
let visitorName = "";
let declaration = "我以青春之名，向党告白。";
let audioContext = null;
let musicTimer = null;
let musicOn = false;
let publicShareUrl = getCurrentShareUrl();
let qrImage = null;
let qrReady = false;

function init() {
  renderTimeline();
  renderMap();
  renderQuestion();
  bindEvents();
  initShareQr();
  drawPoster();
  updatePage();
}

function bindEvents() {
  document.querySelectorAll("[data-next]").forEach((button) => {
    button.addEventListener("click", () => {
      if (currentPage === 4 && !visitorName) {
        generateDeclaration();
      }
      if (currentPage === 4 && !visitorName) return;
      goToPage(Math.min(currentPage + 1, pages.length - 1));
    });
  });

  document.querySelectorAll("[data-prev]").forEach((button) => {
    button.addEventListener("click", () => goToPage(Math.max(currentPage - 1, 0)));
  });

  document.querySelectorAll("[data-close-modal]").forEach((target) => {
    target.addEventListener("click", closeModal);
  });

  quizNext.addEventListener("click", handleQuizNext);
  makeDeclaration.addEventListener("click", generateDeclaration);
  userName.addEventListener("keydown", (event) => {
    if (event.key === "Enter") generateDeclaration();
  });
  restartBtn.addEventListener("click", restartExperience);
  musicToggle.addEventListener("click", toggleMusic);
  applyShareUrl.addEventListener("click", () => {
    setShareUrl(shareUrlInput.value.trim());
  });
  shareUrlInput.addEventListener("keydown", (event) => {
    if (event.key === "Enter") setShareUrl(shareUrlInput.value.trim());
  });
}

function renderTimeline() {
  timelineList.innerHTML = timelineData.map((item, index) => `
    <button class="timeline-item" type="button" data-timeline="${index}">
      <strong class="timeline-year">${item.year}</strong>
      <span>
        <span class="timeline-title">${item.title}</span>
        <span class="timeline-brief">${item.brief}</span>
      </span>
    </button>
  `).join("");

  timelineList.querySelectorAll("[data-timeline]").forEach((button) => {
    button.addEventListener("click", () => {
      const item = timelineData[Number(button.dataset.timeline)];
      openModal("历史节点", `${item.year} · ${item.title}`, item.body);
    });
  });
}

function renderMap() {
  redMap.innerHTML = landmarks.map((item, index) => `
    <button class="map-pin" type="button" data-landmark="${index}" style="left:${item.x}%; top:${item.y}%;">
      <span>${item.name.replace("上海", "").replace("嘉兴", "")}</span>
    </button>
  `).join("");

  redMap.querySelectorAll("[data-landmark]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.landmark);
      const item = landmarks[index];
      visitedLandmarks.add(index);
      button.classList.add("is-visited");
      mapCount.textContent = `${visitedLandmarks.size} / ${landmarks.length}`;
      openModal("红色地标", item.name, item.body);
    });
  });
}

function initShareQr() {
  qrImage = new Image();
  qrImage.crossOrigin = "anonymous";
  qrImage.onload = () => {
    qrReady = true;
    drawPoster();
  };
  qrImage.onerror = () => {
    qrReady = false;
    drawPoster();
  };
  shareUrlInput.value = publicShareUrl;
  updateQrImage();
}

function getCurrentShareUrl() {
  const url = new URL(window.location.href);
  url.hash = "";
  return url.href;
}

function getQrUrl(url) {
  return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&margin=10&data=${encodeURIComponent(url)}`;
}

function setShareUrl(url) {
  if (!url) {
    shareUrlInput.focus();
    return;
  }

  try {
    publicShareUrl = new URL(url).href;
  } catch (error) {
    const normalized = `https://${url}`;
    try {
      publicShareUrl = new URL(normalized).href;
    } catch (innerError) {
      shareUrlInput.value = publicShareUrl;
      shareUrlInput.focus();
      return;
    }
  }

  shareUrlInput.value = publicShareUrl;
  updateQrImage();
}

function updateQrImage() {
  const qrUrl = getQrUrl(publicShareUrl);
  qrReady = false;
  shareQr.src = qrUrl;
  if (qrImage) qrImage.src = qrUrl;
}

function renderQuestion() {
  const item = questions[currentQuestion];
  selectedOption = null;
  quizIndex.textContent = `第 ${currentQuestion + 1} 题 / 共 ${questions.length} 题`;
  quizScore.textContent = `得分 ${score}`;
  questionText.textContent = item.question;
  quizHint.textContent = quizFinished ? getScoreMessage() : "请选择一个答案。";
  quizNext.textContent = currentQuestion === questions.length - 1 ? "查看得分" : "下一题";
  optionList.innerHTML = item.options.map((option, index) => `
    <button class="option-btn" type="button" data-option="${index}">
      ${String.fromCharCode(65 + index)}. ${option}
    </button>
  `).join("");

  optionList.querySelectorAll("[data-option]").forEach((button) => {
    button.addEventListener("click", () => selectAnswer(Number(button.dataset.option)));
  });
}

function selectAnswer(index) {
  if (quizFinished) return;
  selectedOption = index;
  optionList.querySelectorAll(".option-btn").forEach((button) => {
    button.classList.toggle("is-selected", Number(button.dataset.option) === index);
  });
  quizHint.textContent = "已选择，请点击下方按钮确认。";
}

function handleQuizNext() {
  if (quizFinished) {
    goToPage(4);
    return;
  }

  if (selectedOption === null) {
    quizHint.textContent = "请先选择一个答案，再继续接力。";
    return;
  }

  const item = questions[currentQuestion];
  const isRight = selectedOption === item.answer;
  if (isRight) score += 20;
  quizScore.textContent = `得分 ${score}`;

  optionList.querySelectorAll(".option-btn").forEach((button) => {
    const optionIndex = Number(button.dataset.option);
    button.disabled = true;
    if (optionIndex === item.answer) button.classList.add("is-correct");
    if (optionIndex === selectedOption && !isRight) button.classList.add("is-wrong");
  });

  quizHint.textContent = `${isRight ? "回答正确。" : "继续努力。"}${item.explain}`;

  if (currentQuestion === questions.length - 1) {
    quizFinished = true;
    quizNext.textContent = "前往宣言";
    drawPoster();
    return;
  }

  quizNext.disabled = true;
  setTimeout(() => {
    currentQuestion += 1;
    quizNext.disabled = false;
    renderQuestion();
  }, 950);
}

function generateDeclaration() {
  const name = userName.value.trim().replace(/\s+/g, "");
  if (!name) {
    declarationBox.textContent = "请先输入姓名，再生成属于你的青春宣言。";
    userName.focus();
    return;
  }

  visitorName = name;
  declaration = `我是${visitorName}。我以青春之名，向党告白：请党放心，强国有我！愿以奋斗书写青春答卷，在新时代新征程上接续前行。`;
  declarationBox.textContent = declaration;
  drawPoster();
}

function goToPage(index) {
  currentPage = index;
  if (currentPage === 5) drawPoster();
  updatePage();
}

function updatePage() {
  pages.forEach((page, index) => {
    page.classList.toggle("is-active", index === currentPage);
  });
  progressText.textContent = `${String(currentPage + 1).padStart(2, "0")} / ${String(pages.length).padStart(2, "0")}`;
  progressBar.style.width = `${((currentPage + 1) / pages.length) * 100}%`;
}

function openModal(kicker, title, body) {
  modalKicker.textContent = kicker;
  modalTitle.textContent = title;
  modalBody.textContent = body;
  modal.classList.add("is-open");
  modal.setAttribute("aria-hidden", "false");
}

function closeModal() {
  modal.classList.remove("is-open");
  modal.setAttribute("aria-hidden", "true");
}

function getScoreMessage() {
  if (score >= 90) return "满怀信念，接力前行。你的党史知识非常扎实！";
  if (score >= 70) return "学有所获，步履坚定。继续在学习中汲取前进力量。";
  return "每一次学习都是新的出发。愿你在红色记忆中坚定青春方向。";
}

function restartExperience() {
  visitedLandmarks = new Set();
  currentQuestion = 0;
  selectedOption = null;
  score = 0;
  quizFinished = false;
  visitorName = "";
  declaration = "我以青春之名，向党告白。";
  userName.value = "";
  declarationBox.textContent = declaration;
  mapCount.textContent = `0 / ${landmarks.length}`;
  document.querySelectorAll(".map-pin").forEach((pin) => pin.classList.remove("is-visited"));
  renderQuestion();
  drawPoster();
  goToPage(0);
}

function toggleMusic() {
  if (musicOn) {
    stopMusic();
    return;
  }
  startMusic();
}

function startMusic() {
  if (!audioContext) {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    audioContext = new AudioContext();
  }
  if (audioContext.state === "suspended") {
    audioContext.resume();
  }

  musicOn = true;
  musicToggle.classList.add("is-on");
  musicToggle.setAttribute("aria-label", "关闭背景音乐");
  playMelody();
  musicTimer = setInterval(playMelody, 6400);
}

function stopMusic() {
  musicOn = false;
  musicToggle.classList.remove("is-on");
  musicToggle.setAttribute("aria-label", "开启背景音乐");
  if (musicTimer) clearInterval(musicTimer);
  musicTimer = null;
}

function playMelody() {
  if (!audioContext || !musicOn) return;
  const now = audioContext.currentTime;
  const notes = [
    { freq: 392.00, time: 0.00, len: 0.38, vol: 0.07 },
    { freq: 523.25, time: 0.42, len: 0.38, vol: 0.075 },
    { freq: 587.33, time: 0.84, len: 0.38, vol: 0.075 },
    { freq: 659.25, time: 1.26, len: 0.58, vol: 0.082 },
    { freq: 587.33, time: 1.92, len: 0.34, vol: 0.07 },
    { freq: 659.25, time: 2.30, len: 0.34, vol: 0.074 },
    { freq: 783.99, time: 2.72, len: 0.62, vol: 0.085 },
    { freq: 659.25, time: 3.42, len: 0.36, vol: 0.074 },
    { freq: 587.33, time: 3.84, len: 0.36, vol: 0.07 },
    { freq: 523.25, time: 4.26, len: 0.42, vol: 0.07 },
    { freq: 392.00, time: 4.74, len: 0.72, vol: 0.082 }
  ];
  const bass = [
    { freq: 130.81, time: 0.00, len: 0.34 },
    { freq: 196.00, time: 0.84, len: 0.26 },
    { freq: 130.81, time: 1.68, len: 0.34 },
    { freq: 196.00, time: 2.52, len: 0.26 },
    { freq: 146.83, time: 3.36, len: 0.34 },
    { freq: 196.00, time: 4.20, len: 0.26 },
    { freq: 130.81, time: 5.04, len: 0.46 }
  ];
  const beats = [0, 0.84, 1.68, 2.52, 3.36, 4.20, 5.04];

  notes.forEach((note) => {
    scheduleTone(note.freq, now + note.time, note.len, note.vol, "sawtooth");
    scheduleTone(note.freq * 2, now + note.time + 0.015, note.len * 0.78, note.vol * 0.22, "triangle");
  });

  bass.forEach((note) => {
    scheduleTone(note.freq, now + note.time, note.len, 0.05, "triangle");
  });

  beats.forEach((time, index) => {
    scheduleKick(now + time, index % 2 === 0 ? 0.11 : 0.075);
  });
}

function scheduleTone(freq, start, duration, volume, type) {
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(type === "sawtooth" ? 1450 : 900, start);
  gain.gain.setValueAtTime(0.001, start);
  gain.gain.linearRampToValueAtTime(volume, start + 0.045);
  gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(audioContext.destination);
  osc.start(start);
  osc.stop(start + duration + 0.04);
}

function scheduleKick(start, volume) {
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  osc.type = "sine";
  osc.frequency.setValueAtTime(92, start);
  osc.frequency.exponentialRampToValueAtTime(42, start + 0.16);
  gain.gain.setValueAtTime(volume, start);
  gain.gain.exponentialRampToValueAtTime(0.001, start + 0.18);
  osc.connect(gain);
  gain.connect(audioContext.destination);
  osc.start(start);
  osc.stop(start + 0.2);
}

function drawPoster() {
  const ctx = posterCanvas.getContext("2d");
  const width = posterCanvas.width;
  const height = posterCanvas.height;
  const name = visitorName || "青年学子";
  const displayScore = quizFinished ? `${score}分` : "待完成";
  const posterDeclaration = visitorName
    ? declaration
    : "我以青春之名，向党告白：请党放心，强国有我！";

  const bg = ctx.createLinearGradient(0, 0, width, height);
  bg.addColorStop(0, "#6d0610");
  bg.addColorStop(0.5, "#b51620");
  bg.addColorStop(1, "#df2d27");
  ctx.fillStyle = bg;
  ctx.fillRect(0, 0, width, height);

  ctx.save();
  ctx.globalAlpha = 0.2;
  ctx.fillStyle = "#ffd36a";
  ctx.beginPath();
  ctx.arc(115, 130, 210, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(680, 1010, 280, 0, Math.PI * 2);
  ctx.fill();
  ctx.restore();

  drawPosterFlag(ctx);
  drawPosterStars(ctx);

  ctx.fillStyle = "#fff6d9";
  ctx.textAlign = "center";
  ctx.font = "700 34px sans-serif";
  ctx.fillText("庆祝中国共产党成立105周年", width / 2, 105);

  ctx.font = "900 72px sans-serif";
  ctx.fillText("红色记忆", width / 2, 205);
  ctx.fillText("青春接力", width / 2, 286);

  const numberGradient = ctx.createLinearGradient(0, 330, 0, 530);
  numberGradient.addColorStop(0, "#fff4ba");
  numberGradient.addColorStop(0.45, "#ffd15f");
  numberGradient.addColorStop(1, "#ff4a3d");
  ctx.fillStyle = numberGradient;
  ctx.font = "900 210px Arial, sans-serif";
  ctx.fillText("105", width / 2, 505);

  ctx.strokeStyle = "rgba(255, 232, 150, 0.65)";
  ctx.lineWidth = 3;
  ctx.beginPath();
  ctx.moveTo(130, 552);
  ctx.lineTo(620, 552);
  ctx.stroke();

  ctx.fillStyle = "rgba(255, 250, 230, 0.94)";
  ctx.font = "700 40px sans-serif";
  ctx.fillText(`${name} 的青春接力证书`, width / 2, 635);

  ctx.fillStyle = "#ffd36a";
  ctx.font = "800 54px sans-serif";
  ctx.fillText(`党建知识问答得分：${displayScore}`, width / 2, 710);

  drawWrappedText(ctx, posterDeclaration, 85, 780, 410, 38, 28, "rgba(255, 248, 226, 0.9)");
  drawPosterQr(ctx, 520, 770, 145);

  ctx.fillStyle = "rgba(255, 248, 226, 0.72)";
  ctx.textAlign = "center";
  ctx.font = "700 25px sans-serif";
  ctx.fillText("赓续红色血脉 · 奋斗书写青春", width / 2, 1018);
  ctx.textAlign = "right";
  ctx.font = "700 24px sans-serif";
  ctx.fillText("制作人：马天宇", width - 52, height - 48);

  downloadPoster.href = posterCanvas.toDataURL("image/png");
}

function drawPosterFlag(ctx) {
  ctx.save();
  ctx.translate(92, 370);
  ctx.fillStyle = "#f6ca62";
  ctx.fillRect(0, -165, 8, 310);
  const flagGradient = ctx.createLinearGradient(10, -160, 300, -90);
  flagGradient.addColorStop(0, "#ff5148");
  flagGradient.addColorStop(1, "#bb0c18");
  ctx.fillStyle = flagGradient;
  ctx.beginPath();
  ctx.moveTo(8, -160);
  ctx.bezierCurveTo(90, -190, 170, -122, 270, -150);
  ctx.lineTo(270, -35);
  ctx.bezierCurveTo(170, -8, 90, -76, 8, -45);
  ctx.closePath();
  ctx.fill();
  ctx.restore();
}

function drawPosterStars(ctx) {
  ctx.save();
  ctx.fillStyle = "rgba(255, 228, 133, 0.48)";
  [[610, 135, 26], [660, 220, 16], [118, 840, 18], [612, 870, 20]].forEach(([x, y, r]) => {
    drawStar(ctx, x, y, r);
  });
  ctx.restore();
}

function drawPosterQr(ctx, x, y, size) {
  ctx.save();
  ctx.fillStyle = "#fffaf0";
  roundRect(ctx, x - 10, y - 10, size + 20, size + 58, 16);
  ctx.fill();

  if (qrReady && qrImage) {
    ctx.drawImage(qrImage, x, y, size, size);
  } else {
    drawFallbackQr(ctx, x, y, size);
  }

  ctx.fillStyle = "#8e0b12";
  ctx.textAlign = "center";
  ctx.font = "800 22px sans-serif";
  ctx.fillText("扫码参与互动", x + size / 2, y + size + 35);
  ctx.restore();
}

function drawFallbackQr(ctx, x, y, size) {
  ctx.fillStyle = "#ffffff";
  ctx.fillRect(x, y, size, size);
  ctx.fillStyle = "#8e0b12";
  const cell = size / 9;
  const pattern = [
    "111000111",
    "101010101",
    "111000111",
    "000111000",
    "101101101",
    "010010010",
    "111000111",
    "101010101",
    "111000111"
  ];

  pattern.forEach((row, rowIndex) => {
    Array.from(row).forEach((bit, colIndex) => {
      if (bit === "1") {
        ctx.fillRect(x + colIndex * cell, y + rowIndex * cell, cell * 0.9, cell * 0.9);
      }
    });
  });
}

function roundRect(ctx, x, y, width, height, radius) {
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.lineTo(x + width - radius, y);
  ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
  ctx.lineTo(x + width, y + height - radius);
  ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
  ctx.lineTo(x + radius, y + height);
  ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
  ctx.lineTo(x, y + radius);
  ctx.quadraticCurveTo(x, y, x + radius, y);
  ctx.closePath();
}

function drawStar(ctx, cx, cy, radius) {
  ctx.beginPath();
  for (let i = 0; i < 10; i += 1) {
    const angle = -Math.PI / 2 + (i * Math.PI) / 5;
    const r = i % 2 === 0 ? radius : radius * 0.42;
    ctx.lineTo(cx + Math.cos(angle) * r, cy + Math.sin(angle) * r);
  }
  ctx.closePath();
  ctx.fill();
}

function drawWrappedText(ctx, text, x, y, maxWidth, lineHeight, fontSize, color) {
  ctx.fillStyle = color;
  ctx.font = `700 ${fontSize}px sans-serif`;
  ctx.textAlign = "left";
  const chars = Array.from(text);
  let line = "";
  let currentY = y;

  chars.forEach((char) => {
    const testLine = line + char;
    if (ctx.measureText(testLine).width > maxWidth && line) {
      ctx.fillText(line, x, currentY);
      line = char;
      currentY += lineHeight;
    } else {
      line = testLine;
    }
  });

  if (line) ctx.fillText(line, x, currentY);
}

init();
