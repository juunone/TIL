# Object.freeze()

Object.freeze() 메서드는 객체를 동결하기 위한 메소드이다.
동결된 객체에 속성 추가, 제거, 변경을 방지한다.

## const
자바스크립트 `const` 라는 상수 변수 키워드를 제공한다.
```js
const foo = 'bar';
foo = "hello world"; //Uncaught TypeError: Assignment to constant variable.
//재할당을 할 경우 에러를 반환한다.
```

하지만 `const` 로 선언된 상수 변수도 객체의 속성을 변경할 수 있다.
할당된 값이 상수가 아니라, 바인딩 된 객체안의 값은 변경이 가능하다.

```js
const obj = {};
obj.name = "Choi";

console.log(obj.name) // Choi
```

## object.freeze()
```js
const user = {
  name:"John doe"
};

Object.freeze(user);

user.name = "Tom";
// 'use strict' 모드에서는 error 반환

console.log(user.name) //John doe
```

## 참조
[MDN docs object.freeze()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)