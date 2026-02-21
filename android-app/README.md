# 카톡 연습하기 Android APK

오프라인 웹앱을 WebView로 감싼 Android 프로젝트입니다.

기준 환경(고정):

- Android 14
- 카카오톡 10.6.5

## 설치된 빌드 환경

- JDK: `openjdk@21` (Homebrew)
- Android SDK root: `/opt/homebrew/share/android-commandlinetools`
- Android SDK packages:
  - `platforms;android-34`
  - `build-tools;34.0.0`
  - `platform-tools`
- Gradle Wrapper: `8.7`

## APK 빌드

```bash
cd /Users/huismyoo/Desktop/new/kakao-practice-offline/android-app
./build-debug-apk.sh
```

생성 경로:

- `/Users/huismyoo/Desktop/new/kakao-practice-offline/android-app/app/build/outputs/apk/debug/app-debug.apk`

## 기기에 설치

USB 디버깅이 켜진 안드로이드 기기 연결 후:

```bash
cd /Users/huismyoo/Desktop/new/kakao-practice-offline/android-app
./install-debug-apk.sh
```

## 에뮬레이터에서 바로 체험

```bash
cd /Users/huismyoo/Desktop/new/kakao-practice-offline/android-app
./launch-interactive.sh
```

- 에뮬레이터 창을 열고
- APK를 자동 설치한 뒤
- 앱을 자동으로 실행합니다.

문제가 있을 때 로그:

- `/tmp/kakao_emulator_gui.log`
