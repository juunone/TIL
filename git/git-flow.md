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
