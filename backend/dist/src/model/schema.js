"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const schemaComment = new mongoose_1.Schema({
    comment: { type: String },
    likes: { type: Number }
});
const schemaPost = new mongoose_1.Schema({
    image: { type: String },
    caption: { type: String },
    comments: [schemaComment],
    likes: { type: Number }
});
const schemaUser = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    post: [schemaPost],
    comments: [schemaComment]
});
exports.default = mongoose_1.model("users", schemaUser);
