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