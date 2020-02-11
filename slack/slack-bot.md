## 그렇다 슬랙봇을 만들었다.

- 목적 : 항시 사용가능하고, 챗봇처럼 사용하고싶어서 만들게되었다.
  - 사내에 필요한 정보 습득 및 링크 공유
  - e.g. 회사 주소 조직도 및 신규입사자 온보딩 프로세스 및 소소한 재미를 추구하는 봇.

- 환경 : NodeJS + heroku
  - 노드에 `@slack/client` 모듈 아용해 개발
  - heroku 로 항상 사용할 수 있는 환경 구축

## Slack API
- Web API
- Events API
- Interactive Messages
- RTM(Real-Time Messaging) API
- Incoming Webhooks

슬랙은 위와 같이 총 5가지의 API를 제공한다.
그 중 나는 `Web API` , `RTM API`를 사용했다.

## 참고
- https://github.com/slackapi/node-slack-sdk
- https://asce-hyunseung.tistory.com/78
- https://story.pxd.co.kr/1262