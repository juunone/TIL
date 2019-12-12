## git CLI

```
git status //깃 상태
git diff //변경점 확인

git checkout {branch} //브랜치로 체크아웃
git checkout -b {branch} //브랜치 생성후 체크아웃
git checkout -D {branch} //로컬브랜치 삭제

git fetch && git pull origin master //현재 체크아웃된 브랜치 최신화

git add . //현재 대기중인 파일 모두 추가
git commit -m "{message}" //커밋 메세지 추가
git push origin {branch} //커밋 푸시 origin 브랜치

git push origin --delete {branch} //리모트브랜치 삭제
git push origin :{branch} //리모트브랜치 삭제

git brnach //로컬 브랜치 리스트
git brnach -a //모든 브랜치 리스트
git brnach -r //리모트 브랜치 리스트

git checkout -t {branch} //리모트 브랜치 로컬에 생성후 체크아웃

git log --all --decorate --oneline --graph //adog 라는 은어로 함축되는 깃 히스토리 그래프 보기
git show {commit.id} //해당 커밋 id 히스토리 보기
```