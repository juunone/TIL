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
여기서 한가지 문제점이 있었는데, 

`amplify-cli-action@0.2.0` 버전에서는 arguments 옵션이 지원되지 않아
Cloudfront까지 배포가 안된다는 점이였다. ㅠㅠ

다른 모듈은 마땅히 사용할만한게 존재하지 않았고, 결국 해당 repo에 feature request로 issue를 생성했다.  
개발자가 대응이 빨라 `amplify-cli-action@0.2.1`에서 바로 사용 가능하게 배포됐다.

두번째
- (Slack notification actions)[https://github.com/marketplace/actions/slack-notify]

빌드 및 배포가 종료되고 마지막에 사용하고있는 슬랙에 배포 알림이 오면 좀더 손쉽게 확인할 수 있으므로,  
`job`이 성공/취소/실패 모든 상황에 항상 슬랙 알림이 뜨도록 위 슬랙 액션을 사용했다.

액션 `job`에는 `always, success, cancelled, failure` 총 4가지 상태가 존재한다.

나는 아래와 같이 1개의 잡에 스텝들을 나눴으므로, 각각의 스텝에 `if` 필드를 통해 조건을 걸었다.

```yml
- name: Slack Notification Success
if: success()
uses: rtCamp/action-slack-notify@v2.0.1
env:
  SLACK_WEBHOOK: "${{secrets.SLACK_WEBHOOK_URL}}"
  SLACK_COLOR: "#02ff0a"
  SLACK_TITLE: ":white_check_mark: ${{job.status}} Github Actions"
  SLACK_MESSAGE: "• URL: ${{env.action_state}} \n• Repo: <https://github.com/${{github.repository}}|${{github.repository}}> \n• Commit: <${{github.event.head_commit.URL}}|${{github.event.head_commit.id}}>"
  SLACK_USERNAME: ${{github.actor}}
```

> 위 처럼 yml에 추가 하고 슬랙의 알림이 오는걸 보면 아래와 같은 아웃풋이 나온다.
![slack noti](https://user-images.githubusercontent.com/35126809/79085365-390bb100-7d73-11ea-89f7-dd13dd139619.png)
참조: https://github.com/marketplace/actions/slack-notify











