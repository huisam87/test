#!/usr/bin/env bash
set -euo pipefail

export JAVA_HOME="/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home"
export ANDROID_SDK_ROOT="/opt/homebrew/share/android-commandlinetools"
export PATH="/opt/homebrew/opt/openjdk@21/bin:$ANDROID_SDK_ROOT/platform-tools:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$ANDROID_SDK_ROOT/emulator:$PATH"

APK_PATH="/Users/huismyoo/Desktop/new/kakao-practice-offline/android-app/app/build/outputs/apk/debug/app-debug.apk"
EMULATOR_LOG="/tmp/kakao_emulator_gui.log"

adb start-server >/dev/null

if ! emulator -list-avds | grep -qx "kakao_api34"; then
  echo "Creating AVD kakao_api34..."
  echo "no" | avdmanager create avd -n kakao_api34 -k "system-images;android-34;google_apis;arm64-v8a" --device "pixel_6"
fi

if ! adb devices | awk '/emulator-/{print $1}' | grep -q .; then
  echo "Starting emulator window (stable mode)..."
  nohup emulator @kakao_api34 \
    -gpu off \
    -no-snapshot-load \
    -no-snapshot-save \
    > "$EMULATOR_LOG" 2>&1 &
  sleep 3
fi

echo "Waiting for emulator boot..."
serial=""
booted="0"
for _ in $(seq 1 180); do
  serial=$(adb devices 2>/dev/null | awk '/emulator-/{print $1; exit}' || true)
  if [[ -n "$serial" ]]; then
    boot=$(adb -s "$serial" shell getprop sys.boot_completed 2>/dev/null | tr -d '\r' || true)
    if [[ "$boot" == "1" ]]; then
      booted="1"
      break
    fi
  fi
  sleep 2
done

if [[ -z "$serial" || "$booted" != "1" ]]; then
  echo "Emulator boot did not complete."
  echo "Check log: $EMULATOR_LOG"
  exit 1
fi

if [[ ! -f "$APK_PATH" ]]; then
  echo "APK not found. Building..."
  /Users/huismyoo/Desktop/new/kakao-practice-offline/android-app/build-debug-apk.sh
fi

echo "Installing APK to $serial ..."
adb -s "$serial" install -r "$APK_PATH" >/dev/null
adb -s "$serial" shell am start -n com.huismyoo.kakaopractice/.MainActivity >/dev/null

echo "Ready. Emulator is open and app is launched."
echo "If window closes, see: $EMULATOR_LOG"
