## Google recaptcha

깃헙액션을 사용한 경험에 대해 작성해보고자 한다.  
일단 `aws amplify` 로 기존에 프론트를 배포하고있었다.  
amplify CLI를 통해서 수동배포를 하고있었는데 이 부분을
깃헙액션을 통해 CI/CD 를 구축해보고자 한다.

[amplify-cli-action](https://github.com/marketplace/actions/amplify-cli-action) 이라는
깃헙 액션 워크플로우 템플릿을 base로 yml을 작성했다.

깃헙액션 탭에 들어가면 기본적으로 많이쓰이는 템플릿을 제공하는데 그외에도 [github-action marketplace](https://github.com/marketplace/actions/) 에 가면 유저들이 만들어 놓은 많은 템플릿도 제공하고있다. 이중 자신이 필요한 CI/CD 베이스를 가져와 사용할 수 있다.

## what is recaptcha?
