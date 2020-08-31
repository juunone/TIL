## this 
- 엄격 모드('use strict')에서는 this = undefined 
- 비엄격모드에서는 this = window
- 자바스크립트에서 this는 함수 선언 위치가 아닌, 함수를 호출했을때 이뤄진다. 
  함수가 호출되는 실행 컨텍스트가 바로 this의 값이 된다.
- this 종류
  - Default Binding
  - Implicit Binding
  - Explicit Binding
  - Hard Binding
  - new Keyword

### default binding
```js
function bar() {
  var foo = 'one';
  console.log(this.foo);
};
var foo = 'june';
bar(); //june
```

## Implicit Binding 암시적 바인딩
객체의 메소드에서 호출될시에 this는 해당 객체를 바라본다.
```js
function bar() {
  console.log(this.foo);
};

var obj = {
  foo: 'john',
  bar: bar
};

var foo = 'kim';
obj.bar(); //john
```

## Explicit Binding 명시적 바인딩
바인딩을 명시하고 this 참조 값 결정.
bind,call,apply 로 명시적 바인딩 할수 있다.
```js
function foo() {
  console.log(this.bar);
};

var obj1 = {
  bar: '안녕'
};
var obj2 = {
  bar: '반가워'
};

var bar = '하이';
foo.call(obj1); //안녕
foo.call(obj2); //반가워
```

- bind 는 해당 함수 자체를 반환.
- call , apply 는 결과 값 반환.

```js
var obj2 = { c: 'd' };
function b() {
  console.log(this);
}
b(); // Window
b.bind(obj2).call(); // obj
b.call(obj2); // obj
b.apply(obj2); // obj
```

## new Keyword 생성자 호출
생성자 함수를 호출하면 새로운 인스턴스가 생성된다.
이때 this는 해당 인스턴스 객체를 바라본다.