# 실행/운영 가이드

## 1) 웹 가상 실행
```bash
cd /Users/huismyoo/Desktop/new/kakao-practice-offline
./run-web-playground.sh
```
- 접속: `http://localhost:4173`

## 2) APK 빌드
```bash
cd /Users/huismyoo/Desktop/new/kakao-practice-offline/android-app
./build-debug-apk.sh
```
- 결과물: `app/build/outputs/apk/debug/app-debug.apk`

## 3) 에뮬레이터 + 앱 자동 실행
```bash
cd /Users/huismyoo/Desktop/new/kakao-practice-offline/android-app
./launch-interactive.sh
```

## 4) 실기기 설치
```bash
cd /Users/huismyoo/Desktop/new/kakao-practice-offline/android-app
./install-debug-apk.sh
```

## 5) 종료
```bash
adb emu kill
```
