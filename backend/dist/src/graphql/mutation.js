"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
const model_1 = require("../model/model");
const secret_1 = __importDefault(require("../../secret/secret"));
exports.default = {
    signup(_, { data }) {
        const salt = bcrypt_1.default.genSaltSync();
        data.password = bcrypt_1.default.hashSync(data.password, salt);
        const newUser = new model_1.ModelUser({ ...data });
        newUser.save().catch(() => { throw new Error("Error ao Registrar Usuário."); });
        const now = Math.floor(Date.now() / 1000);
        const infoUser = {
            _id: newUser._id,
            email: newUser.email,
            iat: now,
            exp: now + (3 * 24 * 60 * 60)
        };
        return { valid: true, token: jwt_simple_1.default.encode(infoUser, secret_1.default) };
    },
    async addPost(_, { data, filter }) {
        const { email } = filter;
        const user = await model_1.ModelUser.findOne({ email }, (err, res) => {
            if (err)
                throw new Error("User Invalid");
            return res;
        });
        if (user) {
            const newPost = new model_1.ModelPost({ ...data, author_id: user._id, likes: 0 });
            newPost.save();
            return newPost;
        }
        else {
            throw new Error("Error add post");
        }
    },
    addComment(_, { data }) {
        const newComment = new model_1.ModelComment({ ...data, likes: 0 });
        newComment.save();
        return newComment;
    }
};
