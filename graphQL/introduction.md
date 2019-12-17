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