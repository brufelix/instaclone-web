"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const model_1 = require("../model/model");
const secret_1 = __importDefault(require("../../secret/secret"));
exports.default = {
    async user(_, { email }) {
        const user = await model_1.ModelUser.findOne({ email }, (err, res) => {
            if (err)
                throw new Error("User Invalid");
            return res;
        });
        return user;
    },
    async signin(_, { data }) {
        const { email, password } = data;
        let user = await model_1.ModelUser.findOne({ email }, (err, result) => {
            if (err)
                throw new Error("Email/password Invalid");
            return result;
        });
        if (user) {
            const valid = bcrypt_1.default.compareSync(password, user.password);
            const now = Math.floor(Date.now() / 1000);
            if (valid) {
                const infoUser = {
                    _id: user._id,
                    email: user.email,
                    iat: now,
                    exp: now + (3 * 24 * 60 * 60)
                };
                return { valid: true, token: jwt_simple_1.default.encode(infoUser, secret_1.default), user };
            }
            else {
                return { valid: false, token: "" };
            }
        }
        else {
            return { valid: false, token: "" };
        }
    },
    async getComments(_, { post_id }) {
        const comments = await model_1.ModelComment.find({ post_id }, (err, result) => {
            if (err)
                throw new Error("Error fetch comments");
            return result;
        });
        return comments;
    },
    async getPosts(_, { author_id }) {
        const posts = await model_1.ModelPost.find({ author_id }, (err, res) => {
            if (err)
                throw new Error("Error fetch Posts");
            return res;
        });
        return posts;
    }
};
