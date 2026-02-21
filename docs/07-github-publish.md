# GitHub 업로드 가이드

## 1) 로컬 저장소 초기화
```bash
cd /Users/huismyoo/Desktop/new/kakao-practice-offline
git init
```

## 2) 파일 추가/커밋
```bash
git add .
git commit -m "feat: offline kakao practice app (android14/kakaotalk10.6.5)"
```

## 3) 원격 저장소 연결
```bash
git remote add origin <YOUR_GITHUB_REPO_URL>
git branch -M main
git push -u origin main
```

## 4) 업로드 전 체크
- README 문서 링크 동작
- APK 빌드 스크립트 실행 가능
- 민감정보 미포함 확인
