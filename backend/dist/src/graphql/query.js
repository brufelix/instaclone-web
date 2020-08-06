"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../model/model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.default = {
    user(_, args) {
        return { name: "Bruno" };
    },
    async signin(_, { data }) {
        const { email, password } = data;
        let user = await model_1.default.findOne({ email }, (err, result) => {
            if (err)
                throw new Error("Email/password Invalid");
            return result;
        });
        const valid = bcrypt_1.default.compareSync(password, user.password);
        if (valid) {
            return { valid: true, token: "abc" };
        }
        else {
            return { valid: false, token: "" };
        }
    }
};
