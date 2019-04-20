# 타입 선언

Typescript는 아래와 같이 변수명 뒤에 타입(자료형)을 명시하는 것으로
타입을 선언할 수 있다.

```typescript
let foo: string = "Hello";
```

선언한 타입에 맞지 않는 값을 할당하면 컴파일 시점에 에러가 발생한다.

```typescript
let bar: number = true; //error
```

함수의 매개변수와 반환값에 대하 타입 선언 방법은 아래와 같다.
일반 변수와 마찬가지로 선언된 타입에 일치하지 않는 값이 주어지면
에러가 발생한다.

```typescript
//함수 선언식
function multiply(x: string, y: number) {
  return x * y;
}
```

```typescript
//함수 표현식
const multiply2 = (x: number, y: number): number => x * y;

console.log(multiply1(10, 2));
console.log(multiply2(10, 3));
console.log(multiply1(true, 1)); //error
```
