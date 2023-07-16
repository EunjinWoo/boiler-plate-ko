const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    name: {
        type: String,
        maxlength: 50
    },
    email: {
        type: String,
        trim: true, //esth relar@naver.com 이렇게 치면 저 space을 없애줌
        unique: 1 // email은 unique할 수 있도록. 같은 email 쓰지 못하게
    },
    password: {
        type: String,
        minlength: 5
    },
    lastname: {
        type: String,
        maxlength: 50
    },
    role: { //어떤 User는 관리자가 될 수도 있고, 어떤 User는 일반 유저일 수 있으므로.
        type: Number, //number가 1이면 관리자, 0이면 일반 유저 뭐 이렇게
        default: 0
    },
    image: String,
    token: { //token으로 유효성 관리
        type: String
    },
    tokenExp: { // expiration. 유효기간.
        type: Number
    }

})

const User = mongoose.model('User', userSchema) // 이 schema를 model로 감싸줌.

module.exports = {User} //위의 모델을 다른 곳에서도 쓸 수 있게 export 해주는 것.