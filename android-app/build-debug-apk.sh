#!/usr/bin/env bash
set -euo pipefail

export JAVA_HOME="/opt/homebrew/opt/openjdk@21/libexec/openjdk.jdk/Contents/Home"
export ANDROID_SDK_ROOT="/opt/homebrew/share/android-commandlinetools"
export PATH="/opt/homebrew/opt/openjdk@21/bin:$ANDROID_SDK_ROOT/platform-tools:$ANDROID_SDK_ROOT/cmdline-tools/latest/bin:$PATH"

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
cd "$SCRIPT_DIR"

if [[ ! -f "local.properties" ]]; then
  printf "sdk.dir=%s\n" "$ANDROID_SDK_ROOT" > local.properties
fi

./gradlew assembleDebug

echo
echo "APK built:"
echo "$SCRIPT_DIR/app/build/outputs/apk/debug/app-debug.apk"
