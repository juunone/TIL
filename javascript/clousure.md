## 클로저
클로저는 반환된 내부함수가 선언됐을때의 환경인 스코프를 기억하고, 외부함수 호출이 종료되 실행 컨텍스트가 반환되어도, 내부 함수에 의해 참조되는 스코프 체인을 통해 참조 할수 있는것.
자신이 선언됐을 때의 환경(스코프) 밖에서 호출되어도 그 환경(스코프)에 접근할 수 있는 함수

자신을 포함하고 있는 외부함수보다 내부함수가 더 오래 유지되는 경우에, 외부 함수 밖에서 내부함수가 호출되더라도 외부함수의 지역 변수에 접근할 수 있는 이러한 함수, 또는 포함하고 있는 스코프를 클로저(Closure)라고 부른다.

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
    return _name+age;
  };
}

const hello = people('one');
console.log(hello()); //one20
```