// --- Default Mock Members Data ---
const DEFAULT_MEMBERS = [
  {
    id: "#9999",
    name: "아두이노 테스트",
    age: 99,
    gender: "기기",
    address: "한걸음케어 개발 연구소",
    phone: "010-9999-9999",
    status: "success",
    progress: 100,
    lastUsed: "방금 전",
    avatarSeed: "arduino",
    healthNotes: [
      "아두이노 하드웨어 연동 테스트용 가상 계정입니다.",
      "센서 신호 수신 상태 모니터링",
      "* 센서 테스트 시 이곳의 데이터가 변동됩니다."
    ],
    stats: { success: 99, warning: 0, danger: 0 },
    history: [
      { date: "2026.06.07", status: "정상" }
    ],
    hourlyActivity: [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]
  },
  {
    id: "#7721",
    name: "김동욱",
    age: 76,
    gender: "남성",
    address: "서울특별시 성북구 화랑로 14길 5",
    phone: "010-1234-5678",
    status: "success", // success | warning | danger
    progress: 92,
    lastUsed: "2분 전",
    avatarSeed: "donguk",
    healthNotes: [
      "고혈압 관리 대상자 (매일 약 복용 확인)",
      "당뇨 (당수치 모니터링 식단 조절 중)",
      "* 매일 오전 10시 투약 확인 필요"
    ],
    stats: { success: 22, warning: 5, danger: 1 },
    history: [
      { date: "2026.05.29", status: "정상" },
      { date: "2026.05.28", status: "정상" },
      { date: "2026.05.27", status: "경고" },
      { date: "2026.05.26", status: "정상" },
      { date: "2026.05.25", status: "정상" },
      { date: "2026.05.24", status: "정상" },
      { date: "2026.05.23", status: "위험" }
    ],
    hourlyActivity: [15, 8, 3, 2, 5, 12, 38, 70, 85, 62, 48, 30, 42, 58, 68, 75, 66, 78, 80, 55, 38, 25, 20, 10]
  },
  {
    id: "#7722",
    name: "김영희",
    age: 82,
    gender: "여성",
    address: "서울특별시 성북구 화랑로 12길 18",
    phone: "010-9876-5432",
    status: "danger",
    progress: 35,
    lastUsed: "방금 전",
    avatarSeed: "younghee",
    healthNotes: [
      "골다공증 위험군 (보행 시 낙상 고도 주의)",
      "경증 인지장애 보유 (주기적 정서적 대화 필요)",
      "* 야간 돌발 행동 가능성 있음"
    ],
    stats: { success: 16, warning: 8, danger: 4 },
    history: [
      { date: "2026.05.29", status: "위험" },
      { date: "2026.05.28", status: "경고" },
      { date: "2026.05.27", status: "정상" },
      { date: "2026.05.26", status: "위험" },
      { date: "2026.05.25", status: "정상" },
      { date: "2026.05.24", status: "경고" },
      { date: "2026.05.23", status: "정상" }
    ],
    hourlyActivity: [5, 2, 1, 0, 2, 8, 15, 20, 28, 35, 22, 18, 30, 40, 52, 48, 32, 28, 35, 25, 15, 12, 8, 4]
  },
  {
    id: "#7723",
    name: "박철수",
    age: 79,
    gender: "남성",
    address: "서울특별시 종로구 세종대로 123",
    phone: "010-3344-5566",
    status: "success",
    progress: 88,
    lastUsed: "5분 전",
    avatarSeed: "chulsoo",
    healthNotes: [
      "비만 및 고콜레스테롤 혈증 관리 중",
      "무릎 관절염 (물리치료 매주 화요일)",
      "* 가벼운 야외 산책 규칙적 유도 필요"
    ],
    stats: { success: 24, warning: 3, danger: 1 },
    history: [
      { date: "2026.05.29", status: "정상" },
      { date: "2026.05.28", status: "정상" },
      { date: "2026.05.27", status: "정상" },
      { date: "2026.05.26", status: "정상" },
      { date: "2026.05.25", status: "경고" },
      { date: "2026.05.24", status: "정상" },
      { date: "2026.05.23", status: "정상" }
    ],
    hourlyActivity: [12, 6, 2, 1, 4, 10, 30, 65, 78, 55, 42, 35, 48, 60, 72, 68, 62, 70, 75, 50, 40, 30, 18, 12]
  },
  {
    id: "#7724",
    name: "이순자",
    age: 81,
    gender: "여성",
    address: "서울특별시 강남구 테헤란로 45길 8",
    phone: "010-7788-9900",
    status: "warning",
    progress: 60,
    lastUsed: "12분 전",
    avatarSeed: "soonja",
    healthNotes: [
      "심근경색 기왕력 (이상 증세 발견 시 즉시 비상연락)",
      "우울증 소견 (생활 대화 모니터링 필요)"
    ],
    stats: { success: 19, warning: 7, danger: 2 },
    history: [
      { date: "2026.05.29", status: "경고" },
      { date: "2026.05.28", status: "정상" },
      { date: "2026.05.27", status: "정상" },
      { date: "2026.05.26", status: "경고" },
      { date: "2026.05.25", status: "위험" },
      { date: "2026.05.24", status: "정상" },
      { date: "2026.05.23", status: "정상" }
    ],
    hourlyActivity: [8, 4, 1, 1, 3, 7, 22, 45, 52, 40, 35, 28, 38, 48, 58, 60, 52, 55, 62, 42, 30, 22, 15, 9]
  },
  {
    id: "#7725",
    name: "최정남",
    age: 85,
    gender: "남성",
    address: "서울특별시 도봉구 시루봉로 8길 12",
    phone: "010-1111-2222",
    status: "danger",
    progress: 20,
    lastUsed: "1분 전",
    avatarSeed: "jungnam",
    healthNotes: [
      "천식 환자 (호흡 곤란 수시 체크)",
      "허리 디스크 (보행 보조기 필수)"
    ],
    stats: { success: 10, warning: 12, danger: 6 },
    history: [
      { date: "2026.05.29", status: "위험" },
      { date: "2026.05.28", status: "위험" },
      { date: "2026.05.27", status: "경고" },
      { date: "2026.05.26", status: "정상" },
      { date: "2026.05.25", status: "위험" }
    ],
    hourlyActivity: [3, 1, 0, 0, 1, 4, 8, 12, 18, 20, 15, 12, 10, 14, 18, 22, 16, 20, 24, 18, 10, 8, 5, 2]
  },
  {
    id: "#7726",
    name: "정말임",
    age: 74,
    gender: "여성",
    address: "서울특별시 서초구 반포대로 54",
    phone: "010-8888-7777",
    status: "danger",
    progress: 45,
    lastUsed: "8분 전",
    avatarSeed: "malim",
    healthNotes: [
      "만성 신부전증 (주 3회 혈액 투석 중)",
      "수면 유도제 저녁 복용 필수"
    ],
    stats: { success: 15, warning: 9, danger: 4 },
    history: [
      { date: "2026.05.29", status: "위험" },
      { date: "2026.05.28", status: "경고" },
      { date: "2026.05.27", status: "정상" },
      { date: "2026.05.26", status: "정상" }
    ],
    hourlyActivity: [10, 5, 2, 1, 2, 6, 18, 35, 42, 30, 25, 20, 28, 36, 45, 42, 38, 40, 48, 35, 24, 18, 12, 8]
  },
  {
    id: "#7727",
    name: "강태우",
    age: 71,
    gender: "남성",
    address: "서울특별시 송파구 올림픽로 88",
    phone: "010-5555-4444",
    status: "success",
    progress: 95,
    lastUsed: "4분 전",
    avatarSeed: "taewoo",
    healthNotes: [
      "양호한 신체 활성도 소유자",
      "근감소증 예방을 위한 단백질 식사 유도 필요"
    ],
    stats: { success: 26, warning: 2, danger: 0 },
    history: [
      { date: "2026.05.29", status: "정상" },
      { date: "2026.05.28", status: "정상" },
      { date: "2026.05.27", status: "정상" },
      { date: "2026.05.26", status: "정상" }
    ],
    hourlyActivity: [20, 10, 4, 2, 6, 14, 45, 82, 95, 75, 55, 40, 50, 70, 80, 85, 75, 82, 90, 65, 45, 32, 24, 15]
  },
  {
    id: "#7728",
    name: "윤지현",
    age: 68,
    gender: "여성",
    address: "서울특별시 강동구 천호대로 100",
    phone: "010-9999-8888",
    status: "danger",
    progress: 30,
    lastUsed: "15분 전",
    avatarSeed: "jihyun",
    healthNotes: [
      "뇌졸중 재활 치료 중 (좌측 편마비 증세)",
      "인지 재활 교구 활용 매일 30분 권장"
    ],
    stats: { success: 12, warning: 11, danger: 5 },
    history: [
      { date: "2026.05.29", status: "위험" },
      { date: "2026.05.28", status: "경고" },
      { date: "2026.05.27", status: "위험" },
      { date: "2026.05.26", status: "정상" }
    ],
    hourlyActivity: [6, 3, 1, 0, 1, 5, 12, 22, 28, 30, 24, 18, 20, 28, 34, 32, 25, 28, 32, 22, 14, 10, 8, 4]
  },
  {
    id: "#7729",
    name: "장성수",
    age: 80,
    gender: "남성",
    address: "서울특별시 은평구 통일로 212",
    phone: "010-6666-5555",
    status: "success",
    progress: 85,
    lastUsed: "20분 전",
    avatarSeed: "sungsoo",
    healthNotes: [
      "고혈압 및 고지혈증",
      "보청기 사용 중 (대화 시 큰 소리로 정확히 전달 요망)"
    ],
    stats: { success: 22, warning: 5, danger: 1 },
    history: [
      { date: "2026.05.29", status: "정상" },
      { date: "2026.05.28", status: "정상" }
    ],
    hourlyActivity: [14, 7, 3, 2, 4, 11, 32, 60, 75, 58, 44, 36, 46, 58, 70, 66, 60, 68, 72, 48, 38, 28, 18, 12]
  },
  {
    id: "#7730",
    name: "조순옥",
    age: 83,
    gender: "여성",
    address: "서울특별시 마포구 마포대로 12",
    phone: "010-2222-3333",
    status: "warning",
    progress: 55,
    lastUsed: "1시간 전",
    avatarSeed: "soonok",
    healthNotes: [
      "파킨슨병 진단 (약물 조절 단계)",
      "보행 보조 필수 (근력 운동 추천)"
    ],
    stats: { success: 15, warning: 10, danger: 3 },
    history: [
      { date: "2026.05.29", status: "경고" },
      { date: "2026.05.28", status: "경고" }
    ],
    hourlyActivity: [7, 3, 1, 1, 2, 6, 18, 38, 48, 35, 30, 24, 32, 42, 50, 48, 40, 45, 52, 35, 24, 18, 12, 7]
  },
  {
    id: "#7731",
    name: "배귀임",
    age: 78,
    gender: "여성",
    address: "서울특별시 영등포구 경인로 11",
    phone: "010-4444-3333",
    status: "success",
    progress: 90,
    lastUsed: "3시간 전",
    avatarSeed: "gwiim",
    healthNotes: [
      "소화 기능 저하 (부드러운 죽/식사 필요)",
      "정기적인 인지 자극 퍼즐 제공 중"
    ],
    stats: { success: 25, warning: 3, danger: 0 },
    history: [
      { date: "2026.05.29", status: "정상" }
    ],
    hourlyActivity: [16, 8, 3, 2, 5, 12, 35, 68, 80, 60, 45, 38, 45, 56, 68, 72, 64, 75, 78, 52, 42, 30, 20, 14]
  },
  {
    id: "#7732",
    name: "한상훈",
    age: 72,
    gender: "남성",
    address: "서울특별시 관악구 관악로 101",
    phone: "010-8888-9999",
    status: "danger",
    progress: 40,
    lastUsed: "12분 전",
    avatarSeed: "sanghoon",
    healthNotes: [
      "당뇨 합병증 모니터링",
      "심근 비대증 진단 (지속적 맥박 모니터링 필요)"
    ],
    stats: { success: 14, warning: 10, danger: 4 },
    history: [
      { date: "2026.05.29", status: "위험" }
    ],
    hourlyActivity: [8, 4, 1, 1, 2, 6, 16, 32, 40, 30, 26, 20, 28, 38, 45, 42, 34, 38, 42, 32, 20, 16, 10, 6]
  },
  {
    id: "#7733",
    name: "남궁민",
    age: 69,
    gender: "남성",
    address: "서울특별시 구로구 디지털로 32",
    phone: "010-3333-2222",
    status: "success",
    progress: 96,
    lastUsed: "45분 전",
    avatarSeed: "gungmin",
    healthNotes: [
      "비교적 활발한 정기적 헬스 활동 수행 중",
      "체수분 관리 필요 (수분 섭취 강조)"
    ],
    stats: { success: 27, warning: 1, danger: 0 },
    history: [
      { date: "2026.05.29", status: "정상" }
    ],
    hourlyActivity: [18, 9, 4, 2, 6, 13, 42, 78, 90, 70, 52, 38, 48, 68, 78, 82, 70, 80, 85, 60, 42, 30, 22, 14]
  },
  {
    id: "#7734",
    name: "손예지",
    age: 73,
    gender: "여성",
    address: "서울특별시 양천구 목동로 98",
    phone: "010-5555-6666",
    status: "success",
    progress: 89,
    lastUsed: "5분 전",
    avatarSeed: "yeji",
    healthNotes: [
      "류마티스 관절염 (아침 손가락 붓기 모니터링)",
      "경한 고지혈증 소견"
    ],
    stats: { success: 23, warning: 4, danger: 1 },
    history: [
      { date: "2026.05.29", status: "정상" }
    ],
    hourlyActivity: [12, 6, 2, 1, 4, 10, 28, 62, 75, 55, 40, 32, 44, 56, 68, 64, 58, 66, 70, 46, 36, 26, 16, 11]
  },
  {
    id: "#7735",
    name: "오세득",
    age: 84,
    gender: "남성",
    address: "서울특별시 서대문구 연희로 15",
    phone: "010-7777-6666",
    status: "danger",
    progress: 25,
    lastUsed: "방금 전",
    avatarSeed: "sedeuk",
    healthNotes: [
      "알츠하이머 중등도 치매 소견 (보호자 연동 긴급)",
      "식사 거부 수시 발생 (영양제 지원 요망)"
    ],
    stats: { success: 8, warning: 14, danger: 6 },
    history: [
      { date: "2026.05.29", status: "위험" }
    ],
    hourlyActivity: [4, 1, 0, 0, 1, 3, 7, 14, 20, 22, 16, 14, 12, 15, 20, 24, 18, 22, 26, 18, 12, 9, 6, 3]
  },
  {
    id: "#7736",
    name: "황필순",
    age: 77,
    gender: "여성",
    address: "서울특별시 성동구 왕십리로 222",
    phone: "010-4444-5555",
    status: "success",
    progress: 91,
    lastUsed: "2시간 전",
    avatarSeed: "pilsoon",
    healthNotes: [
      "규칙적인 일상 활동 완벽 준수 중",
      "피부 안구 건조증 (인공눈물 처방액 처치)"
    ],
    stats: { success: 24, warning: 3, danger: 1 },
    history: [
      { date: "2026.05.29", status: "정상" }
    ],
    hourlyActivity: [15, 8, 3, 2, 5, 12, 36, 68, 82, 60, 46, 38, 44, 55, 66, 70, 62, 74, 76, 50, 40, 28, 18, 12]
  }
];

// --- State Management ---
let members = [];
let selectedMemberId = null;
let currentFilter = "all";
let searchQuery = "";
let sortOrder = "severity"; // 'severity' | 'name'

// --- Sleek SVG Avatar Generator ---
// Prevents broken URL placeholders and creates high-fidelity minimalist graphics
function generateAvatarSvg(name, seed) {
  const colors = [
    { bg: "#ffccd5", face: "#c9184a" },
    { bg: "#d8f3dc", face: "#1b4332" },
    { bg: "#dbf2ff", face: "#0077b6" },
    { bg: "#fef3c7", face: "#d97706" },
    { bg: "#e8dbff", face: "#6f2dbd" },
    { bg: "#ffe5ec", face: "#ff85a1" }
  ];
  
  // Choose colors deterministically based on seed string
  let hash = 0;
  for (let i = 0; i < seed.length; i++) {
    hash = seed.charCodeAt(i) + ((hash << 5) - hash);
  }
  const colorIndex = Math.abs(hash) % colors.length;
  const theme = colors[colorIndex];
  
  // Minimalist initials
  const initials = name ? name.substring(0, 1) : "이";
  
  return `
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100%" height="100%">
      <rect width="100%" height="100%" fill="${theme.bg}" />
      <circle cx="50" cy="42" r="22" fill="${theme.face}" opacity="0.15" />
      <circle cx="50" cy="98" r="38" fill="${theme.face}" opacity="0.15" />
      <text x="50%" y="54%" dominant-baseline="middle" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="32" fill="${theme.face}">
        ${initials}
      </text>
    </svg>
  `;
}

// --- Local Storage Integration ---
function loadData() {
  const stored = localStorage.getItem("hangeorum_members");
  if (stored) {
    try {
      members = JSON.parse(stored);
      // Force inject Arduino test member if not present in localStorage
      if (!members.find(m => m.id === "#9999")) {
        const arduinoMember = DEFAULT_MEMBERS.find(m => m.id === "#9999");
        if (arduinoMember) members.unshift(arduinoMember);
      }
    } catch (e) {
      console.error("데이터 파싱 에러. 기본 모의 데이터로 초기화합니다.", e);
      members = DEFAULT_MEMBERS;
    }
  } else {
    members = DEFAULT_MEMBERS;
  }
  
  // Ensure batteryLevel and stepCount exist for new requirements
  members.forEach(m => {
    if (m.batteryLevel === undefined) m.batteryLevel = Math.floor(Math.random() * 30) + 70; // 70-100% initial
    if (m.stepCount === undefined) {
      m.stepCount = m.hourlyActivity ? m.hourlyActivity.reduce((a,b)=>a+b,0) : 0;
    }
  });
  saveData();
}

function saveData() {
  localStorage.setItem("hangeorum_members", JSON.stringify(members));
}

// --- Notification Toast System ---
function showToast(message, type = "success") {
  const container = document.getElementById("toast-container");
  
  const toast = document.createElement("div");
  toast.className = `toast ${type === "danger" ? "toast-danger" : "toast-success"}`;
  
  const icon = type === "danger" ? "warning" : "check_circle";
  
  toast.innerHTML = `
    <span class="material-symbols-outlined toast-icon">${icon}</span>
    <span>${message}</span>
  `;
  
  container.appendChild(toast);
  
  // Force reflow for animation
  toast.offsetHeight;
  toast.classList.add("active");
  
  // Automatic dismissal
  setTimeout(() => {
    toast.classList.remove("active");
    toast.addEventListener("transitionend", () => {
      toast.remove();
    });
  }, 4000);
}

// --- Dynamic Solid Color based on Status ---
function getSolidColorByStatus(status) {
  if (status === "danger") return "var(--color-danger)"; // Red
  if (status === "warning") return "var(--color-warning)"; // Yellow
  return "var(--color-success)"; // Green
}

// --- Render Dashboard Member Bento Grid ---
function renderGrid() {
  const grid = document.getElementById("bento-grid");
  grid.innerHTML = "";
  
  // 1. Filter
  let filtered = members.filter(m => {
    // Search filter
    const matchesSearch = searchQuery === "" || 
      m.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      m.id.toLowerCase().includes(searchQuery.toLowerCase());
      
    // Status filter
    const matchesStatus = currentFilter === "all" || m.status === currentFilter;
    
    return matchesSearch && matchesStatus;
  });
  
  // 2. Sort
  filtered.sort((a, b) => {
    if (sortOrder === "severity") {
      const severityMap = { danger: 3, warning: 2, success: 1 };
      return severityMap[b.status] - severityMap[a.status];
    } else {
      // Alphabetical sorting by name
      return a.name.localeCompare(b.name, "ko");
    }
  });
  
  if (filtered.length === 0) {
    grid.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 0; color: var(--color-secondary);">
        <span class="material-symbols-outlined" style="font-size: 48px; opacity: 0.5; margin-bottom: 12px; display: block;">person_off</span>
        검색 결과 또는 해당 상태를 가진 이용자가 존재하지 않습니다.
      </div>
    `;
    return;
  }
  
  filtered.forEach(m => {
    const card = document.createElement("div");
    card.className = "member-card";
    card.setAttribute("data-id", m.id);
    
    let statusIcon = "verified_user";
    let statusClass = "status-success";
    let statusLabel = "양호";
    let badgeClass = "bg-success";
    
    if (m.status === "warning") {
      statusIcon = "error";
      statusClass = "status-warning";
      statusLabel = "경고";
      badgeClass = "bg-warning";
    } else if (m.status === "danger") {
      statusIcon = "error";
      statusClass = "status-danger";
      statusLabel = "위험";
      badgeClass = "bg-danger";
    }
    
    const solidColor = getSolidColorByStatus(m.status);
    const avatarSvg = generateAvatarSvg(m.name, m.avatarSeed);
    
    // Determine battery class for color (red if <= 20)
    const batteryClass = m.batteryLevel <= 20 ? 'text-danger' : 'text-secondary';
    
    card.innerHTML = `
      <div class="member-card-header">
        <div class="member-card-title">
          <h3>${m.name}</h3>
          <p class="member-card-id">이용자 ID: ${m.id}</p>
        </div>
        <span class="material-symbols-outlined status-icon ${statusClass}">${statusIcon}</span>
      </div>
      <div class="progress-container">
        <div class="circular-progress" style="background-color: ${solidColor}">
        </div>
      </div>
      <div class="member-card-footer">
        <span class="battery-level ${batteryClass}" style="font-weight: 600; font-size: 13px;">🔋 배터리: ${m.batteryLevel}%</span>
        <span class="status-badge ${badgeClass}">${statusLabel}</span>
      </div>
    `;
    
    card.addEventListener("click", () => {
      openDetailView(m.id);
    });
    
    grid.appendChild(card);
  });
}

// --- Render SVG 24h Activity Graph ---
function drawActivityChart(member) {
  const svg = document.getElementById("activity-chart");
  svg.innerHTML = "";
  
  // Set heights/spacing dynamically
  const width = 800;
  const height = 200;
  const paddingLeft = 30;
  const paddingRight = 30;
  const paddingTop = 20;
  const paddingBottom = 20;
  
  const chartWidth = width - paddingLeft - paddingRight;
  const chartHeight = height - paddingTop - paddingBottom;
  
  const data = member.hourlyActivity || [10, 5, 2, 1, 3, 8, 25, 45, 60, 50, 42, 30, 35, 45, 55, 60, 58, 62, 70, 50, 35, 24, 15, 8];
  const barCount = data.length;
  // If we have 60 items (minutes), gap should be smaller
  const gap = barCount > 24 ? 2 : 12; 
  const groupWidth = chartWidth / barCount;
  
  // Create an empty average array if data length is different from 24
  const avgData = barCount === 24 ? 
    [12, 6, 3, 2, 4, 10, 20, 48, 65, 55, 40, 32, 38, 42, 50, 52, 48, 55, 60, 45, 30, 22, 14, 8] : 
    new Array(barCount).fill(0);
    
  const maxVal = 100; // Let's anchor the grid max at 100 frequency for consistent visual comparison
    
  // If average is 0, we can just use the full width for the current bar, or keep dual-bar design with 0 height
  const barWidth = (groupWidth - gap) / 2;
  
  // 1. Draw horizontal grid lines
  const gridLinesCount = 4;
  for (let i = 0; i <= gridLinesCount; i++) {
    const yVal = paddingTop + (chartHeight / gridLinesCount) * i;
    
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", paddingLeft);
    line.setAttribute("y1", yVal);
    line.setAttribute("x2", width - paddingRight);
    line.setAttribute("y2", yVal);
    line.setAttribute("stroke", "var(--color-surface-container-high)");
    line.setAttribute("stroke-width", "1");
    line.setAttribute("stroke-dasharray", "4,4");
    svg.appendChild(line);
  }
  
  // 2. Draw dual-bars for each of 24 hours
  for (let hour = 0; hour < barCount; hour++) {
    const xPos = paddingLeft + (hour * groupWidth) + (gap / 2);
    
    // Average Bar Height
    const avgVal = avgData[hour];
    const avgHeight = (avgVal / maxVal) * chartHeight;
    const avgY = paddingTop + chartHeight - avgHeight;
    
    // Draw Average Bar (Gray background)
    const avgRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    avgRect.setAttribute("x", xPos);
    avgRect.setAttribute("y", avgY);
    avgRect.setAttribute("width", barWidth);
    avgRect.setAttribute("height", avgHeight);
    avgRect.setAttribute("fill", "var(--color-surface-container-highest)");
    avgRect.setAttribute("rx", "2");
    avgRect.setAttribute("ry", "2");
    svg.appendChild(avgRect);
    
    // Current Bar Height
    const curVal = data[hour];
    const curHeight = (curVal / maxVal) * chartHeight;
    const curY = paddingTop + chartHeight - curHeight;
    
    // Draw Current Bar (Primary Red)
    const curRect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    curRect.setAttribute("x", xPos + barWidth + 2); // Shift slightly right
    curRect.setAttribute("y", curY);
    curRect.setAttribute("width", barWidth);
    curRect.setAttribute("height", curHeight);
    curRect.setAttribute("fill", "var(--color-primary)");
    curRect.setAttribute("rx", "2");
    curRect.setAttribute("ry", "2");
    curRect.setAttribute("class", "chart-bar-fill");
    
    // Set custom values for tooltips
    curRect.setAttribute("data-val", curVal);
    curRect.setAttribute("data-hour", hour);
    
    // Tooltip interaction
    curRect.addEventListener("mouseenter", (e) => {
      const tooltip = document.getElementById("chart-tooltip");
      const val = e.target.getAttribute("data-val");
      const hr = e.target.getAttribute("data-hour");
      
      const timeUnit = barCount === 60 ? "분" : "시";
      tooltip.innerText = `${hr}${timeUnit}: 현재 ${val}회 (평균 ${avgData[hr]}회)`;
      
      // Calculate tooltip position
      const rect = e.target.getBoundingClientRect();
      const parentRect = e.target.closest(".chart-container").getBoundingClientRect();
      const left = rect.left - parentRect.left + (rect.width / 2);
      const top = rect.top - parentRect.top - 8;
      
      tooltip.style.left = `${left}px`;
      tooltip.style.top = `${top}px`;
      tooltip.style.opacity = "1";
      tooltip.style.transform = "translate(-50%, -100%) scale(1)";
    });
    
    curRect.addEventListener("mouseleave", () => {
      const tooltip = document.getElementById("chart-tooltip");
      tooltip.style.opacity = "0";
      tooltip.style.transform = "translate(-50%, -100%) scale(0.9)";
    });
    
    svg.appendChild(curRect);
  }
}

// --- Transition to Member Detail View ---
function openDetailView(id) {
  selectedMemberId = id;
  const m = members.find(x => x.id === id);
  if (!m) return;
  
  // Smoothly Swap views
  const gridView = document.getElementById("grid-view");
  const detailView = document.getElementById("detail-view");
  
  gridView.style.opacity = "0";
  gridView.style.transform = "translateY(-10px)";
  
  setTimeout(() => {
    gridView.classList.remove("active");
    detailView.classList.add("active");
    // Trigger reflow to initialize entry transition
    detailView.offsetHeight;
    detailView.style.opacity = "1";
    detailView.style.transform = "translateY(0)";
  }, 200);
  
  // Bind profile details
  document.getElementById("breadcrumb-username").innerText = `${m.name} 상세 정보`;
  document.getElementById("detail-name").innerText = m.name;
  document.getElementById("detail-meta").innerText = `${m.age}세 · ${m.gender}`;
  document.getElementById("detail-address").innerText = m.address;
  document.getElementById("detail-phone").innerText = m.phone;
  
  // Avatar
  const avatarContainer = document.getElementById("detail-avatar").parentElement;
  avatarContainer.innerHTML = generateAvatarSvg(m.name, m.avatarSeed);
  avatarContainer.querySelector("svg").id = "detail-avatar";
  
  // Status banner binding
  const banner = document.getElementById("detail-status-banner");
  const bannerLabel = document.getElementById("detail-status-banner-label");
  const bannerBadge = document.getElementById("detail-status-badge");
  const bannerIcon = document.getElementById("detail-status-banner-icon");
  
  banner.className = "today-status-banner"; // Clear previous status
  
  if (m.status === "danger") {
    banner.classList.add("banner-danger");
    bannerLabel.innerText = "어제의 상태 : 위험";
    bannerBadge.innerText = "위험";
    bannerIcon.innerText = "warning";
  } else if (m.status === "warning") {
    banner.classList.add("banner-warning");
    bannerLabel.innerText = "어제의 상태 : 경고";
    bannerBadge.innerText = "경고";
    bannerIcon.innerText = "warning";
  } else {
    banner.classList.add("banner-success");
    bannerLabel.innerText = "어제의 상태 : 정상";
    bannerBadge.innerText = "양호";
    bannerIcon.innerText = "check_circle";
  }
  
  // Bind health notes list
  const notesContainer = document.getElementById("detail-health-notes");
  notesContainer.innerHTML = "";
  if (m.healthNotes && m.healthNotes.length > 0) {
    m.healthNotes.forEach(note => {
      const li = document.createElement("div");
      li.className = "health-notes-item";
      if (note.trim().startsWith("*")) {
        li.classList.add("italic");
      }
      li.innerText = note;
      notesContainer.appendChild(li);
    });
  } else {
    notesContainer.innerHTML = '<div style="font-size: 13px; color: var(--color-secondary); font-style: italic;">기록된 특이사항이 없습니다.</div>';
  }
  
  // Metrics calculation based on loaded history log list
  const successCount = m.history.filter(h => h.status === "정상").length;
  const warningCount = m.history.filter(h => h.status === "경고").length;
  const dangerCount = m.history.filter(h => h.status === "위험").length;
  
  // Dynamic metrics sync
  document.getElementById("stat-success-count").innerText = successCount;
  document.getElementById("stat-warning-count").innerText = warningCount;
  document.getElementById("stat-danger-count").innerText = dangerCount;
  
  // History table binding
  const tbody = document.getElementById("detail-history-tbody");
  tbody.innerHTML = "";
  if (m.history && m.history.length > 0) {
    m.history.forEach(h => {
      const row = document.createElement("tr");
      
      let badgeClass = "bg-success";
      if (h.status === "경고") badgeClass = "bg-warning";
      if (h.status === "위험") badgeClass = "bg-danger";
      
      row.innerHTML = `
        <td>${h.date}</td>
        <td style="text-align: right;"><span class="status-badge ${badgeClass}">${h.status}</span></td>
      `;
      tbody.appendChild(row);
    });
  } else {
    tbody.innerHTML = '<tr><td colspan="2" style="text-align: center; color: var(--color-secondary); padding: 20px 0;">최근 이용 기록이 없습니다.</td></tr>';
  }
  
  // Default initialize Smart Mat UI values on profile open
  updateLiveSmartMatUi({
    stepCount: m.progress * 8 || 120,
    leftPressure: m.status === 'danger' ? 36 : 50,
    rightPressure: m.status === 'danger' ? 64 : 50,
    balanceScore: m.status === 'danger' ? 72 : 100
  });

  // 서버에서 최신 hourly 집계 데이터를 가져와서 차트 렌더링
  // (localStorage의 오래된 값 대신 항상 서버의 실제 데이터를 사용)
  const encodedId = encodeURIComponent(m.id);
  fetch(`/api/sensor/hourly/${encodedId}`)
    .then(res => res.json())
    .then(result => {
      if (result.status === 'success' && Array.isArray(result.hourlyData)) {
        // 서버 데이터로 덮어쓰기
        const mIndex = members.findIndex(x => x.id === m.id);
        if (mIndex !== -1) {
          members[mIndex].hourlyActivity = result.hourlyData;
          saveData();
        }
        // 서버에서 받은 데이터로 차트 그리기
        drawActivityChart({ ...m, hourlyActivity: result.hourlyData });
        // 최신 센서값도 업데이트
        if (result.latestTelemetry) {
          updateLiveSmartMatUi(result.latestTelemetry);
        }
        console.log(`[Detail] 서버에서 최신 hourly 데이터 로드 완료: ${m.id}`);
      } else {
        // 서버 데이터가 없으면(새 이용자 등) 기존 데이터로 렌더링
        drawActivityChart(m);
      }
    })
    .catch(() => {
      // 서버 요청 실패 시 기존 데이터로 폴백
      drawActivityChart(m);
    });
}

// --- Transition Back to Member Grid View ---
function closeDetailView() {
  selectedMemberId = null;
  const gridView = document.getElementById("grid-view");
  const detailView = document.getElementById("detail-view");
  
  detailView.style.opacity = "0";
  detailView.style.transform = "translateY(10px)";
  
  setTimeout(() => {
    detailView.classList.remove("active");
    gridView.classList.add("active");
    // Trigger reflow to initiate entry transition
    gridView.offsetHeight;
    gridView.style.opacity = "1";
    gridView.style.transform = "translateY(0)";
    renderGrid();
  }, 200);
}

// --- Modal Helper Functions ---
function openModal(id) {
  const modal = document.getElementById(id);
  modal.classList.add("active");
}

function closeModal(id) {
  const modal = document.getElementById(id);
  modal.classList.remove("active");
}

// --- Initializing State & Page Actions ---
document.addEventListener("DOMContentLoaded", () => {
  // Load data from local storage
  loadData();
  
  // --- ADD ARDUINO TEST MEMBER ---
  if (!members.find(m => m.id === "#9999")) {
    members.unshift({
      id: "#9999",
      name: "아두이노 테스트",
      age: 65,
      gender: "공통",
      address: "아두이노 연구실",
      phone: "010-0000-0000",
      status: "success",
      progress: 0,
      lastUsed: "방금 전",
      avatarSeed: "arduino",
      healthNotes: [
        "아두이노 센서 실시간 연동 테스트용 계정",
        "* 센서 감지 시 차트가 즉각 갱신됩니다."
      ],
      stats: { success: 10, warning: 0, danger: 0 },
      history: [
        { date: new Date().toISOString().split("T")[0].replace(/-/g, "."), status: "정상" }
      ],
      hourlyActivity: Array.from({length: 24}, () => 0),
      batteryLevel: 100,
      stepCount: 0
    });
    saveData();
  }
  // -------------------------------

  // Initial bento grid render
  renderGrid();
  
  // Search bar listener
  const searchInput = document.getElementById("member-search");
  searchInput.addEventListener("input", (e) => {
    searchQuery = e.target.value;
    renderGrid();
  });
  
  // Filter tabs click listener
  const tabs = document.querySelectorAll(".filter-tab");
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentFilter = tab.getAttribute("data-filter");
      renderGrid();
    });
  });
  
  // Sort button toggle listener
  const sortBtn = document.getElementById("btn-sort");
  sortBtn.addEventListener("click", () => {
    if (sortOrder === "severity") {
      sortOrder = "name";
      sortBtn.innerHTML = `<span class="material-symbols-outlined">sort_by_alpha</span>이름순`;
      showToast("이용자 이름 가나다순으로 정렬되었습니다.");
    } else {
      sortOrder = "severity";
      sortBtn.innerHTML = `<span class="material-symbols-outlined">sort</span>위험도순`;
      showToast("이용자 위험 상태 심각도순으로 정렬되었습니다.");
    }
    renderGrid();
  });
  
  // Breadcrumb back click listener
  document.getElementById("breadcrumb-dash").addEventListener("click", closeDetailView);
  
  // Sidebar tab click simulations
  const sidebarItems = document.querySelectorAll(".sidebar-nav .nav-item, .sidebar-footer .nav-item");
  sidebarItems.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      
      // Sidebar visual active switch
      if (item.parentElement.classList.contains("sidebar-nav")) {
        document.querySelectorAll(".sidebar-nav .nav-item").forEach(t => t.classList.remove("active"));
        item.classList.add("active");
      }
      
      const tabId = item.id;
      if (tabId === "nav-dashboard") {
        closeDetailView();
      } else if (tabId === "nav-logout") {
        showToast("콘솔 로그아웃이 완료되었습니다. (시뮬레이션)", "success");
      } else {
        showToast(`"${item.innerText.trim()}" 메뉴는 데모 모드에서 비활성화되어 있습니다.`, "warning");
      }
    });
  });
  
  // Top nav action notifications
  document.getElementById("btn-notifications").addEventListener("click", () => {
    const dangerCount = members.filter(m => m.status === "danger").length;
    showToast(`실시간 긴급 경보: 현재 위험 상태 노드가 ${dangerCount}개 발견되었습니다. 즉시 확인이 필요합니다.`, "danger");
  });
  
  document.getElementById("btn-system-settings").addEventListener("click", () => {
    showToast("시스템 전역 환경 설정을 엽니다. (시뮬레이션)");
  });
  
  // Open Register Member Modal
  document.getElementById("btn-open-register").addEventListener("click", () => {
    document.getElementById("form-register").reset();
    openModal("modal-register");
  });
  
  // Close Register Modal triggers
  document.getElementById("btn-close-register").addEventListener("click", () => closeModal("modal-register"));
  document.getElementById("btn-cancel-register").addEventListener("click", () => closeModal("modal-register"));
  
  // Add Member Form Submit
  const formRegister = document.getElementById("form-register");
  formRegister.addEventListener("submit", (e) => {
    e.preventDefault();
    
    const name = document.getElementById("reg-name").value;
    const age = parseInt(document.getElementById("reg-age").value);
    const gender = document.getElementById("reg-gender").value;
    const phone = document.getElementById("reg-phone").value;
    const address = document.getElementById("reg-address").value;
    const status = document.getElementById("reg-status").value;
    const progress = parseInt(document.getElementById("reg-progress").value);
    
    // Auto-generate unit ID
    const newId = `#${Math.floor(7737 + Math.random() * 2000)}`;
    const seed = name + newId;
    
    const newMember = {
      id: newId,
      name: name,
      age: age,
      gender: gender,
      phone: phone,
      address: address,
      status: status,
      progress: progress,
      lastUsed: "방금 전",
      avatarSeed: seed,
      healthNotes: [
        "기초 헬스케어 동의 상태",
        "* 초기 등록 검사 필요"
      ],
      stats: { success: 1, warning: 0, danger: 0 },
      history: [
        { date: new Date().toISOString().split("T")[0].replace(/-/g, "."), status: status === "success" ? "정상" : (status === "warning" ? "경고" : "위험") }
      ],
      hourlyActivity: Array.from({length: 24}, () => Math.floor(Math.random() * 50) + 10)
    };
    
    members.push(newMember);
    saveData();
    closeModal("modal-register");
    renderGrid();
    showToast(`신규 관리 대상자 ${name} (${newId}) 님이 안전하게 등록되었습니다!`);
  });
  
  // Open Add History Log Modal
  const btnAddHistory = document.getElementById("btn-add-history");
  const btnWriteLog = document.getElementById("btn-write-log");
  
  const setupLogModal = () => {
    const today = new Date().toISOString().split("T")[0];
    document.getElementById("log-date").value = today;
    document.getElementById("form-log").reset();
    document.getElementById("log-date").value = today;
    openModal("modal-log");
  };
  
  btnAddHistory.addEventListener("click", setupLogModal);
  btnWriteLog.addEventListener("click", setupLogModal);
  
  // Close History Modal triggers
  document.getElementById("btn-close-log").addEventListener("click", () => closeModal("modal-log"));
  document.getElementById("btn-cancel-log").addEventListener("click", () => closeModal("modal-log"));
  
  // Add History Log Form Submit
  const formLog = document.getElementById("form-log");
  formLog.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!selectedMemberId) return;
    
    const inputDate = document.getElementById("log-date").value;
    const formattedDate = inputDate.replace(/-/g, ".");
    const inputStatus = document.getElementById("log-status").value;
    
    const mIndex = members.findIndex(x => x.id === selectedMemberId);
    if (mIndex === -1) return;
    
    // Add to member history list
    members[mIndex].history.unshift({
      date: formattedDate,
      status: inputStatus
    });
    
    // Re-calculate statistics counts
    const successCount = members[mIndex].history.filter(h => h.status === "정상").length;
    const warningCount = members[mIndex].history.filter(h => h.status === "경고").length;
    const dangerCount = members[mIndex].history.filter(h => h.status === "위험").length;
    
    members[mIndex].stats = { success: successCount, warning: warningCount, danger: dangerCount };
    
    // Synchronize current active today status if date matches current date
    const todayStr = new Date().toISOString().split("T")[0].replace(/-/g, ".");
    if (formattedDate === todayStr) {
      members[mIndex].status = inputStatus === "정상" ? "success" : (inputStatus === "경고" ? "warning" : "danger");
      
      // Update Detail UI Today banner instantly
      const banner = document.getElementById("detail-status-banner");
      const bannerLabel = document.getElementById("detail-status-banner-label");
      const bannerBadge = document.getElementById("detail-status-badge");
      const bannerIcon = document.getElementById("detail-status-banner-icon");
      
      banner.className = "today-status-banner";
      
      if (inputStatus === "위험") {
        banner.classList.add("banner-danger");
        bannerLabel.innerText = "어제의 상태 : 위험";
        bannerBadge.innerText = "위험";
        bannerIcon.innerText = "warning";
      } else if (inputStatus === "경고") {
        banner.classList.add("banner-warning");
        bannerLabel.innerText = "어제의 상태 : 경고";
        bannerBadge.innerText = "경고";
        bannerIcon.innerText = "warning";
      } else {
        banner.classList.add("banner-success");
        bannerLabel.innerText = "어제의 상태 : 정상";
        bannerBadge.innerText = "양호";
        bannerIcon.innerText = "check_circle";
      }
    }
    
    saveData();
    closeModal("modal-log");
    
    // Refresh Detail active view
    openDetailView(selectedMemberId);
    showToast(`${members[mIndex].name} 님의 ${formattedDate} 일자 상태 기록이 성공적으로 반영되었습니다.`);
  });
  
  // Edit Health Remarks Modal opening
  const btnEditHealth = document.getElementById("btn-edit-health");
  btnEditHealth.addEventListener("click", () => {
    if (!selectedMemberId) return;
    const m = members.find(x => x.id === selectedMemberId);
    if (!m) return;
    
    document.getElementById("health-notes-input").value = m.healthNotes.join("\n");
    openModal("modal-health");
  });
  
  document.getElementById("btn-close-health").addEventListener("click", () => closeModal("modal-health"));
  document.getElementById("btn-cancel-health").addEventListener("click", () => closeModal("modal-health"));
  
  // Health Notes Form Submit
  const formHealth = document.getElementById("form-health");
  formHealth.addEventListener("submit", (e) => {
    e.preventDefault();
    if (!selectedMemberId) return;
    
    const inputContent = document.getElementById("health-notes-input").value;
    // Map lines, filter out completely empty entries
    const lines = inputContent.split("\n").map(l => l.trim()).filter(l => l.length > 0);
    
    const mIndex = members.findIndex(x => x.id === selectedMemberId);
    if (mIndex === -1) return;
    
    members[mIndex].healthNotes = lines;
    saveData();
    closeModal("modal-health");
    
    // Refresh Detail Active View
    openDetailView(selectedMemberId);
    showToast(`${members[mIndex].name} 님의 건강 참고사항이 성공적으로 저장되었습니다.`);
  });
  
  // Guardian Call Simulation Action
  document.getElementById("btn-call-guardian").addEventListener("click", () => {
    if (!selectedMemberId) return;
    const m = members.find(x => x.id === selectedMemberId);
    if (!m) return;
    
    showToast(`[통화 시뮬레이션] ${m.name} 보호자 (${m.phone})에게 자동 비상 전화를 발신 중입니다...`, "danger");
    
    // Simple visual ringing indicator inside alert logs
    setTimeout(() => {
      showToast(`[연결 성공] ${m.name} 님 보호자와 무선 음성 통화 상태가 수립되었습니다.`, "success");
    }, 2500);
  });

  // Inject Google Sheets & AI Sync Status Badge dynamically in the Header
  const brandSection = document.querySelector('.brand-section');
  if (brandSection) {
    const indicator = document.createElement('span');
    indicator.id = 'sync-status-indicator';
    indicator.className = 'status-badge bg-success';
    indicator.style.marginLeft = '12px';
    indicator.style.fontSize = '10px';
    indicator.style.padding = '2px 10px';
    indicator.style.cursor = 'pointer';
    indicator.innerText = '구글 시트 연동 중...';
    indicator.title = '클릭하여 원격 구글 시트 연동 주소를 설정합니다.';
    
    // Manual Apps Script Web App URL configure popup trigger on badge click!
    indicator.addEventListener('click', () => {
      const currentUrl = localStorage.getItem('google_sheet_webapp_url') || '';
      const inputUrl = prompt('구글 앱스 스크립트 웹앱 (Google Apps Script Web App) URL을 입력하세요:', currentUrl);
      if (inputUrl !== null) {
        localStorage.setItem('google_sheet_webapp_url', inputUrl.trim());
        updateSheetUrlOnServer(inputUrl.trim());
      }
    });
    
    brandSection.appendChild(indicator);
  }

  // Helper to post WebApp URL to backend
  async function updateSheetUrlOnServer(url) {
    try {
      const res = await fetch('/api/config/sheet-url', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ url })
      });
      const data = await res.json();
      if (data.status === 'success') {
        const indicator = document.getElementById('sync-status-indicator');
        if (indicator) {
          if (data.isGoogleSheetActive) {
            indicator.className = 'status-badge bg-success';
            indicator.innerText = '구글 시트 연동 활성';
            showToast('구글 시트 연동 드라이버가 백엔드에 성공적으로 바인딩되었습니다!');
          } else {
            indicator.className = 'status-badge bg-warning';
            indicator.innerText = '로컬 백업 모드';
            showToast('연동 URL이 지워져 로컬 백업 모드로 전환되었습니다.');
          }
        }
      }
    } catch (e) {
      showToast('구글 시트 백엔드 설정 전송 실패', 'danger');
    }
  }

  // Establish WebSocket Connection with the Backend
  function connectWebSocket() {
    const protocol = window.location.protocol === 'https:' ? 'wss:' : 'ws:';
    const wsUrl = `${protocol}//${window.location.host}`;
    
    console.log(`[WebSocket] Connecting to backend at ${wsUrl}`);
    const socket = new WebSocket(wsUrl);
    
    socket.onopen = () => {
      console.log('[WebSocket] Connection established with backend.');
      showToast('백엔드 데이터 파이프라인 웹소켓 연동 성공!', 'success');
      
      // Auto-send cached Apps Script URL to backend server on reconnect
      const savedUrl = localStorage.getItem('google_sheet_webapp_url');
      if (savedUrl) {
        updateSheetUrlOnServer(savedUrl);
      } else {
        updateSheetUrlOnServer('');
      }
    };
    
    socket.onmessage = (event) => {
      try {
        const payload = JSON.parse(event.data);
        console.log('[WebSocket] Received push payload:', payload);
        
        const indicator = document.getElementById('sync-status-indicator');
        
        if (payload.type === 'INIT_STATE' || payload.type === 'AI_INTERVAL_CHANGED') {
          // Update status indicator header badge
          if (indicator) {
            const minutes = (payload.intervalMs / 1000 / 60).toFixed(1);
            if (payload.isGoogleSheetActive) {
              indicator.className = 'status-badge bg-success';
              indicator.innerText = `구글 시트 (${payload.mode || 'STANDARD'}) / ${minutes}분 주기`;
            } else {
              indicator.className = 'status-badge bg-warning';
              indicator.innerText = `로컬 백업 (${payload.mode || 'LOCAL'}) / ${minutes}분 주기`;
            }
          }
          
          if (payload.type === 'AI_INTERVAL_CHANGED') {
            showToast(`[AI 조율 인터벌] 집계 주기가 ${(payload.intervalMs / 1000).toFixed(0)}초로 조율되었습니다. (${payload.mode})`);
          }
        }
        
        if (payload.type === 'CHART_SYNC') {
          const { memberId, data, latestTelemetry } = payload;
          console.log(`[WebSocket] CHART_SYNC received for ${memberId}:`, data);
          
          const mIndex = members.findIndex(m => m.id === memberId);
          if (mIndex !== -1 && Array.isArray(data)) {
            // 서버에서 집계된 실제 데이터로 hourlyActivity 덮어쓰기
            members[mIndex].hourlyActivity = data;
            saveData();

            // 현재 상세 페이지가 열려 있는 멤버라면 즉시 차트 재렌더링
            if (selectedMemberId === memberId) {
              console.log(`[WebSocket] Redrawing chart for ${members[mIndex].name}`);
              drawActivityChart(members[mIndex]);

              if (latestTelemetry) {
                updateLiveSmartMatUi(latestTelemetry);
              }

              // 차트 카드 테두리 플래시
              const chartCard = document.getElementById('activity-chart')?.closest('.detail-card');
              if (chartCard) {
                chartCard.style.borderColor = 'var(--color-primary)';
                setTimeout(() => { chartCard.style.borderColor = 'var(--color-border)'; }, 600);
              }

              showToast(`${members[mIndex].name} 님의 차트가 갱신되었습니다!`, 'success');
            }
          }
        }
        
        // LIVE_SENSOR_TICK: 게이지(걸음수, 압력바) 즉시 업데이트만 처리
        // 차트 업데이트는 서버가 즉시 보내는 CHART_SYNC가 담당합니다.
        if (payload.type === 'LIVE_SENSOR_TICK') {
          const { memberId, batteryLevel } = payload;
          
          const memberIndex = members.findIndex(m => m.id === memberId);
          if (memberIndex !== -1) {
            if (batteryLevel !== undefined) members[memberIndex].batteryLevel = batteryLevel;
            saveData();
            renderGrid();

            // 상세 페이지가 열려 있으면 게이지 UI 업데이트
            if (selectedMemberId === memberId) {
              updateLiveSmartMatUi(payload);
            }
          }
        }
      } catch (err) {
        console.error('[WebSocket] Failed processing incoming message:', err);
      }
    };
    
    socket.onclose = () => {
      console.warn('[WebSocket] Connection closed. Attempting reconnect in 5s...');
      const indicator = document.getElementById('sync-status-indicator');
      if (indicator) {
        indicator.className = 'status-badge bg-danger';
        indicator.innerText = '백엔드 연결 종료';
      }
      setTimeout(connectWebSocket, 5000);
    };
    
    socket.onerror = (err) => {
      console.error('[WebSocket] Socket error observed:', err);
    };
  }

  // Helper to dynamically update Smart Floor Mat Live Telemetry widgets
  function updateLiveSmartMatUi(telemetry) {
    const stepsEl = document.getElementById("detail-mat-steps");
    const balanceEl = document.getElementById("detail-mat-balance");
    const leftLabelEl = document.getElementById("detail-mat-left-label");
    const rightLabelEl = document.getElementById("detail-mat-right-label");
    const leftBarEl = document.getElementById("detail-mat-left-bar");
    const rightBarEl = document.getElementById("detail-mat-right-bar");
    const stabilityEl = document.getElementById("detail-mat-stability");
    
    if (stepsEl) stepsEl.innerText = `${telemetry.stepCount} 걸음`;
    if (balanceEl) {
      balanceEl.innerText = `${telemetry.balanceScore} 점`;
      if (telemetry.balanceScore >= 90) {
        balanceEl.style.color = "var(--color-success-text)";
      } else if (telemetry.balanceScore >= 80) {
        balanceEl.style.color = "var(--color-warning-text)";
      } else {
        balanceEl.style.color = "var(--color-primary)";
      }
    }
    
    if (leftLabelEl) leftLabelEl.innerText = `왼발 (L): ${telemetry.leftPressure}%`;
    if (rightLabelEl) rightLabelEl.innerText = `오른발 (R): ${telemetry.rightPressure}%`;
    
    if (leftBarEl) leftBarEl.style.width = `${telemetry.leftPressure}%`;
    if (rightBarEl) rightBarEl.style.width = `${telemetry.rightPressure}%`;
    
    if (stabilityEl) {
      if (telemetry.balanceScore >= 90) {
        stabilityEl.innerText = "신체 균형 상태: 매우 대칭적";
        stabilityEl.style.color = "var(--color-success-text)";
        stabilityEl.style.backgroundColor = "var(--color-success-bg)";
      } else if (telemetry.balanceScore >= 80) {
        stabilityEl.innerText = "신체 균형 상태: 약한 비대칭";
        stabilityEl.style.color = "var(--color-warning-text)";
        stabilityEl.style.backgroundColor = "var(--color-warning-bg)";
      } else {
        stabilityEl.innerText = "신체 균형 상태: 위험한 불균형";
        stabilityEl.style.color = "var(--color-danger-text)";
        stabilityEl.style.backgroundColor = "var(--color-danger-bg)";
      }
    }
  }

  // Boot WebSocket
  connectWebSocket();
});

