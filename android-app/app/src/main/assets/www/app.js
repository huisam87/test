const BASELINE = {
  android: "Android 14",
  kakao: "카카오톡 10.6.5",
};

const CATEGORY_DATA = [
  {
    id: "photo-send",
    title: "사진 보내기",
    subtitle: "카카오톡 10.6.5 기준 사진 전송",
    lessons: [
      {
        id: "photo-send-single",
        title: "사진 1장 보내기",
        image: "assets/mock-screens/photo-send-single.png",
        steps: [
          { title: "채팅방 열기", text: "카카오톡에서 사진을 보낼 채팅방을 열어요.", hint: "대화 상대를 먼저 확인해요." },
          { title: "하단 + 버튼 누르기", text: "채팅 입력창 왼쪽의 + 버튼을 눌러요.", hint: "입력창 바로 왼쪽 버튼이에요." },
          { title: "사진 메뉴 누르기", text: "나온 메뉴에서 사진을 눌러요.", hint: "카메라가 아니라 사진 메뉴를 눌러요." },
          { title: "사진 1장 선택", text: "보낼 사진 1장을 눌러 체크해요.", hint: "체크 숫자 1이 보이면 맞아요." },
          { title: "전송 버튼 누르기", text: "우측 하단 전송(종이비행기) 버튼을 눌러요.", hint: "전송 버튼은 노란색 계열로 보여요." },
          { title: "전송 완료 확인", text: "채팅창에 사진이 올라왔는지 확인해요.", hint: "사진 말풍선이 보이면 완료예요." },
        ],
      },
      {
        id: "photo-send-multi",
        title: "사진 여러장 보내기",
        image: "assets/mock-screens/photo-send-multi.png",
        steps: [
          { title: "채팅방 열기", text: "사진을 보낼 채팅방을 열어요.", hint: "와이파이에서 더 안정적이에요." },
          { title: "하단 + 버튼 누르기", text: "입력창 왼쪽 + 버튼을 눌러요.", hint: "한 번만 눌러 메뉴를 열어요." },
          { title: "사진 메뉴 누르기", text: "메뉴에서 사진을 눌러 선택 화면으로 가요.", hint: "최근 사진 목록이 뜨면 정상이에요." },
          { title: "여러 장 선택", text: "보낼 사진을 2장 이상 눌러 선택해요.", hint: "사진 우측 위에 숫자가 붙어요." },
          { title: "선택 개수 확인", text: "상단의 선택 개수가 원하는 수인지 확인해요.", hint: "실수한 사진은 다시 눌러 해제해요." },
          { title: "전송 버튼 누르기", text: "우측 하단 전송 버튼을 눌러요.", hint: "전송 후 잠깐 기다려요." },
          { title: "전송 완료 확인", text: "여러 장이 채팅창에 모두 올라왔는지 확인해요.", hint: "빠진 사진이 없으면 완료예요." },
        ],
      },
    ],
  },
  {
    id: "photo-receive",
    title: "사진 받기",
    subtitle: "카카오톡 10.6.5 기준 사진 저장",
    lessons: [
      {
        id: "photo-receive-single",
        title: "사진 1장 받기",
        image: "assets/mock-screens/photo-receive-single.png",
        steps: [
          { title: "채팅방 열기", text: "사진이 온 채팅방을 열어요.", hint: "새 메시지 뱃지를 먼저 확인해요." },
          { title: "사진 크게 보기", text: "받은 사진을 눌러 크게 열어요.", hint: "원본 보기 화면으로 이동해요." },
          { title: "더보기(⋮) 누르기", text: "오른쪽 위 더보기(⋮)를 눌러요.", hint: "화면 상단 아이콘을 확인해요." },
          { title: "저장하기 누르기", text: "메뉴에서 저장하기를 눌러요.", hint: "저장 완료 문구를 확인해요." },
          { title: "갤러리 확인", text: "갤러리 앱에서 저장된 사진을 확인해요.", hint: "최근 항목에서 가장 먼저 보여요." },
        ],
      },
      {
        id: "photo-receive-multi",
        title: "사진 여러장 받기",
        image: "assets/mock-screens/photo-receive-multi.png",
        steps: [
          { title: "사진 묶음 열기", text: "여러 장이 온 채팅방에서 사진 묶음을 열어요.", hint: "묶음 썸네일을 눌러요." },
          { title: "사진 보기 화면 이동", text: "사진 보기 화면으로 들어가요.", hint: "좌우로 넘기며 장수를 확인해요." },
          { title: "더보기(⋮) 누르기", text: "오른쪽 위 더보기(⋮) 메뉴를 눌러요.", hint: "메뉴가 안 보이면 한 번 더 탭해요." },
          { title: "전체 저장 누르기", text: "메뉴에서 전체 저장을 눌러요.", hint: "기기에 따라 여러 장 저장으로 보일 수 있어요." },
          { title: "갤러리 확인", text: "갤러리에서 사진이 모두 저장됐는지 확인해요.", hint: "연속으로 보이면 성공이에요." },
        ],
      },
    ],
  },
  {
    id: "video-send",
    title: "동영상 보내기",
    subtitle: "카카오톡 10.6.5 기준 동영상 전송",
    lessons: [
      {
        id: "video-send-single",
        title: "동영상 1개 보내기",
        image: "assets/mock-screens/video-send-single.png",
        steps: [
          { title: "채팅방 열기", text: "동영상을 보낼 채팅방을 열어요.", hint: "받는 사람을 확인해요." },
          { title: "하단 + 버튼 누르기", text: "입력창 왼쪽 + 버튼을 눌러요.", hint: "메뉴가 뜰 때까지 잠깐 기다려요." },
          { title: "사진 메뉴 누르기", text: "메뉴에서 사진을 눌러요.", hint: "동영상도 같은 화면에서 선택해요." },
          { title: "동영상 1개 선택", text: "재생 아이콘이 있는 동영상 1개를 선택해요.", hint: "체크 숫자 1인지 확인해요." },
          { title: "전송 버튼 누르기", text: "우측 하단 전송 버튼을 눌러요.", hint: "용량이 크면 시간이 더 걸려요." },
          { title: "전송 완료 확인", text: "채팅창에서 동영상 말풍선을 확인해요.", hint: "재생 아이콘이 보이면 완료예요." },
        ],
      },
      {
        id: "video-send-multi",
        title: "동영상 여러개 보내기",
        image: "assets/mock-screens/video-send-multi.png",
        steps: [
          { title: "채팅방 열기", text: "동영상을 보낼 채팅방을 열어요.", hint: "가능하면 와이파이를 사용해요." },
          { title: "하단 + 버튼 누르기", text: "입력창 왼쪽 + 버튼을 눌러요.", hint: "같은 메뉴를 사용해요." },
          { title: "사진 메뉴 누르기", text: "메뉴에서 사진을 눌러 선택 화면으로 가요.", hint: "동영상 썸네일을 찾으세요." },
          { title: "동영상 여러개 선택", text: "동영상 2개 이상을 눌러 선택해요.", hint: "선택 숫자가 순서대로 붙어요." },
          { title: "선택 개수 확인", text: "상단 선택 개수가 맞는지 확인해요.", hint: "필요 없는 항목은 다시 탭해 해제해요." },
          { title: "전송 버튼 누르기", text: "우측 하단 전송 버튼을 눌러요.", hint: "전송 중에는 앱을 닫지 않아요." },
          { title: "전송 완료 확인", text: "동영상 여러 개가 모두 전송됐는지 확인해요.", hint: "모든 말풍선이 보이면 완료예요." },
        ],
      },
    ],
  },
  {
    id: "video-receive",
    title: "동영상 받기",
    subtitle: "카카오톡 10.6.5 기준 동영상 저장",
    lessons: [
      {
        id: "video-receive-single",
        title: "동영상 1개 받기",
        image: "assets/mock-screens/video-receive-single.png",
        steps: [
          { title: "채팅방 열기", text: "동영상이 온 채팅방을 열어요.", hint: "새 메시지 표시를 확인해요." },
          { title: "동영상 재생 화면 열기", text: "동영상을 눌러 재생 화면을 열어요.", hint: "재생 버튼 아이콘을 눌러요." },
          { title: "더보기(⋮) 누르기", text: "오른쪽 위 더보기(⋮)를 눌러요.", hint: "메뉴 아이콘 위치를 기억해요." },
          { title: "저장하기 누르기", text: "메뉴에서 저장하기를 눌러요.", hint: "저장 완료까지 잠깐 기다려요." },
          { title: "갤러리 확인", text: "갤러리에서 동영상이 저장됐는지 확인해요.", hint: "최근 항목에서 바로 확인돼요." },
        ],
      },
      {
        id: "video-receive-multi",
        title: "동영상 여러개 받기",
        image: "assets/mock-screens/video-receive-multi.png",
        steps: [
          { title: "여러 동영상 메시지 열기", text: "동영상이 여러 개 온 채팅방을 열어요.", hint: "연속 말풍선을 확인해요." },
          { title: "동영상 보기 화면 이동", text: "첫 번째 동영상을 눌러 보기 화면으로 들어가요.", hint: "좌우 넘기기로 다음 영상도 봐요." },
          { title: "더보기(⋮) 누르기", text: "오른쪽 위 더보기(⋮)를 눌러요.", hint: "메뉴가 안 뜨면 화면을 한 번 탭해요." },
          { title: "전체 저장 누르기", text: "메뉴에서 전체 저장을 눌러요.", hint: "용량이 크면 시간이 걸릴 수 있어요." },
          { title: "갤러리 확인", text: "갤러리에서 여러 동영상이 모두 저장됐는지 확인해요.", hint: "최신순으로 확인하면 빨라요." },
        ],
      },
    ],
  },
];

const app = document.getElementById("app");

const state = {
  view: "home",
  categoryId: null,
  lessonId: null,
  stepIndex: 0,
};

function saveProgress() {
  localStorage.setItem("kakao-practice-progress", JSON.stringify({
    categoryId: state.categoryId,
    lessonId: state.lessonId,
    stepIndex: state.stepIndex,
  }));
}

function loadProgress() {
  try {
    const raw = localStorage.getItem("kakao-practice-progress");
    if (!raw) return null;
    return JSON.parse(raw);
  } catch {
    return null;
  }
}

function markCompleted(lessonId) {
  const raw = localStorage.getItem("kakao-practice-completed");
  const map = raw ? JSON.parse(raw) : {};
  map[lessonId] = new Date().toISOString();
  localStorage.setItem("kakao-practice-completed", JSON.stringify(map));
}

function getCompletedMap() {
  const raw = localStorage.getItem("kakao-practice-completed");
  return raw ? JSON.parse(raw) : {};
}

function getCategoryById(id) {
  return CATEGORY_DATA.find((item) => item.id === id);
}

function getLessonById(categoryId, lessonId) {
  const category = getCategoryById(categoryId);
  if (!category) return null;
  return category.lessons.find((item) => item.id === lessonId) || null;
}

function speak(text) {
  if (!("speechSynthesis" in window)) return;
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = "ko-KR";
  utterance.rate = 0.95;
  speechSynthesis.cancel();
  speechSynthesis.speak(utterance);
}

function renderHome() {
  const doneMap = getCompletedMap();
  const doneCount = Object.keys(doneMap).length;
  const total = CATEGORY_DATA.reduce((sum, c) => sum + c.lessons.length, 0);

  app.innerHTML = `
    <h1 class="screen-title">카톡 연습하기</h1>
    <p class="screen-subtitle">원하는 항목을 누르면 바로 연습이 시작돼요.</p>
    <section class="card">
      <span class="chip">오프라인 전용</span>
      <span class="chip">로그인 없음</span>
      <span class="chip">기준 ${BASELINE.android}</span>
      <span class="chip">기준 ${BASELINE.kakao}</span>
      <span class="chip">연습 ${doneCount}/${total} 완료</span>
    </section>
    <section class="menu-grid">
      ${CATEGORY_DATA.map((category) => `
        <button class="card-btn btn-main" data-action="open-category" data-id="${category.id}">
          ${category.title}
          <div style="font-size:16px;font-weight:500;margin-top:4px;color:#4e4b00;">${category.subtitle}</div>
        </button>
      `).join("")}
    </section>
    <section class="card">
      <p class="empty-note">실제 카톡을 자동 조작하지 않고, ${BASELINE.android} / ${BASELINE.kakao} 기준 순서로 연습합니다.</p>
    </section>
  `;
}

function renderCategory() {
  const category = getCategoryById(state.categoryId);
  if (!category) {
    state.view = "home";
    render();
    return;
  }
  const doneMap = getCompletedMap();

  app.innerHTML = `
    <button class="btn btn-soft" data-action="go-home">홈으로</button>
    <h1 class="screen-title">${category.title}</h1>
    <p class="screen-subtitle">${category.subtitle}</p>
    <section class="card">
      <span class="chip">${BASELINE.android}</span>
      <span class="chip">${BASELINE.kakao}</span>
    </section>
    <section class="menu-grid">
      ${category.lessons.map((lesson) => {
        const isDone = Boolean(doneMap[lesson.id]);
        return `
          <button class="card-btn ${isDone ? "btn-accent" : "btn-main"}"
            data-action="start-lesson" data-category="${category.id}" data-lesson="${lesson.id}">
            ${lesson.title}
            <div style="font-size:16px;font-weight:500;margin-top:4px;color:${isDone ? "#dfe6ff" : "#4e4b00"};">
              ${isDone ? "완료한 연습" : "처음 연습"}
            </div>
          </button>
        `;
      }).join("")}
    </section>
  `;
}

function renderPractice() {
  const lesson = getLessonById(state.categoryId, state.lessonId);
  if (!lesson) {
    state.view = "home";
    render();
    return;
  }
  const step = lesson.steps[state.stepIndex];
  const total = lesson.steps.length;
  const progress = ((state.stepIndex + 1) / total) * 100;

  app.innerHTML = `
    <button class="btn btn-soft" data-action="back-category">연습 목록</button>
    <h1 class="screen-title">${lesson.title}</h1>
    <p class="screen-subtitle" style="margin-bottom:8px;">기준: ${BASELINE.android} / ${BASELINE.kakao}</p>
    <div class="progress-wrap">
      <div class="progress-text">진행 ${state.stepIndex + 1}/${total}</div>
      <div class="progress-track"><div class="progress-fill" style="width:${progress}%;"></div></div>
    </div>
    <section class="card">
      <h2 style="font-size:28px;margin:0 0 10px;">${step.title}</h2>
      <div class="mock-phone">
        <div class="mock-header">카카오톡 예시 화면</div>
        <img class="mock-image" src="${lesson.image}" alt="${lesson.title} 가상 예시 이미지" />
        <div class="mock-bubble">${step.text}</div>
      </div>
      <p class="hint">도움말: ${step.hint}</p>
      <div class="mini-row">
        <button class="mini-btn" data-action="speak-step">다시 보기</button>
        <button class="mini-btn" data-action="restart-lesson">처음부터</button>
        <button class="mini-btn" data-action="back-step">이전</button>
      </div>
      <div class="btn-row">
        <button class="btn ${state.stepIndex === 0 ? "btn-soft" : "btn-main"}" data-action="back-step">이전</button>
        <button class="btn btn-accent" data-action="next-step">${state.stepIndex === total - 1 ? "완료" : "다음"}</button>
      </div>
    </section>
  `;
}

function renderComplete() {
  const category = getCategoryById(state.categoryId);
  const lesson = getLessonById(state.categoryId, state.lessonId);
  if (!category || !lesson) {
    state.view = "home";
    render();
    return;
  }

  app.innerHTML = `
    <h1 class="done-title">연습 완료</h1>
    <section class="card done">
      <h2 style="font-size:30px;margin:0 0 10px;">${lesson.title}</h2>
      <p style="font-size:19px;line-height:1.5;margin:0;">천천히 끝까지 잘하셨어요. 같은 항목을 다시 눌러 반복 연습할 수 있어요.</p>
      <div class="btn-row">
        <button class="btn btn-main" data-action="retry-lesson">같은 연습 다시하기</button>
        <button class="btn btn-accent" data-action="back-category">다른 연습 고르기</button>
      </div>
      <button class="btn btn-soft" data-action="go-home">홈으로</button>
    </section>
    <section class="card">
      <span class="chip">${category.title}</span>
      <span class="chip">오프라인 저장 완료</span>
    </section>
  `;
}

function render() {
  if (state.view === "home") renderHome();
  if (state.view === "category") renderCategory();
  if (state.view === "practice") renderPractice();
  if (state.view === "complete") renderComplete();
}

function startLesson(categoryId, lessonId) {
  state.categoryId = categoryId;
  state.lessonId = lessonId;
  state.stepIndex = 0;
  state.view = "practice";
  saveProgress();
  render();
}

app.addEventListener("click", (event) => {
  const target = event.target.closest("button");
  if (!target) return;

  const action = target.dataset.action;
  if (!action) return;

  if (action === "open-category") {
    state.categoryId = target.dataset.id;
    state.lessonId = null;
    state.stepIndex = 0;
    state.view = "category";
    saveProgress();
    render();
    return;
  }

  if (action === "go-home") {
    state.view = "home";
    state.lessonId = null;
    state.stepIndex = 0;
    saveProgress();
    render();
    return;
  }

  if (action === "start-lesson") {
    startLesson(target.dataset.category, target.dataset.lesson);
    speak("연습을 시작합니다.");
    return;
  }

  if (action === "back-category") {
    state.view = "category";
    state.lessonId = null;
    state.stepIndex = 0;
    saveProgress();
    render();
    return;
  }

  if (action === "next-step") {
    const lesson = getLessonById(state.categoryId, state.lessonId);
    if (!lesson) return;
    if (state.stepIndex < lesson.steps.length - 1) {
      state.stepIndex += 1;
      saveProgress();
      render();
      return;
    }
    markCompleted(lesson.id);
    state.view = "complete";
    saveProgress();
    render();
    return;
  }

  if (action === "back-step") {
    if (state.stepIndex > 0) {
      state.stepIndex -= 1;
      saveProgress();
      render();
    }
    return;
  }

  if (action === "restart-lesson" || action === "retry-lesson") {
    state.stepIndex = 0;
    state.view = "practice";
    saveProgress();
    render();
    return;
  }

  if (action === "speak-step") {
    const lesson = getLessonById(state.categoryId, state.lessonId);
    if (!lesson) return;
    const step = lesson.steps[state.stepIndex];
    speak(`${step.title}. ${step.text}. 도움말. ${step.hint}`);
  }
});

function boot() {
  const progress = loadProgress();
  if (
    progress &&
    progress.categoryId &&
    progress.lessonId &&
    Number.isInteger(progress.stepIndex)
  ) {
    const lesson = getLessonById(progress.categoryId, progress.lessonId);
    if (lesson) {
      state.categoryId = progress.categoryId;
      state.lessonId = progress.lessonId;
      state.stepIndex = Math.min(Math.max(progress.stepIndex, 0), lesson.steps.length - 1);
      state.view = "practice";
    }
  }

  if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("./sw.js").catch(() => {});
    });
  }

  render();
}

boot();
