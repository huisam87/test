#!/usr/bin/env bash
set -euo pipefail

if [[ -f /tmp/kakao_practice_web.pid ]]; then
  if ps -p "$(cat /tmp/kakao_practice_web.pid)" > /dev/null 2>&1; then
    echo "Web server already running: http://localhost:4173"
    exit 0
  fi
fi

nohup node server.js > /tmp/kakao_practice_web.log 2>&1 &
echo $! > /tmp/kakao_practice_web.pid
sleep 1

echo "Web playground ready: http://localhost:4173"
