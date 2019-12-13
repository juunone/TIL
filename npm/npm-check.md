## referenced 
[yarn-tutorial](https://www.holaxprogramming.com/2017/12/21/node-yarn-tutorials/)

## [npm-check](https://www.npmjs.com/package/npm-check-updates) ?

https://www.npmjs.com/package/npm-check-updates
프로젝트를 진행하답면 여러가지 모듈들을 npm 혹은 yarn으로 설치후 사용하게되는데
이때 latest가 아닌 모듈들은 버전들에 대한 관리를 해주지 않으면
메이저 버전이 업데이트 됐을때 장애로 고생할 수 있다.

이런 버저닝 이슈를 손쉽게 관리할수 있는게 [npm-check](https://www.npmjs.com/package/npm-check-updates) 이다.

```
nvm use {node version}
yarn global add npm-check
```
나는 nvm으로 노드버전관리를 해주고,
yarn 을 이용해서 글로벌 모듈들을 설치해서 사용한다.

```
npm-check -u
```
CLI를 입력하면 마이너, 메이저, 릴리즈 1미만 패키지 업데이트 리스트들이 나열된다.
`devDep` 키워드의 경우는 devDependencies에 들어가있는 패키지이다.
스페이스로 셀렉트해서 필요한 패키지들을 업데이트 진행할수 있다.  
![npm-check](https://user-images.githubusercontent.com/58495926/70773499-f9c85600-1dba-11ea-94a9-09e1e88bda16.png)


모든 패키지들에 대한 업데이트를 진행하고 더이상 진행할 패키지들이 없는경우
아래와 같은 **이쁘다고 칭찬해준다.**  
![npm-check finish](https://user-images.githubusercontent.com/58495926/70773252-41021700-1dba-11ea-9681-5b147f8575f7.png)

모든 패키지들에 대한 업데이트 혹은 기존 패키지들에 대한 업데이트 확인을 할경우는
아래 명렁어를 통해 확인 할 수 있다.  
`Current,Wanted,Latest` 
Current = 현재버전.
Wanted = 지정한 패키지의 호환성을 보장하는 버전을 의미한다.
Latest = 패키지 최신버전.

```
yarn outdated
```

