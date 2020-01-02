## 점자 처리 방법

두줄 이상의 줄을 가진 문단에서
일정 높이 이상이 되었을때 그하위의 문자열이 점자로 처리되는 방식.  
(chrome 브라우저에서만 적용 가능하다.)

```css
max-height: 92px; //최고 높이를 지정해주므로서 문단이 형성
text-overflow: ellipsis;
overflow: hidden;
-webkit-line-clamp: 4; //몇번째 줄부터 점자처리 할지 결정
-webkit-box-orient: vertical;
word-wrap: break-word;
display: -webkit-box;
```

한줄의 경우 아래와 같이 처리한다.

```css
text-overflow: ellipsis;
overflow: hidden;
white-space: nowrap;
```