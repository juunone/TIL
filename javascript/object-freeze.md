# Object.freeze()

Object.freeze() 메서드는 객체를 동결합니다. 동결된 객체는 더 이상 변경될 수 없습니다. 즉, 동결된 객체는 새로운 속성을 추가하거나 존재하는 속성을 제거하는 것을 방지하며 존재하는 속성의 불변성, 설정 가능성(configurability), 작성 가능성이 변경되는 것을 방지하고, 존재하는 속성의 값이 변경되는 것도 방지합니다. 또한, 동결 객체는 그 프로토타입이 변경되는것도 방지합니다. freeze()는 전달된 동일한 객체를 반환합니다.

## 참조
[MDN docs object.freeze()](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Object/freeze)