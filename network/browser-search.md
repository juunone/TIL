## Browser에서 google.com 검색하면 생기는일?

- DNS(domain name server)에서 ip 주소 가져오기
  - https://www.google.com를 ip주소로 변환하는 작업
  - 사람이 읽을 수 있는 도메인 이름을  컴퓨터가 읽을 수 있는 IP 주소로 변환

- Browser DNS Cache - Chrome
브라우저는 도메인이 캐시에 들어있는지 확인합니다.

- OS DNS Cache - Mac
만약 Browser Cache에서 못 찾으면, OS에 저장된 DNS Cache를 찾게 됩니다.

- Router DNS Server
만약 OS Cache에서도 못 찾으면, Router DNS Server에 직접 조회를 진행하게 됩니다.

- DNS Server
Router DNS Server에 조회해서 없다면, Root DNS부터 조회를 하여 결과를 가져옵니다.

- Server와 TCP Socket 열기
Server의 IP주소로 TCP Socket을 열어 Server와 통신 준비를 진행합니다.

- Server에 HTTP로 Resource 요청하기
TCP Socket을 통해 HTTP Protocol로 원하는 Resource를 요청합니다.

- Browser Page Rendering
Server에서 받은 Resource를 Browser에서 Rendering하는 작업이 필요합니다.

![dns](https://user-images.githubusercontent.com/58495926/73413445-0d218780-434f-11ea-9471-d10666579222.png)