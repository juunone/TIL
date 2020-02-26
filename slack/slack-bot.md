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

## 환경설정

로컬에 의존하지 않고 항상 사용할 수 있는 슬랙봇을 만들길 원했다.  
그래서 [heroku](https://heroku.com/)를 이용해 항시 띄워져있는 노드서버 환경을 구축했다.  
`slack-lion-bot`이라는 app을 heroku에 만들고 형상관리를 했다.  
처음 heroku를 사용하면 [https://devcenter.heroku.com/articles/getting-started-with-nodejs](https://devcenter.heroku.com/articles/getting-started-with-nodejs)에서 사용 가이드를 제공한다.

아래와 같이 heroku 스타트 레퍼런스를 복사해서 프로젝트 기본베이스로 사용했다.
```sh
git clone https://github.com/heroku/node-js-getting-started.git
cd node-js-getting-started
```

## 빌드

```sh
heroku create (앱생성)
git push heroku master (heroku 앱에 소스 업로드)
heroku ps:scale web=1 (서비스의 타입과 스케일)  
heroku open (로컬 띄우기)
```

## RTM(Real-Time Messaging) API
아래와 같이 `RTM API` 를 이용해서 리얼타임으로
챗봇과 메세지를 주고받을 수 있게 구현 가능하다.

`rtm.on`이라는 메소드로 슬랙에서 전달받은 객체 안에 텍스트를
이용해 그에 알맞는 응답을 줄 수 있다.

```js
const config = require("dotenv").config().parsed;
const { RTMClient } = require("@slack/client");
const token = config.SLACK_BOT_TOKEN;
const rtm = new RTMClient(token);

rtm.on("message", async event => {
  let text = event.text ? event.text : event.message.text;
  const channel = event.channel;

  if(text.icludes('주소'))
  await rtm.sendMessage('서울시 강남구', channel);
})

(async () => {
  await rtm.start();
})();
```

## 참고
- https://github.com/slackapi/node-slack-sdk
- https://asce-hyunseung.tistory.com/78
- https://story.pxd.co.kr/1262