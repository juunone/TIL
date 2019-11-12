## [redux-rematch](https://rematch.github.io/rematch/#/)?

리덕스 리매치란 기존의 리덕스에서 불편함을 주는 요소들을
손쉽게 configurations 할 수 있는 하나의 리덕스 헬퍼 라이브러리다.

## install
```
npm install @rematch/core
```

## init
여러가지 모델을 아래와 같이 rematch/core 의 initialize를 해준다.
```js
import { init } from '@rematch/core'
import * as models from './models'

const store = init({
    models,
})

export default store
```

## model
state = 기존과 동일한 state들  
reducer = 비동기가 없는 순수한 리듀스 함수들 객체  
effects = 비동기 함수를 모아놓는 객체

```js
export const count = {
    state: 0, // initial state
    reducers: {
        // handle state changes with pure functions
        increment(state, payload) {
            return state + payload
        },
    },
    effects: dispatch => ({
        // handle state changes with impure functions.
        // use async/await for async actions
        async incrementAsync(payload, rootState) {
            await new Promise(resolve => setTimeout(resolve, 1000))
            dispatch.count.increment(payload)
        },
    }),
}
```

## props, dispatch
아래 예시 코드를 보면 `mapState`, `mapDispatch` 연결하는 부분은
똑같고, `mapDispatch`에 더이상 `actionType`을 설정할 필요없이
객체에 접근하듯이 접근후 함수 호출이 가능하다.

```js
import React from 'react'
import ReactDOM from 'react-dom'
import { Provider, connect } from 'react-redux'
import store from './store'

const Count = props => (
    <div>
        The count is {props.count}
        <button onClick={props.increment}>increment</button>
        <button onClick={props.incrementAsync}>incrementAsync</button>
    </div>
)

const mapState = state => ({
    count: state.count,
})

const mapDispatch = ({ count: { increment, incrementAsync } }) => ({
    increment: () => increment(1),
    incrementAsync: () => incrementAsync(1),
})

const CountContainer = connect(
    mapState,
    mapDispatch
)(Count)

ReactDOM.render(
    <Provider store={store}>
        <CountContainer />
    </Provider>,
    document.getElementById('root')
)
```