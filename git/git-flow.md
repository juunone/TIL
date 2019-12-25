## git-flow?
깃플로우란 깃을 사용하는 방법론중의 하나라고 한다.
예를들어 `github-flow`, `gitlab-flow`, `bitbucket-flow` 등 
자기들만의 방식으로 네이밍을 정해 형상관리를 하고있는 방법중의 하나이다.

회사에서 git-flow로 관리를 하고있기에 내용을 정리해볼려고 한다.

## 참고
[우아한 형제들 블로그](http://woowabros.github.io/experience/2017/10/30/baemin-mobile-git-branch-strategy.html)

이 이미지가 `git-flow` 를 한눈에 보여주고 있다. 제일 유명한 그림이기도하다.
![git-flow](https://user-images.githubusercontent.com/58495926/71398368-8ac4ea00-2663-11ea-9176-cbb7f3f94cff.png)

git-flow에는 5가지 종류의 브랜치로 나누어지게 됩니다.

메인 브랜치들(master, develop)와 보조 브랜치들(feature, release, hotfix)이 있다. 

master : 제품으로 출시될 수 있는 브랜치  
develop : 다음 출시 버전을 개발하는 브랜치  
feature : 기능을 개발하는 브랜치  
release : 이번 출시 버전을 준비하는 브랜치  
hotfix : 출시 버전에서 발생한 버그를 수정 하는 브랜치

## Flow

깃플로우의 흐름을 설명하자면  
- 모든 핫픽스는 `master`에서 브랜치가 따지고 머지된다.  
- 신규기능개발 브랜치는 `develop` 에서 따진다.  
  - `milestone` 브랜치를 하나 딴후 거기서 `feature` 브랜치를 해당브랜치에 머지하는 방식도 유용하다.
  - 모든 기능이 끝난 브랜치들은 `milestone` 혹은 `develop` 에 pull request 를 보낸다.
- 릴리즈될 기능이 포함된 `develop` 브랜치는 `release` 브랜치를 생성한다.
  - QA 가 진행은 `release` 브랜치에서 진행한다.  
- QA가 완료된 release 는 `develop` 및 `master` 에 머지된다.
- master 브랜치에 버전 commit 및 tag를 붙이고 배포한다.

이렇게하면 `master` 와 `develop` 은 최신화 된 기능을 포함한 브랜치이고,
모든 배포는 반드시 `master` 브랜치에서 배포된다.