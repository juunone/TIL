# Object.freeze()

Object.freeze() 메서드는 객체를 동결하기 위한 메소드이다.
동결된 객체에 속성 추가, 제거, 변경을 방지한다.

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