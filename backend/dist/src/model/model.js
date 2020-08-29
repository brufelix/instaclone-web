"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ModelComment = exports.ModelPost = exports.ModelUser = void 0;
const mongoose_1 = require("mongoose");
const schemaComment = new mongoose_1.Schema({
    author: { type: String, required: true },
    comment: { type: String },
    likes: { type: Number },
    post_id: { type: String }
});
const schemaPost = new mongoose_1.Schema({
    author_id: { type: String },
    image: { type: String },
    caption: { type: String },
    likes: { type: Number }
});
const schemaUser = new mongoose_1.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    bio: { type: String, default: "" },
    followers: { type: Number, default: 0 },
    following: { type: Number, default: 0 }
});
const ModelUser = mongoose_1.model("users", schemaUser);
exports.ModelUser = ModelUser;
const ModelPost = mongoose_1.model("posts", schemaPost);
exports.ModelPost = ModelPost;
const ModelComment = mongoose_1.model("comments", schemaComment);
exports.ModelComment = ModelComment;
