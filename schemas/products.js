const mongoose = require("mongoose");

const productsSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        author: {
            type: String,
            required: true,
        },
        pwd: {
            type: String,
            required: true,
        },
        status: {
            type: String,
        },
    },
    {
        timestamps: true,
    }
);

module.exports = mongoose.model("product", productsSchema);
