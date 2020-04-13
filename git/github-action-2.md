## Github-action

깃헙액션을 사용한 경험에 대해 추가로 작성해보고자 한다.  
[지난 깃헙액션 첫번째 글](https://github.com/juunone/TIL/blob/master/git/github-action.md)  

지난번 github-actions의 yml 설정에 한계에 부딪혀 배포자동화를 못하고 있던중,  
추가 수정과 삽질을 통해 드디어 github-actions를 통해 CI/CD 가 완성됐다.

**AS-IS**: `sh`을 통한 `AWS amplify CLI` 배포.  
**TO-BE**: github-actions를 통한 `push` 트리거시 `AWS amplify CLI github-actions`를 통해 배포.

결론적으로 수정된 파일을 단 2개, `workflow yml` 과 `package.json`  

## Actions

먼저 [github actions marketplace](https://github.com/marketplace/actions) 에서 2개의 액션들을 사용했다.

첫번째
- (AWS amplify actions)[https://github.com/marketplace/actions/amplify-cli-action]   

기존에 사용하고있던 `aws amplify`를 그대로 계승해서 사용하길 원했고, S3 및 Cloudfront 까지 배포를 해주기 때문에
매우 편리한 서비스다.  
`amplify CLI`를 사용할수 있는 액션이 마켓에 존재했고, 해당 모듈을 사용해서 액션을 만들수 있었다.
여기서 한가지 문제점이 있었는데, `amplify-cli-action@0.2.0` 버전에서는 arguments 옵션이 지원되지 않아
Cloudfront까지 배포가 안된다는 점이였다.  
다른 모듈을 사용하기 여의치않고, 결국 해당 repo에 `feature request`로 issue를 생성했다.



(Slack notification actions)[https://github.com/marketplace/actions/slack-notify]