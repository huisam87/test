# 카톡 연습하기 (오프라인)

어르신용 카카오톡 미디어 연습 앱입니다.

기준 환경(고정):

- Android 14
- 카카오톡 10.6.5

## 구성

- 홈 메뉴 4개
  - 사진 보내기
  - 사진 받기
  - 동영상 보내기
  - 동영상 받기
- 각 메뉴별 연습 2개
  - 1개
  - 여러개

총 8개 연습 시나리오가 들어있습니다.

- 사진 1장 보내기
- 사진 여러장 보내기
- 사진 1장 받기
- 사진 여러장 받기
- 동영상 1개 보내기
- 동영상 여러개 보내기
- 동영상 1개 받기
- 동영상 여러개 받기

## 실행 방법

```bash
cd /Users/huismyoo/Desktop/new/kakao-practice-offline
npm start
```

브라우저에서 아래 주소로 접속합니다.

- http://localhost:4173

빠른 실행:

```bash
cd /Users/huismyoo/Desktop/new/kakao-practice-offline
./run-web-playground.sh
```

## 가상 실행(모바일처럼 보기)

1. 크롬에서 `http://localhost:4173` 접속
2. 개발자도구 열기
3. Device Toolbar(모바일 미리보기) 활성화
4. 화면 크기를 `Galaxy S20` 같은 모바일 프로필로 변경

## 오프라인 동작

- 네트워크/API 호출 없음
- 모든 화면/문구는 로컬 파일에 포함
- 서비스워커 캐시로 재접속 시 오프라인 유지

## 데이터 위치

- 연습 시나리오: `/Users/huismyoo/Desktop/new/kakao-practice-offline/public/app.js`

## Android APK 빌드

Android 래퍼 프로젝트 위치:

- `/Users/huismyoo/Desktop/new/kakao-practice-offline/android-app`

빌드:

```bash
cd /Users/huismyoo/Desktop/new/kakao-practice-offline/android-app
./build-debug-apk.sh
```

APK:

- `/Users/huismyoo/Desktop/new/kakao-practice-offline/android-app/app/build/outputs/apk/debug/app-debug.apk`

에뮬레이터 + 앱 자동 실행:

```bash
cd /Users/huismyoo/Desktop/new/kakao-practice-offline/android-app
./launch-interactive.sh
```

## 문서 인덱스

- 개요: `/Users/huismyoo/Desktop/new/kakao-practice-offline/docs/00-project-overview.md`
- 계획: `/Users/huismyoo/Desktop/new/kakao-practice-offline/docs/01-plan.md`
- 설계: `/Users/huismyoo/Desktop/new/kakao-practice-offline/docs/02-product-design.md`
- 시나리오: `/Users/huismyoo/Desktop/new/kakao-practice-offline/docs/03-scenarios.md`
- 기술구조: `/Users/huismyoo/Desktop/new/kakao-practice-offline/docs/04-architecture.md`
- 실행 가이드: `/Users/huismyoo/Desktop/new/kakao-practice-offline/docs/05-runbook.md`
- 검증 기록: `/Users/huismyoo/Desktop/new/kakao-practice-offline/docs/06-validation.md`
- GitHub 업로드: `/Users/huismyoo/Desktop/new/kakao-practice-offline/docs/07-github-publish.md`
