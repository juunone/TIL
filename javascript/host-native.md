## 호스트 객체
- 호스트 객체는 브라우저 환경에서 제공하는 window,document,XMLHttpRequest 등의 호스트 환경에 정의된 객체다.
- 브라우저에서 동작하는 전역객체인 BOM(browser object model), DOM(document object model) 등이 있다.
- 브라우저 객체 모델의 최상위 객체는 window 이고, 문서 객체 모델의 최상위 객체는 document 이다.

## 네이티브 객체
- ECMAScript 명세에 정의된 객체이다.
- 어플리케이션 환경과 관계없이 언제나 사용할 수 있다. Object, String, Number, Boolean, Function, Array, RegExp, Date, Math, Symbol 등과 같은 객체 생성에 관계가 있는 함수 객체와 메소드로 구분된다.
- 원시 타입 값(string, number, boolean)에서 표준 빌트인 객체의 메서드로 호출할 때 Wrapper 객체로 일시 변환이 되는데, 이러한 Wrapper 객체에는 String, Number, Boolean 객체가 포함이 된다.
- javascript 에서는 window, NodeJS 에서는 global 을 가르킨다.