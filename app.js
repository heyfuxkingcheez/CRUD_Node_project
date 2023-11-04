const express = require("express");
const connect = require("./schemas");
const app = express();

// 몽고DB 연결
connect();

// 라우터 모듈
const productsRouter = require("./routes/products");

// middle ware
app.use(express.json());
app.use("/api", [productsRouter]);

// 서버 연결
const port = 8080;
app.listen(port, () => {
    console.log("server on", port);
});
