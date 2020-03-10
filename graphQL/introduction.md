## references
[카카오테크 graphQL-basic](https://tech.kakao.com/2019/08/01/graphql-basic/)

## GraphQL?

그래프큐엘은 페이스북에서 만든 쿼리언어 이다.
**gql은 웹클라이언트에서 효율적으로 데이터를 가져오는것이 목적**이다.

> 쿼리예시
```code
query getHero{
  user {
    name
    gender
    company {
      name
      phone
      adress
    }
  }
}
```

gql의 동작방식이나 rest API와 비교는
위에 참조한 문서에 그림과 함께 자세히 설명되어있다.

## schema/type?
```code
type Character {
  name: String!
  appersIn: [Episode!]!
}
```
- 오브젝트 타입 : Character
- 필드 : name, appearsIn
- 스칼라 타입 : String, ID, Int 등
- 느낌표(!) : 필수 값을 의미(non-nullable)
- 대괄호([, ]) : 배열을 의미(array)
참조:카카오테크 gql

## pagination?
gql에서 현재 서비스에서 사용하고있는 페이지네이션 쿼리는 아래와 같다.
`allQuestionsPage`에서 나온 `after`의 gid를 가지고  
`allQuestions`에 `after` 파라미터에 넣어주면 해당 gid의 다음
엣지 노드들이 response로 온다.

gql에서는 정말 페이지네이션이 불편하게되어있는거 같다.
(사용법이 미숙할지도..)
이런점에선 restful이 더 간결하지 않나 생각이든다.

```
//pageSize = 한페이지에 나올 총 컨텐츠 갯수
//startPage = 시작될 페이지 (e.g, 페이지사이즈 = 5이며, 총 컨텐츠가 10개일경우 총 2개의 페이지가 나옴.)

query allQuestionsPage{
  allQuestionsPagination(pageSize:5 startPage:1 ){
    lastPage{
    	pageNumber
      after
    }
    pages{
    	pageNumber
      after
    }
}
```

```
//first = 처음에 나올 컨텐츠 갯수
//after = 해당 gid 다음에 있는 컨텐츠들이 결과값으로 나옴.

query allQuestions{
  allQuestions(first:2 after:{gid}){
    edges{
      cursor
      node{
        content
			}
    }
  }
}
```

## useQuery
react 16.x 버전부터 지원하는 `hooks` 를 대비해서  
`@apollo/react-hooks` 를 사용할 수 있다.

```
npm install @apollo/react-hooks
```

hooks에서만 사용할수 있으므로 함수형만 지원한다. 첫번째 파라미터로 쿼리를 보내고,  
두번째 객체에 `variables`,`fetchPolicy`,`onCompleted` 등 필요한 옵션들을 사용할 수 있다.  
결과값으로 `loading,error,data` 등으로 에러 및 로딩에 대한 핸들링도 가능하고,  
결과값도 물론 받아서 사용할 수있다.  
참조 : [apollo react hooks](https://www.apollographql.com/docs/react/api/react-hooks/)

```js
import { useQuery } from '@apollo/react-hooks';
import gql from 'graphql-tag';

const GET_GREETING = gql`
  query getGreeting($language: String!) {
    greeting(language: $language) {
      message
    }
  }
`;

function Hello() {
  const { loading, error, data } = useQuery(GET_GREETING, {
    variables: { language: 'english' },
  });
  if (loading) return <p>Loading ...</p>;
  return <h1>Hello {data.greeting.message}!</h1>;
}
```

## etc..

`gql`의 클라이언트 `apollo`를 사용시에 노드들에는 반드시 중첩되지 않는 id가 필요하다.  
nested하게 들어가는 쿼리도 마찬가지로 필수이다.
현재 사용중인 쿼리에서는 `id` , `hashid` 로 사용중이다.  
각 노드에 id가 없거나, 해당 id가 중첩되면  

[stackoverflow gql error 1](https://github.com/apollographql/react-apollo/issues/1656)  
[stackoverflow gql error 2](https://stackoverflow.com/questions/44403930/error-network-error-error-writing-result-to-store-for-query-apollo-client)

위 와 같은 에러로그를 보여준다.