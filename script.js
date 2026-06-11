const pages = Array.from(document.querySelectorAll(".page"));
const progressText = document.getElementById("progressText");
const progressBar = document.getElementById("progressBar");
const relayScore = document.getElementById("relayScore");
const modal = document.getElementById("infoModal");
const modalKicker = document.getElementById("modalKicker");
const modalTitle = document.getElementById("modalTitle");
const modalBody = document.getElementById("modalBody");
const timelineList = document.getElementById("timelineList");
const timelineProgress = document.getElementById("timelineProgress");
const timelineBadgeRow = document.getElementById("timelineBadgeRow");
const redMap = document.getElementById("redMap");
const mapCount = document.getElementById("mapCount");
const mapAchievement = document.getElementById("mapAchievement");
const mapSignal = document.getElementById("mapSignal");
const questionText = document.getElementById("questionText");
const optionList = document.getElementById("optionList");
const quizIndex = document.getElementById("quizIndex");
const quizScore = document.getElementById("quizScore");
const quizHint = document.getElementById("quizHint");
const quizAccuracy = document.getElementById("quizAccuracy");
const quizStreak = document.getElementById("quizStreak");
const quizExplain = document.getElementById("quizExplain");
const quizNext = document.getElementById("quizNext");
const userName = document.getElementById("userName");
const makeDeclaration = document.getElementById("makeDeclaration");
const declarationBox = document.getElementById("declarationBox");
const pledgeChips = Array.from(document.querySelectorAll("[data-pledge]"));
const posterCanvas = document.getElementById("posterCanvas");
const downloadPoster = document.getElementById("downloadPoster");
const posterSummary = document.getElementById("posterSummary");
const badgeWall = document.getElementById("badgeWall");
const shareQr = document.getElementById("shareQr");
const shareUrlInput = document.getElementById("shareUrlInput");
const applyShareUrl = document.getElementById("applyShareUrl");
const restartBtn = document.getElementById("restartBtn");
const musicToggle = document.getElementById("musicToggle");
const toast = document.getElementById("toast");
const medalOverlay = document.getElementById("medalOverlay");
const medalSymbol = document.getElementById("medalSymbol");
const medalTitle = document.getElementById("medalTitle");
const medalSub = document.getElementById("medalSub");

const timelineData = [
  {
    year: "1921",
    title: "中国共产党成立",
    brief: "开天辟地的大事变",
    body: "1921年7月，中国共产党第一次全国代表大会在上海开幕。会议后期因受到干扰，最后一天转移到浙江嘉兴南湖游船上继续举行。大会通过党的第一个纲领，确定党的名称为“中国共产党”，宣告中国共产党正式成立。这是中国历史上开天辟地的大事变，中国革命面貌从此焕然一新。",
    spirit: "初心使命、开天辟地、敢为人先",
    youth: "把个人理想融入民族复兴的壮阔征程，在新时代继续点亮信仰之光。"
  },
  {
    year: "1949",
    title: "中华人民共和国成立",
    brief: "中国人民从此站起来了",
    body: "1949年10月1日，中华人民共和国中央人民政府成立典礼在北京天安门广场隆重举行。中华人民共和国的成立，结束了旧中国半殖民地半封建社会的历史，实现了中国从几千年封建专制政治向人民民主的伟大飞跃，中国人民从此站起来了。",
    spirit: "人民至上、独立自主、团结奋斗",
    youth: "珍惜来之不易的和平与发展环境，把爱国之情转化为报国之行。"
  },
  {
    year: "1978",
    title: "党的十一届三中全会",
    brief: "改革开放和社会主义现代化建设新时期",
    body: "1978年12月18日至22日，党的十一届三中全会在北京举行。全会重新确立了解放思想、实事求是的思想路线，作出把党和国家工作中心转移到经济建设上来、实行改革开放的历史性决策，开启了改革开放和社会主义现代化建设新时期。",
    spirit: "解放思想、实事求是、改革创新",
    youth: "以开放眼光学习新知识、掌握新本领，在中国式现代化建设中勇于创新。"
  },
  {
    year: "2012",
    title: "党的十八大召开",
    brief: "奋力开创中国特色社会主义新局面",
    body: "2012年11月8日至14日，中国共产党第十八次全国代表大会在北京举行。大会明确全面建成小康社会和全面深化改革开放的目标，对坚持和发展中国特色社会主义作出全面部署，把科学发展观确立为党必须长期坚持的指导思想，激励全党全国各族人民为新的奋斗目标团结前进。",
    spirit: "道路自信、理论自信、制度自信、文化自信",
    youth: "在新时代坐标中找准成长方向，以过硬本领服务国家发展需要。"
  },
  {
    year: "2026",
    title: "建党105周年青春接力",
    brief: "在新征程上贡献青春力量",
    body: "2026年是中国共产党成立105周年。站在新的时间坐标上，青年一代回望百年奋斗历程，赓续红色血脉，接过历史接力棒，在强国建设、民族复兴的新征程中坚定理想信念、锤炼过硬本领、贡献青春力量。",
    spirit: "青春接力、强国有我、复兴担当",
    youth: "把青春奋斗写在祖国大地上，让理想之光在新征程上熠熠生辉。"
  }
];

const landmarks = [
  {
    name: "上海中共一大会址",
    x: 75,
    y: 58,
    body: "这里见证了中国共产党第一次全国代表大会的召开。小小石库门中，信仰的火种点亮民族复兴的征程，成为中国共产党人的精神原点之一。",
    badge: "初心启航",
    symbol: "壹"
  },
  {
    name: "嘉兴南湖红船",
    x: 73,
    y: 64,
    body: "中共一大最后一天在浙江嘉兴南湖游船上继续举行。红船承载着中国共产党人的初心使命，象征开天辟地、敢为人先的首创精神。",
    badge: "红船精神",
    symbol: "船"
  },
  {
    name: "井冈山革命根据地",
    x: 54,
    y: 73,
    body: "井冈山是中国革命的重要摇篮。党在这里探索农村包围城市、武装夺取政权的革命道路，形成了坚定信念、艰苦奋斗、实事求是、敢闯新路的宝贵精神。",
    badge: "星火燎原",
    symbol: "火"
  },
  {
    name: "遵义会议会址",
    x: 42,
    y: 66,
    body: "1935年1月，中共中央政治局在贵州遵义召开扩大会议。会议在极端危急的历史关头挽救了党、挽救了红军、挽救了中国革命，是党的历史上一个生死攸关的转折点。",
    badge: "转折之光",
    symbol: "转"
  },
  {
    name: "延安革命纪念地",
    x: 51,
    y: 41,
    body: "延安是中国革命圣地。党中央在延安领导中国革命走向胜利，形成和培育了延安精神，激励一代代青年坚定理想、服务人民、艰苦奋斗。",
    badge: "延安精神",
    symbol: "延"
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
  },
  {
    question: "中国共产党的根本宗旨是什么？",
    options: ["全心全意为人民服务", "追求个人名利", "脱离群众独立发展", "只重视形式宣传"],
    answer: 0,
    explain: "全心全意为人民服务是中国共产党的根本宗旨。"
  },
  {
    question: "延安精神的重要内涵不包括哪一项？",
    options: ["铺张浪费、脱离群众", "坚定正确的政治方向", "解放思想、实事求是", "自力更生、艰苦奋斗"],
    answer: 0,
    explain: "延安精神强调坚定正确的政治方向、解放思想实事求是、全心全意为人民服务和自力更生艰苦奋斗等。"
  },
  {
    question: "井冈山精神中，“敢闯新路”体现了什么品质？",
    options: ["实事求是、勇于探索", "因循守旧", "畏难退缩", "脱离实际"],
    answer: 0,
    explain: "井冈山精神中的敢闯新路，体现了从实际出发、勇于探索中国革命道路的精神品质。"
  },
  {
    question: "红船精神中的“首创精神”强调什么？",
    options: ["开天辟地、敢为人先", "等待观望", "只看眼前", "回避责任"],
    answer: 0,
    explain: "红船精神包含开天辟地、敢为人先的首创精神，坚定理想、百折不挠的奋斗精神，立党为公、忠诚为民的奉献精神。"
  },
  {
    question: "面向建党105周年，青年接力最应体现的行动是？",
    options: ["坚定理想信念，练就过硬本领", "忽视学习实践", "只关注个人得失", "远离时代责任"],
    answer: 0,
    explain: "青年一代应坚定理想信念、练就过硬本领，在强国建设、民族复兴新征程中贡献青春力量。"
  }
];

const badgeCatalog = [
  { id: "timeline", name: "党史寻光者", symbol: "史", desc: "完成五段党史坐标学习" },
  { id: "landmark-0", name: "初心启航", symbol: "壹", desc: "点亮上海中共一大会址" },
  { id: "landmark-1", name: "红船精神", symbol: "船", desc: "点亮嘉兴南湖红船" },
  { id: "landmark-2", name: "星火燎原", symbol: "火", desc: "点亮井冈山革命根据地" },
  { id: "landmark-3", name: "转折之光", symbol: "转", desc: "点亮遵义会议会址" },
  { id: "landmark-4", name: "延安精神", symbol: "延", desc: "点亮延安革命纪念地" },
  { id: "map", name: "足迹点亮者", symbol: "图", desc: "完成全部红色地标打卡" },
  { id: "quiz", name: "知识先锋", symbol: "智", desc: "完成随机党史知识挑战" },
  { id: "declare", name: "青春告白者", symbol: "青", desc: "生成青春宣言" }
];

let currentPage = 0;
let viewedTimeline = new Set();
let visitedLandmarks = new Set();
let lastLandmarkIndex = null;
let earnedBadgeIds = new Set();
let medalQueue = [];
let medalAnimating = false;
let quizItems = [];
let currentQuestion = 0;
let selectedOption = null;
let score = 0;
let answeredCount = 0;
let correctCount = 0;
let streak = 0;
let quizFinished = false;
let visitorName = "";
let declaration = "我以青春之名，向党告白。";
let selectedPledges = new Set(["理想", "奋斗"]);
let audioContext = null;
let musicTimer = null;
let musicOn = false;
let publicShareUrl = getCurrentShareUrl();
let qrImage = null;
let qrReady = false;
let toastTimer = null;

function init() {
  quizItems = buildQuizItems();
  renderTimeline();
  renderMap();
  renderQuestion();
  updateRelayPanel();
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
  pledgeChips.forEach((chip) => {
    chip.addEventListener("click", () => togglePledge(chip));
  });
}

function renderTimeline() {
  timelineList.innerHTML = timelineData.map((item, index) => `
    <button class="timeline-item" type="button" data-timeline="${index}">
      <strong class="timeline-year">${item.year}</strong>
      <span>
        <span class="timeline-title">${item.title}</span>
        <span class="timeline-brief">${item.brief}</span>
        <span class="timeline-status">待学习</span>
      </span>
    </button>
  `).join("");

  timelineList.querySelectorAll("[data-timeline]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.timeline);
      const item = timelineData[index];
      const firstView = !viewedTimeline.has(index);
      viewedTimeline.add(index);
      button.classList.add("is-viewed");
      button.querySelector(".timeline-status").textContent = "已学习";
      updateRelayPanel();
      if (firstView) showToast(`党史坐标 +8：${item.year}`);
      if (viewedTimeline.size === timelineData.length) awardBadge("timeline");
      openModal("历史节点", `${item.year} · ${item.title}`, item.body, [
        ["精神关键词", item.spirit],
        ["青春启示", item.youth]
      ]);
    });
  });
  updateTimelineState();
}

function renderMap() {
  const routePoints = landmarks.map((item) => `${(item.x * 3.6).toFixed(1)},${(item.y * 2.7).toFixed(1)}`).join(" ");
  redMap.innerHTML = `
    <img class="china-outline-img" src="https://simplemaps.com/static/svg/country/cn/all/cn.svg" alt="" loading="eager">
    <svg class="china-outline" viewBox="0 0 360 270" role="img" aria-label="红色足迹中国地图">
      <polyline class="map-route" points="${routePoints}" />
      ${landmarks.map((item, index) => `<circle class="route-dot" data-route="${index}" cx="${(item.x * 3.6).toFixed(1)}" cy="${(item.y * 2.7).toFixed(1)}" r="4.5" />`).join("")}
    </svg>
    <div class="map-scan" aria-hidden="true"></div>
  ` + landmarks.map((item, index) => `
    <button class="map-pin" type="button" data-landmark="${index}" style="left:${item.x}%; top:${item.y}%;">
      <span>${item.name.replace("上海", "").replace("嘉兴", "")}</span>
    </button>
  `).join("");

  redMap.querySelectorAll("[data-landmark]").forEach((button) => {
    button.addEventListener("click", () => {
      const index = Number(button.dataset.landmark);
      const item = landmarks[index];
      const firstVisit = !visitedLandmarks.has(index);
      visitedLandmarks.add(index);
      lastLandmarkIndex = index;
      button.classList.add("is-visited");
      updateRelayPanel();
      if (firstVisit) {
        awardBadge(`landmark-${index}`);
        showToast(`地标打卡 +8：${item.badge}`);
      }
      openModal("红色地标", item.name, item.body, [
        ["点亮徽章", item.badge],
        ["接力提示", "把红色足迹记在心里，把奋斗脚步落在实处。"]
      ]);
    });
  });
  updateMapState();
}

function buildQuizItems() {
  const items = shuffleArray(questions)
    .slice(0, 5)
    .map((item) => {
      const mixedOptions = shuffleArray(item.options.map((text, index) => ({
        text,
        originalIndex: index
      })));
      return {
        question: item.question,
        explain: item.explain,
        options: mixedOptions.map((option) => option.text),
        answer: mixedOptions.findIndex((option) => option.originalIndex === item.answer)
      };
    });

  let answerACount = 0;
  items.forEach((item, index) => {
    if (item.answer === 0 && (index === 0 || answerACount >= 1)) {
      moveCorrectOption(item, secureRandomInt(3) + 1);
    }
    if (item.answer === 0) answerACount += 1;
  });

  return items;
}

function moveCorrectOption(item, targetIndex) {
  const correctText = item.options[item.answer];
  item.options.splice(item.answer, 1);
  item.options.splice(targetIndex, 0, correctText);
  item.answer = targetIndex;
}

function shuffleArray(items) {
  const result = [...items];
  for (let index = result.length - 1; index > 0; index -= 1) {
    const swapIndex = secureRandomInt(index + 1);
    [result[index], result[swapIndex]] = [result[swapIndex], result[index]];
  }
  return result;
}

function secureRandomInt(max) {
  if (window.crypto && window.crypto.getRandomValues) {
    const values = new Uint32Array(1);
    window.crypto.getRandomValues(values);
    return values[0] % max;
  }
  return Math.floor(Math.random() * max);
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
  showToast("二维码链接已更新");
}

function updateQrImage() {
  const qrUrl = getQrUrl(publicShareUrl);
  qrReady = false;
  shareQr.src = qrUrl;
  if (qrImage) qrImage.src = qrUrl;
}

function renderQuestion() {
  const item = quizItems[currentQuestion];
  selectedOption = null;
  quizIndex.textContent = `第 ${currentQuestion + 1} 题 / 共 ${quizItems.length} 题`;
  quizScore.textContent = `得分 ${score}`;
  updateQuizStats();
  questionText.textContent = item.question;
  quizHint.textContent = quizFinished ? getScoreMessage() : "请选择一个答案。";
  quizExplain.hidden = true;
  quizExplain.textContent = "";
  quizNext.textContent = currentQuestion === quizItems.length - 1 ? "查看得分" : "下一题";
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

  const item = quizItems[currentQuestion];
  const isRight = selectedOption === item.answer;
  answeredCount += 1;
  if (isRight) {
    score += Math.round(100 / quizItems.length);
    correctCount += 1;
    streak += 1;
  } else {
    streak = 0;
  }
  quizScore.textContent = `得分 ${score}`;
  updateQuizStats();

  optionList.querySelectorAll(".option-btn").forEach((button) => {
    const optionIndex = Number(button.dataset.option);
    button.disabled = true;
    if (optionIndex === item.answer) button.classList.add("is-correct");
    if (optionIndex === selectedOption && !isRight) button.classList.add("is-wrong");
  });

  quizHint.textContent = isRight ? "回答正确，信念值继续提升。" : "继续努力，学习就是新的出发。";
  quizExplain.hidden = false;
  quizExplain.innerHTML = `<strong>解析</strong><span>${item.explain}</span>`;

  if (currentQuestion === quizItems.length - 1) {
    quizFinished = true;
    quizNext.textContent = "前往宣言";
    awardBadge("quiz");
    showToast(`知识挑战完成：${score}分`);
    updateRelayPanel();
    drawPoster();
    return;
  }

  quizNext.disabled = true;
  setTimeout(() => {
    currentQuestion += 1;
    quizNext.disabled = false;
    renderQuestion();
  }, 1450);
}

function generateDeclaration() {
  const name = userName.value.trim().replace(/\s+/g, "");
  if (!name) {
    declarationBox.textContent = "请先输入姓名，再生成属于你的青春宣言。";
    userName.focus();
    return;
  }

  visitorName = name;
  const pledgeText = Array.from(selectedPledges).join("、") || "奋斗";
  declaration = `我是${visitorName}。我以青春之名，向党告白：请党放心，强国有我！愿以${pledgeText}书写青春答卷，在新时代新征程上接续前行。`;
  declarationBox.textContent = declaration;
  awardBadge("declare");
  showToast("青春宣言已生成");
  updateRelayPanel();
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
  updateRelayPanel();
}

function openModal(kicker, title, body, details = []) {
  modalKicker.textContent = kicker;
  modalTitle.textContent = title;
  modalBody.innerHTML = "";
  const paragraph = document.createElement("p");
  paragraph.textContent = body;
  modalBody.appendChild(paragraph);
  if (details.length) {
    const list = document.createElement("dl");
    list.className = "modal-detail";
    details.forEach(([label, value]) => {
      const term = document.createElement("dt");
      const desc = document.createElement("dd");
      term.textContent = label;
      desc.textContent = value;
      list.append(term, desc);
    });
    modalBody.appendChild(list);
  }
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
  viewedTimeline = new Set();
  visitedLandmarks = new Set();
  lastLandmarkIndex = null;
  earnedBadgeIds = new Set();
  medalQueue = [];
  medalAnimating = false;
  medalOverlay.classList.remove("is-playing");
  quizItems = buildQuizItems();
  currentQuestion = 0;
  selectedOption = null;
  score = 0;
  answeredCount = 0;
  correctCount = 0;
  streak = 0;
  quizFinished = false;
  visitorName = "";
  declaration = "我以青春之名，向党告白。";
  selectedPledges = new Set(["理想", "奋斗"]);
  userName.value = "";
  declarationBox.textContent = declaration;
  pledgeChips.forEach((chip) => chip.classList.toggle("is-active", selectedPledges.has(chip.dataset.pledge)));
  mapSignal.textContent = "坐标待激活";
  updateTimelineState();
  updateMapState();
  updateRelayPanel();
  document.querySelectorAll(".map-pin").forEach((pin) => pin.classList.remove("is-visited"));
  renderQuestion();
  drawPoster();
  goToPage(0);
}

function togglePledge(chip) {
  const value = chip.dataset.pledge;
  if (selectedPledges.has(value)) {
    if (selectedPledges.size === 1) {
      showToast("至少保留一个青春关键词");
      return;
    }
    selectedPledges.delete(value);
  } else {
    selectedPledges.add(value);
  }
  chip.classList.toggle("is-active", selectedPledges.has(value));
  if (visitorName) generateDeclaration();
}

function getRelayValue() {
  return viewedTimeline.size * 8 + visitedLandmarks.size * 8 + (quizFinished ? score : 0) + (visitorName ? 20 : 0);
}

function getRelayRank() {
  const value = getRelayValue();
  if (value >= 180) return "先锋接力者";
  if (value >= 140) return "信念传承者";
  if (value >= 80) return "红色寻访者";
  return "红色学习者";
}

function getBadges() {
  return badgeCatalog
    .filter((badge) => earnedBadgeIds.has(badge.id))
    .map((badge) => badge.name);
}

function updateRelayPanel() {
  const value = getRelayValue();
  relayScore.textContent = `接力值 ${value}`;
  relayScore.classList.toggle("is-high", value >= 140);
  updateTimelineState();
  updateMapState();
  updateBadgeWall();
  updatePosterSummary();
}

function updateTimelineState() {
  if (!timelineProgress || !timelineBadgeRow) return;
  timelineProgress.textContent = `已学习 ${viewedTimeline.size} / ${timelineData.length}`;
  timelineBadgeRow.innerHTML = timelineData.map((item, index) => `
    <span class="${viewedTimeline.has(index) ? "is-on" : ""}">${item.year}</span>
  `).join("");
  timelineList.querySelectorAll("[data-timeline]").forEach((button) => {
    const index = Number(button.dataset.timeline);
    button.classList.toggle("is-viewed", viewedTimeline.has(index));
    const status = button.querySelector(".timeline-status");
    if (status) status.textContent = viewedTimeline.has(index) ? "已学习" : "待学习";
  });
}

function updateMapState() {
  if (!mapCount || !mapAchievement) return;
  mapCount.textContent = `${visitedLandmarks.size} / ${landmarks.length}`;
  const completed = visitedLandmarks.size === landmarks.length;
  if (completed) awardBadge("map");
  mapAchievement.textContent = completed
    ? "红色足迹已全部点亮，获得“红色足迹点亮者”成就。"
    : `还差 ${landmarks.length - visitedLandmarks.size} 处地标，继续完成红色打卡。`;
  mapAchievement.classList.toggle("is-complete", completed);
  redMap.querySelectorAll("[data-route]").forEach((dot) => {
    dot.classList.toggle("is-on", visitedLandmarks.has(Number(dot.dataset.route)));
  });
  redMap.querySelectorAll("[data-landmark]").forEach((pin) => {
    pin.classList.toggle("is-visited", visitedLandmarks.has(Number(pin.dataset.landmark)));
  });
  if (visitedLandmarks.size) {
    const latest = landmarks[lastLandmarkIndex ?? Array.from(visitedLandmarks)[visitedLandmarks.size - 1]];
    mapSignal.textContent = `已锁定坐标：${latest.name}`;
  }
}

function updateQuizStats() {
  const accuracy = answeredCount ? Math.round((correctCount / answeredCount) * 100) : 0;
  quizAccuracy.textContent = `正确率 ${accuracy}%`;
  quizStreak.textContent = `连续答对 ${streak}`;
}

function updatePosterSummary() {
  if (!posterSummary) return;
  const badges = getBadges();
  posterSummary.innerHTML = `
    <div><strong>${getRelayValue()}</strong><span>接力值</span></div>
    <div><strong>${getRelayRank()}</strong><span>荣誉称号</span></div>
    <div><strong>${badges.length}</strong><span>成就徽章</span></div>
  `;
}

function updateBadgeWall() {
  if (!badgeWall) return;
  badgeWall.innerHTML = badgeCatalog.map((badge) => `
    <div class="badge-slot ${earnedBadgeIds.has(badge.id) ? "is-earned" : ""}">
      ${renderBadgeSvg(badge)}
      <span>${badge.name}</span>
    </div>
  `).join("");
}

function renderBadgeSvg(badge) {
  const opacity = earnedBadgeIds.has(badge.id) ? "1" : "0.34";
  return `
    <svg class="badge-svg" viewBox="0 0 100 120" aria-hidden="true" style="opacity:${opacity}">
      <path class="badge-ribbon" d="M28 72 L18 113 L50 96 L82 113 L72 72 Z" />
      <circle class="badge-ring" cx="50" cy="46" r="38" />
      <circle class="badge-face" cx="50" cy="46" r="29" />
      <path class="badge-star" d="M50 20 L57 38 L76 38 L61 50 L66 69 L50 58 L34 69 L39 50 L24 38 L43 38 Z" />
      <text x="50" y="53">${badge.symbol}</text>
    </svg>
  `;
}

function awardBadge(id) {
  if (earnedBadgeIds.has(id)) return;
  const badge = badgeCatalog.find((item) => item.id === id);
  if (!badge) return;
  earnedBadgeIds.add(id);
  updateBadgeWall();
  updatePosterSummary();
  drawPoster();
  medalQueue.push(badge);
  if (!medalAnimating) playNextMedal();
}

function playNextMedal() {
  const badge = medalQueue.shift();
  if (!badge) {
    medalAnimating = false;
    medalOverlay.classList.remove("is-playing");
    return;
  }

  medalAnimating = true;
  medalSymbol.textContent = badge.symbol;
  medalTitle.textContent = `获得勋章：${badge.name}`;
  medalSub.textContent = badge.desc;
  medalOverlay.classList.remove("is-playing");
  void medalOverlay.offsetWidth;
  medalOverlay.classList.add("is-playing");
  setTimeout(() => {
    medalOverlay.classList.remove("is-playing");
    setTimeout(playNextMedal, 260);
  }, 2300);
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("is-show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => {
    toast.classList.remove("is-show");
  }, 1500);
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
  musicTimer = setInterval(playMelody, 9600);
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
  const C3 = 130.81;
  const D3 = 146.83;
  const E3 = 164.81;
  const G3 = 196.00;
  const A3 = 220.00;
  const C4 = 261.63;
  const D4 = 293.66;
  const E4 = 329.63;
  const G4 = 392.00;
  const A4 = 440.00;
  const C5 = 523.25;
  const notes = [
    { freq: C4, time: 0.00, len: 0.46, vol: 0.038 },
    { freq: E4, time: 0.58, len: 0.44, vol: 0.04 },
    { freq: G4, time: 1.16, len: 0.44, vol: 0.042 },
    { freq: A4, time: 1.74, len: 0.74, vol: 0.044 },
    { freq: G4, time: 2.60, len: 0.42, vol: 0.038 },
    { freq: E4, time: 3.08, len: 0.42, vol: 0.036 },
    { freq: D4, time: 3.56, len: 0.42, vol: 0.034 },
    { freq: C4, time: 4.08, len: 0.72, vol: 0.04 },
    { freq: E4, time: 5.02, len: 0.46, vol: 0.038 },
    { freq: G4, time: 5.58, len: 0.46, vol: 0.04 },
    { freq: A4, time: 6.14, len: 0.46, vol: 0.042 },
    { freq: C5, time: 6.70, len: 0.78, vol: 0.045 },
    { freq: A4, time: 7.58, len: 0.44, vol: 0.038 },
    { freq: G4, time: 8.08, len: 0.44, vol: 0.036 },
    { freq: E4, time: 8.58, len: 0.66, vol: 0.038 }
  ];
  const bass = [
    { freq: C3, time: 0.00, len: 0.9 },
    { freq: G3, time: 1.16, len: 0.58 },
    { freq: A3, time: 2.32, len: 0.62 },
    { freq: G3, time: 3.48, len: 0.64 },
    { freq: C3, time: 4.64, len: 0.9 },
    { freq: E3, time: 5.80, len: 0.58 },
    { freq: G3, time: 6.96, len: 0.62 },
    { freq: C3, time: 8.12, len: 0.92 }
  ];
  const chords = [
    { freqs: [C3, E3, G3], time: 0.04, len: 1.55 },
    { freqs: [A3, C4, E4], time: 2.32, len: 1.15 },
    { freqs: [G3, C4, D4], time: 3.52, len: 1.1 },
    { freqs: [C3, E3, G3], time: 4.72, len: 1.45 },
    { freqs: [A3, C4, E4], time: 6.14, len: 1.24 },
    { freqs: [C3, E3, G3], time: 7.74, len: 1.4 }
  ];
  const beats = [0, 1.16, 2.32, 3.48, 4.64, 5.8, 6.96, 8.12];

  notes.forEach((note) => {
    scheduleTone(note.freq, now + note.time, note.len, note.vol, "triangle", "lead");
    scheduleTone(note.freq * 2, now + note.time + 0.02, note.len * 0.74, note.vol * 0.12, "sine", "shine");
  });

  bass.forEach((note) => {
    scheduleTone(note.freq, now + note.time, note.len, 0.025, "sine", "bass");
  });

  chords.forEach((chord) => {
    chord.freqs.forEach((freq) => {
      scheduleTone(freq, now + chord.time, chord.len, 0.012, "triangle", "pad");
    });
  });

  beats.forEach((time, index) => {
    scheduleKick(now + time, index % 2 === 0 ? 0.055 : 0.035);
  });
}

function scheduleTone(freq, start, duration, volume, type, role = "lead") {
  const osc = audioContext.createOscillator();
  const gain = audioContext.createGain();
  const filter = audioContext.createBiquadFilter();
  const vibrato = audioContext.createOscillator();
  const vibratoGain = audioContext.createGain();
  osc.type = type;
  osc.frequency.setValueAtTime(freq, start);
  vibrato.type = "sine";
  vibrato.frequency.setValueAtTime(role === "lead" ? 4.8 : 3.2, start);
  vibratoGain.gain.setValueAtTime(role === "lead" ? freq * 0.0022 : freq * 0.0009, start);
  filter.type = "lowpass";
  filter.frequency.setValueAtTime(role === "bass" ? 460 : role === "pad" ? 720 : 1180, start);
  gain.gain.setValueAtTime(0.001, start);
  gain.gain.linearRampToValueAtTime(volume, start + (role === "pad" ? 0.22 : 0.08));
  gain.gain.exponentialRampToValueAtTime(0.001, start + duration);
  vibrato.connect(vibratoGain);
  vibratoGain.connect(osc.frequency);
  osc.connect(filter);
  filter.connect(gain);
  gain.connect(audioContext.destination);
  vibrato.start(start);
  osc.start(start);
  vibrato.stop(start + duration + 0.08);
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
  const relayValue = getRelayValue();
  const relayRank = getRelayRank();
  const badgeText = getBadges().join(" · ") || "完成互动后点亮徽章";
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

  drawPosterStat(ctx, 86, 742, 165, 86, "接力值", String(relayValue));
  drawPosterStat(ctx, 292, 742, 165, 86, "荣誉称号", relayRank);
  drawPosterStat(ctx, 498, 742, 165, 86, "成就徽章", String(getBadges().length));

  ctx.fillStyle = "rgba(255, 248, 226, 0.72)";
  ctx.textAlign = "center";
  ctx.font = "700 24px sans-serif";
  ctx.fillText(badgeText, width / 2, 870);

  drawWrappedText(ctx, posterDeclaration, 85, 915, 410, 34, 24, "rgba(255, 248, 226, 0.9)");
  drawPosterQr(ctx, 535, 895, 120);

  ctx.fillStyle = "rgba(255, 248, 226, 0.72)";
  ctx.textAlign = "left";
  ctx.font = "700 22px sans-serif";
  ctx.fillText("赓续红色血脉 · 奋斗书写青春", 52, 1086);
  ctx.textAlign = "right";
  ctx.font = "700 24px sans-serif";
  ctx.fillText("制作人：马天宇", width - 52, 1086);

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

function drawPosterStat(ctx, x, y, width, height, label, value) {
  ctx.save();
  ctx.fillStyle = "rgba(92, 5, 12, 0.46)";
  ctx.strokeStyle = "rgba(255, 222, 130, 0.55)";
  ctx.lineWidth = 2;
  roundRect(ctx, x, y, width, height, 18);
  ctx.fill();
  ctx.stroke();
  ctx.textAlign = "center";
  ctx.fillStyle = "rgba(255, 246, 218, 0.72)";
  ctx.font = "700 22px sans-serif";
  ctx.fillText(label, x + width / 2, y + 30);
  ctx.fillStyle = "#ffd36a";
  ctx.font = value.length > 5 ? "800 24px sans-serif" : "900 35px sans-serif";
  ctx.fillText(value, x + width / 2, y + 66);
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
