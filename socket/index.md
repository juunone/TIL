## Socket-io ?
JavaScript NodeJS 프레임워크 기반의 실시간 웹을 구현할 수 있는 기술이다.

<img alt="스크린샷 2019-10-24 15 46 11" src="https://user-images.githubusercontent.com/35126809/67460229-6c4b6e00-f675-11e9-8268-6e10a745e57c.png">

> 브라우저 지원범위 (2019.10.24 기준)  
> 출처 : https://github.com/socketio/socket.io

### server.js

express를 이용해 서버를 구축하고, socket.io 에 연결시켰다.  
db는 따로 만들지 않고, mockup 데이터를 사용하였다.

```js
const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const port = 3001;
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

io.on('connection', socket => {
  // console.log('connected!');

  socket.on('send message', (user, target, msg, isPicture) => {
    const copyData = [...data];
    const newDate = + new Date();

    copyData.forEach(v => {
      if(v.id === user){
        v.contents.forEach(key => {
          if(key.name === target){
            key.endedAt = newDate;
            key.messages.push({
              user: user,
              message: isPicture === true ? '' : msg,
              picture: isPicture === true ? msg : '',
              isRead: true
            })
          }
        });
      } else if (v.id === target) {
        v.contents.forEach(key => {
          if(key.name === user){
            key.endedAt = newDate;
            key.messages.push({
              user: user,
              message: isPicture === true ? '' : msg,
              picture: isPicture === true ? msg : '',
              isRead: false
            })
          }
        });
      }
    })

    const targetData = copyData.filter(v => v.id === user)[0];
    const targetMessages = targetData ? targetData.contents.filter(value => value.name === target)[0].messages : [];
    io.sockets.emit('receive message', targetMessages);

    const reduceTargetData = copyData.filter(v => v.id === target)[0];
    socket.broadcast.emit('receive data', reduceTargetData);
  })

  socket.on('receive data', (user) => {
    const newData = data.filter(v => v.id === user)[0];
    io.sockets.to(socket.id).emit('receive data', newData);
  });

  socket.on('receive message', (user, target) => {
    const targetData = data.filter(v => v.id === user)[0];
    const targetMessages = targetData ? targetData.contents.filter(value => value.name === target)[0].messages : [];
    io.sockets.emit('receive message', targetMessages);
  });

  socket.on('read message', (user, target) => {
    const copyData = [...data];
    const userIdx = copyData.findIndex(v => v.id === user);
    if(userIdx !== -1){
      const mappingData = copyData[userIdx].contents.map(key => {
        if(key.name === target){
          key.messages.forEach(value => {
            if(value.user === target) value.isRead = true;
          }) 
        }
        return key
      });
      copyData[userIdx].contents = mappingData;
    }

    const newData = copyData.filter(v => v.id === user)[0];
    io.sockets.to(socket.id).emit('receive data', newData);
  });

  socket.on('disconnect', () => {
    console.log('user disconnected!')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))
```

`io.sockets()` 괄호안에 들어가는 문자는 클라이언트와 서버사이드가 주고받는 메소드명이다.  
`emit` 은 메소드를 실행시키고, `on` 은 클라이언트에서 해당 메소드가 `emit`되면 서버사이드에서 실행되는 메소드다.  
`io.sockets.to(socket.id).emit('receive data', newData)` 는 현재 연결된 id에만 'receive data'를 실행한다.  
`socket.broadcast.emit('receive data', reduceTargetData)` 는 현재 연결된 id를 제외한 다른 모든 id들에 'receive data'를 실행한다.

---

## heartbeat?
허트비트란 무엇입니까?
핸드셰이크 후 어느 시점에서든 클라이언트 또는 서버가 상대방에게 핑(ping)을 보낼 수 있습니다. 핑이 수신되면 수신자는 가능한 한 빨리 퐁(pong)을 보내야합니다. 이게 바로 허트비트(heartbeat)입니다. 이 도구를 사용하여 클라이언트가 계속 연결되어 있는지 확인할 수 있습니다.
핑 또는 퐁은 일반 프레임이 아닌 제어 프레임(control frame)입니다. 핑에는 0x9의 opcode가 있고, 퐁에는 0xA의 opcode가 있습니다. 핑을 받으면 핑으로 받은 것과 똑같은 페이로드 데이터를 퐁으로 되돌려 보내면 됩니다(핑 및 퐁의 최대 페이로드 길이는 125입니다). 핑을 보내지 않았는데도 퐁이 도착하는 경우도 있는데 이런 경우에는 그냥 무시하면 됩니다.
허트비트는 매우 유용 할 수 있습니다. 예를 들어 유휴 연결을 종료시키는 로드 밸런서를 사용중인 경우에 그렇습니다. 또한 수신 측에서는 원격 측이 종료되었는지 여부를 확인할 수 없고 다음 전송이 이루어졌을 때에만 뭔가 잘못되었다는 것을 알게될 수 있으니 이럴 때 허트비트가 유용할 수 있습니다.

- 소켓연결이 항상 연결돼있으면 자원낭비가 극심하므로, 계속 클라이언트가 사용하고있는지 심장박동을 알아보는 health check 개념이다.