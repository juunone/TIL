## 아임포트 적용기

진행하는 프로젝트에서 결제 부분을 담당하게되었다.
아임포트를 사용중이고, 인증결제로 진행중이다.

## 아임포트 라이브러리 추가하기

인증결제는 아임포트 cdn 과 제이쿼리가 필수이다.
```html
<!-- jQuery -->
<script type="text/javascript" src="https://code.jquery.com/jquery-1.12.4.min.js" ></script>
<!-- iamport.payment.js -->
<script type="text/javascript" src="https://cdn.iamport.kr/js/iamport.payment-1.1.5.js"></script>
```

## 가맹점 식별코드
어드민에서 확인가능한 가맹점 식별코드를 가지고
root에서 `IMP` 메소드를 init해준다.  
윈도우함수에 IMP 객체가 들어가고, 전역객체로 프로젝트내부에서
사용하게 된다.

```js
const IMP = window.IMP; // 생략해도 괜찮습니다.
IMP.init("imp00000000"); // "imp00000000" 대신 발급받은 "가맹점 식별코드"를 사용합니다.
```

## 결제 호출
IMP 전역객체에는 5개의 메소드가 존재하는데.
- init
- agency
- request_pay
- communicate
- certification

이중 request_pay 메소드를 통해 결제창을 호출한다.
아래에는 기본적으로 많이 들어가는 파라미터들을 넣어놨다.
자세한 `params` 는 아래 문서를 통해 확인한다.
[IMP params](https://docs.iamport.kr/tech/imp#param)

```js
// IMP.request_pay(param, callback) 호출
IMP.request_pay({ // param
  pg: "inicis",
  pay_method: "card",
  merchant_uid: "ORD20180131-0000011",
  name: "노르웨이 회전 의자",
  amount: 64900,
  buyer_email: "gildong@gmail.com",
  buyer_name: "홍길동",
  buyer_tel: "010-4242-4242",
  buyer_addr: "서울특별시 강남구 신사동",
  buyer_postcode: "01181"
}, rsp => { // callback
  if (rsp.success) {
      ...,
      // 결제 성공 시 로직,
      ...
  } else {
      ...,
      // 결제 실패 시 로직,
      ...
  }
});
```



## 참조

[iamport docs](https://docs.iamport.kr/implementation/payment)