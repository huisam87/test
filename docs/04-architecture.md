# 기술 설계

## 전체 구조
- Layer 1: 오프라인 웹앱 (`public/*`)
- Layer 2: 정적 실행 서버 (`server.js`)
- Layer 3: Android WebView 래퍼 (`android-app/*`)

## 주요 파일
- 웹 로직: `public/app.js`
- 웹 스타일: `public/styles.css`
- 웹 엔트리: `public/index.html`
- 오프라인 캐시: `public/sw.js`
- Android Activity: `android-app/app/src/main/java/com/huismyoo/kakaopractice/MainActivity.java`

## 데이터/상태
- 시나리오 데이터: `public/app.js` 내부 상수
- 학습 진행 상태: `localStorage`
- 완료 이력: `localStorage`

## 오프라인 전략
- 서버/API 의존 없음
- 앱 자산 내 포함
- 서비스워커로 캐시 처리

## 빌드
- 웹: `node server.js`
- Android: Gradle Wrapper `assembleDebug`
