const express = require("express");
const Products = require("../schemas/products");
const router = express.Router();

// 상품 목록 조회 API
router.get("/products", async (req, res) => {
    try {
        const allProducts = await Products.find({});
        return res.send(allProducts.reverse());
    } catch (error) {
        return res.json({ errorMessage: "실패!" });
    }
});

// 상품 상세 조회 API
router.get("/product/:id", async (req, res) => {
    const _id = req.params.id;
    try {
        const productsOne = await Products.findOne({ _id });
        const productDetail = {
            _id: productsOne._id,
            title: productsOne.title,
            content: productsOne.content,
            author: productsOne.author,
            status: productsOne.status,
            createdAt: productsOne.createdAt,
        };
        res.json(productDetail);
    } catch (error) {
        console.log(error);
    }
});

// 상품 등록 API
router.post("/products", (req, res) => {
    const { title, content, author, pwd } = req.body;
    try {
        Products.create({
            title,
            content,
            author,
            pwd,
            status: "FOR_SALE",
        });
        return res.status(200).json({ message: "판매 상품을 등록하였습니다." });
    } catch (error) {
        return res.json({ errorMessage: "데이터 형식이 올바르지 않습니다." });
    }
});

// 상품 수정 API
router.put("/product/:id", async (req, res) => {
    const { title, content, pwd, status } = req.body;
    const _id = req.params.id;
    const productsOne = await Products.findOne({ _id });
    try {
        if (pwd !== productsOne.pwd) {
            return res
                .status(401.1)
                .send({ errorMessage: "상품 수정 권한이 없습니다." });
        } else if (!title || !content || !status || !pwd) {
            return res
                .status(400)
                .send({ errorMessage: "데이터 형식이 올바르지 않아유" });
        } else {
            const insertOne = {
                title,
                content,
                pwd,
                status: status,
            };
            await Products.updateOne(insertOne);
            res.status(200).send({ message: "상품 정보를 수정하였습니다." });
        }
    } catch (error) {
        return res
            .status(404)
            .send({ errorMessage: "상품 조회에 실패하였습니다" });
    }
});
// 상품 삭제 API
router.delete("/product/:id", async (req, res) => {
    const { pwd } = req.body;
    const _id = req.params.id;
    const productsOne = await Products.findOne({ _id });

    try {
        if (!pwd) {
            return res
                .status(400)
                .send({ errorMessage: "비밀번호를 입력 해주셔유" });
        } else if (pwd !== productsOne.pwd) {
            return res
                .status(401)
                .send({ errorMessage: "상품 삭제 권한이 없습니다." });
        } else {
            await Products.deleteOne(productsOne);
            res.status(200).send({ message: "상품을 삭제하였습니다." });
        }
    } catch (error) {
        console.log(error);
        return res
            .status(404)
            .send({ errorMessage: "상품 조회에 실패하였습니다." });
    }
});

module.exports = router;
