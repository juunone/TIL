## Google reCAPTCHA

로봇을 이용한 회원가입 및 로그인 방지를 위해 구글 리캡차를
도입한 경험을 공유한다.

회원가입같은 보안이슈가 동반되는 페이지는 무조건적으로라도  
인증을 통해 가입을 가능하게 만드는것이 최소한의 조건이라고 개인적으로 생각한다.
리캡차를 도입한다고해도 100% 로봇을 통한 가입을 제한한다고 볼수 없지만  
최소한의 비용으로 하나의 인증을 추가할 수 있다면 리캡차도 그중 하나의 방법이라고 생각한다.

**또한 리캡차는 대중적인 언어들은 모두 지원한다.**


### 참조
- [Google reCAPTCHA](https://www.google.com/recaptcha/intro/v3.html)
- [reCAPTCHA Help](https://support.google.com/recaptcha/?hl=en)
- npm modules
  - [react-google-recaptcha](https://www.npmjs.com/package/react-google-recaptcha)
  - [react-recaptcha-google](https://www.npmjs.com/package/react-recaptcha-google)
  - [react-recaptcha-v3](https://www.npmjs.com/package/react-recaptcha-v3)

## What is reCAPTCHA?

[What is reCAPTCHA](https://developers.google.com/recaptcha/?hl=ko)를 보면 동영상으로 친절하게 리캡차에 대한 설명을 해준다.

웹 클라이언트에서 100% 보안 이슈를 해결할 수 있다고 장담할 수 없다.  
하지만 로그인이나 회원가입 같은 auth 들은 최소한의 보안이라도 갖춰놔야지
좀더 안정성있고, 좋은 환경을 유저들에게 제공할 수 있다.
> e.g. 오래된 게시판에 광고글도 모두 글을 등록하는 시점에 로봇으로 등록이 가능하기 때문에 보안이 더 필요하다.
