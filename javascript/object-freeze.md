# Object.freeze()

Object.freeze() 메서드는 객체를 동결하기 위한 메소드이다.
동결된 객체에 속성 추가, 제거를 방지한다.

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
// 비엄격 모드에서는 조용하게 실패

console.log(user.name) //John doe
```

## 얕은 동결
```js
const user = {
  name: "John doe",
  age: 20,
  pet: {
    dog: "Roy",
    cat: "Ben"
  }
};

Object.freeze(user);

user.name = "Tom"; //비엄격 모드에서 조용하게 실패

user.pet.dog = "Woody"
console.log(user.pet.dog) // Woody
```

이처럼 nested 하게 들어간 객체안의 값은 `object.freeze` 로 객체를 동결하더라도 값이 변경 가능하다.


## isFrozen
객체의 동결 여부를 확인할 수 있는 메소드이다.

```js
const obj = {};
const user = {};
Object.freeze(obj);

Object.isFrozen(obj); //true
Object.isFrozen(user); //false
```


## 참조
[MDN docs object.freeze()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)