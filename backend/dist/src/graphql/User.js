"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model/model");
exports.default = {
    async postageQuantity({ _id, postageQuantity }) {
        let int = 0;
        await model_1.ModelPost.find({ author_id: _id }, (err, posts) => {
            if (err)
                throw new Error("Error fetch posts quantity!");
            int = posts.length;
        }).catch((err) => {
            throw new Error("Error fetch posts quantity!");
        });
        return postageQuantity = int;
    }
};
