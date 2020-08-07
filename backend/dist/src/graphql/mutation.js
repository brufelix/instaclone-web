"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model/model");
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.default = {
    signup(_, { data }) {
        const salt = bcrypt_1.default.genSaltSync();
        data.password = bcrypt_1.default.hashSync(data.password, salt);
        const newUser = new model_1.ModelUser({ ...data });
        newUser.save();
        return newUser;
    },
    async addPost(_, { data, filter }) {
        const { email } = filter;
        const user = await model_1.ModelUser.findOne({ email }, (err, res) => {
            if (err)
                throw new Error("User Invalid");
            return res;
        });
        if (user) {
            const newPost = new model_1.ModelPost({ ...data, author_id: user._id, comments: [], likes: 0 });
            newPost.save();
            return newPost;
        }
        else {
            throw new Error("Error add post");
        }
    }
};
