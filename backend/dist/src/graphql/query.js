"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = require("../model/model");
const bcrypt_1 = __importDefault(require("bcrypt"));
const jwt_simple_1 = __importDefault(require("jwt-simple"));
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
                    name: user.name,
                    email: user.email,
                    iat: now,
                    exp: now + (3 * 24 * 60 * 60)
                };
                return { valid: true, token: jwt_simple_1.default.encode(infoUser, secret_1.default) };
            }
            else {
                return { valid: false, token: "" };
            }
        }
        else {
            return { valid: false, token: "" };
        }
    }
};
