const express = require('express') //express 모듈을 가져옴
const app = express() // 이거의 function을 이용해서 express 앱을 만들고
const port = 3000 // port는 아무거나 해도 됨. 그래서 백서버로 두고

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://esthrelar:eunjinwoo01@boilerplate.h9y54ws.mongodb.net/?retryWrites=true&w=majority', {
    useNewUrlParser : true, useUnifiedTopology: true
}).then(() => console.log('MongoDB Connected ...'))
    .catch(err => console.log(err))

app.get('/', (req, res) => {
  res.send('Hello World! 안녕하세요')
})
//앱의 root directory에 hello world라는 것을 출력되게 해줌

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
//이 앱을 port 3000번에서 실행을 하는것.

