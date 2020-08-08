## 클로저
클로저는 반환된 내부함수가 선언됐을때의 환경인 스코프를 기억하고, 외부함수 호출이 종료되 실행 컨텍스트가 종료되어도, 내부 함수에 의해 참조되는 스코프 체인을 통해 참조 할수 있는것.

```js
function people() {
  var name = "one";
  return function () {
    return name;
  };
}

const hello = people();
console.log(hello()); //one
```

```js
var age = 20;
function people(name) {
  var _name = name;
  return function () {
    return name+age;
  };
}

const hello = people('one');
console.log(hello()); //one20
```