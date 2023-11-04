// 서버와 mongoDB를 연결하기 위한 템플릿
const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

const connect = () => {
    // mongoose.connect는 MongoDB 서버에 연결하는 메서드입니다.
    mongoose
        .connect(
            `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PW}@woogi.zmmpqdy.mongodb.net/?retryWrites=true&w=majority`,
            {
                dbName: `${process.env.DB_NAME}`, // spa_market 데이터베이스명을 사용합니다.
            }
        )
        .then(() => console.log("MongoDB 연결에 성공하였습니다."))
        .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

// 몽구스 커넥션에 이벤트 리스너를 달게 해준다. 에러 발생 시 에러 내용을 기록하고, 연결 종료 시 재연결을 시도한다.
mongoose.connection.on("error", (err) => {
    console.error("MongoDB 연결 에러", err);
});

mongoose.connection.on("disconnected", () => {
    console.err("MongoDB 연결이 끊겼습니다, 연결을 재시도합니다.");
    connect(); // 연결 재시도
});

module.exports = connect;
