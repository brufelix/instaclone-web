"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const model_1 = __importDefault(require("../model/model"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.default = {
    signup(_, { data }) {
        const salt = bcrypt_1.default.genSaltSync();
        data.password = bcrypt_1.default.hashSync(data.password, salt);
        const newUser = new model_1.default({
            ...data
        });
        newUser.save();
        return newUser;
    }
};
